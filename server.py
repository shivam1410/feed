#!/usr/bin/env python3
"""Tiny zero-dependency server for the multi-source live feed.

Serves the static page from this directory and exposes:

  GET  /feed?src=<id>  — fetches a known upstream RSS/JSON feed server-side
                         (sidesteps browser CORS). `src` is validated against
                         the FEEDS allowlist, so it cannot become an open proxy.

  POST /curate         — ranks/summarizes a batch of articles by calling the
                         local `claude` CLI in headless mode, reusing the user's
                         existing Claude Code login. No API key required.

Usage:  python3 server.py [port]   (default port 4173)
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

# Allowlist of fetchable sources: id -> upstream URL. Only these are fetchable,
# so the endpoint cannot be turned into an open proxy. RSS sources return XML;
# the others return JSON, which the client normalizes per source.
FEEDS = {
    "nature": "https://www.nature.com/nature.rss",
    "deepmind": "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/rss/",
    "huggingface": "https://huggingface.co/api/daily_papers",
    "arxiv": "https://rss.arxiv.org/rss/cs.LG",
    "latentspace": "https://www.latent.space/feed",
    "simonw": "https://simonwillison.net/atom/everything/",
}

# Claude CLI model tier -> alias accepted by `claude --model`.
MODEL_TIERS = {"haiku": "haiku", "sonnet": "sonnet", "opus": "opus"}

# Hosts the /img proxy will fetch thumbnails from (suffix match, https only).
IMAGE_HOSTS = ("googleusercontent.com", "huggingface.co", "nature.com", "springernature.com")
MAX_IMAGE_BYTES = 8 * 1024 * 1024

def resolve_port() -> int:
    # Parsed only when run as a server; importing this module (e.g. from sync.py
    # invoked with flags like --push) must NOT try to int() those args.
    try:
        return int(sys.argv[1])
    except (IndexError, ValueError):
        return 4173


def find_claude() -> str | None:
    """Locate the claude CLI even if it isn't on the server process's PATH."""
    found = shutil.which("claude")
    if found:
        return found
    fallback = os.path.expanduser("~/.local/bin/claude")
    return fallback if os.path.exists(fallback) else None


SOURCE_CHARS = 1500  # how much of each source abstract to give the model


def compose_profile(interests: str = "", hobbies: str = "", goals: str = "") -> str:
    parts = []
    if interests.strip():
        parts.append(f"Interests: {interests.strip()}")
    if hobbies.strip():
        parts.append(f"Hobbies: {hobbies.strip()}")
    if goals.strip():
        parts.append(f"Goals: {goals.strip()}")
    return "\n".join(parts)


def build_prompt(items: list, profile: str, top_n: int) -> str:
    payload = [
        {
            "i": int(it.get("i", idx)),
            "source": str(it.get("source", "")),
            "title": str(it.get("title", ""))[:300],
            "text": str(it.get("summary", ""))[:SOURCE_CHARS],
        }
        for idx, it in enumerate(items[:45])
    ]
    profile_block = profile.strip() or "(no profile given — judge by general scientific significance and novelty)"
    return (
        "You are a research-feed curator and science writer. Score each article from "
        "0-100 for how well it fits the reader's profile below, then write a "
        "self-contained briefing for the best ones that a reader can absorb in one to "
        "two minutes. Favor genuine relevance to the profile, plus novelty and "
        "significance.\n\n"
        f"READER PROFILE:\n{profile_block}\n\n"
        f"Select the {top_n} best-matching articles. For each, return an object with:\n"
        '  "i": the article index (integer),\n'
        '  "score": integer 0-100 for fit to the profile,\n'
        '  "summary": a 100-160 word plain-language briefing. Open with the key '
        "finding or news, then give the specifics — concrete numbers, methods, "
        "datasets or results that appear in the source text. Close with why it "
        "matters. Use ONLY facts present in the provided title and text; never invent "
        "figures, names or claims. If the source text is thin, write a shorter "
        "accurate summary rather than padding it.\n"
        '  "why": a phrase of 8 words or fewer on why it fits the profile.\n\n'
        "Order by score, highest first. Return ONLY a valid JSON array — escape "
        "quotes, no line breaks inside string values, no prose outside the array.\n\n"
        "ARTICLES:\n" + json.dumps(payload, ensure_ascii=False)
    )


class Handler(SimpleHTTPRequestHandler):
    # Add Cache-Control: no-store to any response that doesn't set its own, so
    # edited static files (html/js/css) always load fresh during local dev.
    def send_response(self, *args, **kwargs):
        self._cc_set = False
        super().send_response(*args, **kwargs)

    def send_header(self, key, value):
        if key.lower() == "cache-control":
            self._cc_set = True
        super().send_header(key, value)

    def end_headers(self):
        if not getattr(self, "_cc_set", False):
            super().send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/feed":
            return self.serve_feed(parse_qs(parsed.query))
        if parsed.path == "/img":
            return self.serve_image(parse_qs(parsed.query))
        return super().do_GET()

    def do_POST(self):
        path = urlparse(self.path).path
        if path == "/curate":
            return self.serve_curate()
        if path == "/profile":
            return self.serve_profile()
        self.send_error(404)

    def read_json_body(self) -> dict:
        length = int(self.headers.get("Content-Length", 0))
        return json.loads(self.rfile.read(length) or b"{}")

    def serve_profile(self):
        # Persist the reader profile into sync.config.json so the daily job uses it.
        try:
            req = self.read_json_body()
        except (ValueError, json.JSONDecodeError) as err:
            return self.send_json(400, {"error": f"Bad request body: {err}"})
        cfg_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "sync.config.json")
        cfg = {}
        try:
            with open(cfg_path) as fh:
                cfg = json.load(fh)
        except (FileNotFoundError, json.JSONDecodeError):
            pass
        for field in ("interests", "hobbies", "goals"):
            cfg[field] = str(req.get(field, cfg.get(field, "")))
        with open(cfg_path, "w") as fh:
            json.dump(cfg, fh, ensure_ascii=False, indent=2)
        self.send_json(200, {"ok": True})

    def serve_feed(self, query):
        src = (query.get("src") or ["nature"])[0]
        url = FEEDS.get(src)
        if not url:
            self.send_error(400, f"Unknown feed source: {src!r}")
            return

        try:
            req = urllib.request.Request(url, headers={"User-Agent": "multi-feed-reader/1.0"})
            with urllib.request.urlopen(req, timeout=20) as resp:
                body = resp.read()
        except Exception as err:  # surface upstream failures to the client
            self.send_error(502, f"Upstream feed fetch failed: {err}")
            return

        self.send_response(200)
        self.send_header("Content-Type", "application/xml; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def serve_image(self, query):
        url = (query.get("url") or [""])[0]
        parsed = urlparse(url)
        host = parsed.hostname or ""
        if parsed.scheme != "https" or not any(
            host == h or host.endswith("." + h) for h in IMAGE_HOSTS
        ):
            self.send_error(400, "Image host not allowed")
            return
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "multi-feed-reader/1.0"})
            with urllib.request.urlopen(req, timeout=15) as resp:
                ctype = resp.headers.get("Content-Type", "")
                if not ctype.startswith("image/"):
                    self.send_error(415, "Not an image")
                    return
                body = resp.read(MAX_IMAGE_BYTES + 1)
        except Exception as err:
            self.send_error(502, f"Image fetch failed: {err}")
            return
        if len(body) > MAX_IMAGE_BYTES:
            self.send_error(413, "Image too large")
            return
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Cache-Control", "public, max-age=86400")
        self.end_headers()
        self.wfile.write(body)

    def serve_curate(self):
        claude = find_claude()
        if not claude:
            return self.send_json(503, {"error": "claude CLI not found on this machine"})

        try:
            req = self.read_json_body()
        except (ValueError, json.JSONDecodeError) as err:
            return self.send_json(400, {"error": f"Bad request body: {err}"})

        items = req.get("items") or []
        if not isinstance(items, list) or not items:
            return self.send_json(400, {"error": "No items to curate"})
        top_n = max(1, min(20, int(req.get("topN", 12))))
        model = MODEL_TIERS.get(str(req.get("model", "haiku")), "haiku")
        profile = compose_profile(
            str(req.get("interests", "")), str(req.get("hobbies", "")), str(req.get("goals", ""))
        )
        prompt = build_prompt(items, profile, top_n)

        try:
            # Headless, no tools needed; stdin from /dev/null avoids a startup wait.
            proc = subprocess.run(
                # --strict-mcp-config skips the user's MCP servers (faster, no
                # health-check stalls); curation is pure text generation.
                [claude, "-p", prompt, "--model", model, "--strict-mcp-config"],
                stdin=subprocess.DEVNULL,
                capture_output=True,
                text=True,
                timeout=185,
                cwd=os.path.dirname(os.path.abspath(__file__)),
            )
        except subprocess.TimeoutExpired:
            return self.send_json(504, {"error": "Claude CLI timed out"})

        if proc.returncode != 0:
            detail = (proc.stderr or proc.stdout or "unknown error").strip()[:500]
            return self.send_json(502, {"error": f"Claude CLI failed: {detail}"})

        # The client extracts the JSON array from this text (handles fences/prose).
        self.send_json(200, {"text": proc.stdout})

    def send_json(self, code: int, obj: dict):
        body = json.dumps(obj).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *args):
        pass  # keep the console quiet


if __name__ == "__main__":
    PORT = resolve_port()
    print(f"Live feed running at http://localhost:{PORT}")
    print("Sources:", ", ".join(FEEDS))
    print("Curation CLI:", find_claude() or "NOT FOUND (Smart picks disabled)")
    ThreadingHTTPServer(("", PORT), Handler).serve_forever()
