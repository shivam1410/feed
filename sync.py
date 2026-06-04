#!/usr/bin/env python3
"""Daily sync job: fetch all feed sources, curate with the Claude CLI, and write
a digest snapshot to data/latest.json (plus a dated copy).

The web page's "✨ For You" tab loads data/latest.json instantly, so opening the
page shows the day's curated digest without waiting on the CLI.

Reuses server.py helpers (find_claude, build_prompt, FEEDS) — importing it does
not start the HTTP server thanks to the __main__ guard.

Run manually:  python3 sync.py
Scheduled:     see com.shivam.feedsync.plist (LaunchAgent, 19:00 daily).
"""

from __future__ import annotations

import argparse
import datetime
import html
import json
import os
import re
import sqlite3
import subprocess
import sys
import urllib.request
import xml.etree.ElementTree as ET

from server import FEEDS, MODEL_TIERS, find_claude

# The 10 default categories shown in the UI (+ an implicit "Other" bucket).
# Edit this list to change what the feed is organized around.
CATEGORIES = [
    "AI Research",
    "Nature & Ecology",
    "Health & Medicine",
    "Genetics & Biology",
    "Neuroscience & Mind",
    "Physics & Space",
    "Climate & Energy",
    "Robotics & Engineering",
    "Science & Society",
    "Chemistry & Materials",
]
CATEGORIZE_CHUNK = 60   # items per LLM categorization call
BRIEF_PER_CATEGORY = 3  # top stories per category that get a full briefing
BRIEF_GLOBAL_TOP = 22   # also brief the overall top-N by score (covers Home's top 20)
BRIEF_BATCH = 12        # items per LLM briefing call

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(HERE, "data")
STORIES_DIR = os.path.join(HERE, "stories")
CONFIG_PATH = os.path.join(HERE, "sync.config.json")
SOURCE_FEED_CAP = 50  # how many items per source to publish for its tab
LEADERBOARD_URL = "https://huggingface.co/api/models?sort=trendingScore&direction=-1&limit=10"
MODEL_DETAIL_URL = "https://huggingface.co/api/models/{id}"
MODEL_README_URL = "https://huggingface.co/{id}/raw/main/README.md"


def log(msg: str) -> None:
    print(f"[{datetime.datetime.now().isoformat(timespec='seconds')}] {msg}", flush=True)


def load_config() -> dict:
    defaults = {"interests": "", "hobbies": "", "goals": "", "topN": 12, "model": "haiku", "perSource": 12}
    try:
        with open(CONFIG_PATH) as fh:
            defaults.update(json.load(fh))
    except FileNotFoundError:
        pass
    return defaults


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": "multi-feed-reader/1.0"})
    with urllib.request.urlopen(req, timeout=25) as resp:
        return resp.read()


# ---------- parsing (mirrors the browser normalizers) ----------

def _local(tag: str) -> str:
    return tag.rsplit("}", 1)[-1]


def html_to_text(raw: str) -> str:
    if not raw:
        return ""
    # Drop the Nature "Published online… doi:" lead paragraph if present.
    first_p = re.search(r"<p>(.*?)</p>", raw, re.S | re.I)
    if first_p and re.search(r"Published online|doi:", first_p.group(1), re.I):
        raw = raw[: first_p.start()] + raw[first_p.end():]
    text = re.sub(r"<[^>]+>", " ", raw)
    return re.sub(r"\s+", " ", html.unescape(text)).strip()


def parse_rss(data: bytes, source: str) -> list[dict]:
    """Parse RSS 1.0/2.0 (<item>) and Atom (<entry>) feeds."""
    root = ET.fromstring(data)
    items: list[dict] = []
    for el in root.iter():
        if _local(el.tag) not in ("item", "entry"):
            continue
        title = link = date = summary = guid = doi = image = ""
        authors: list[str] = []
        for ch in el:
            name, txt = _local(ch.tag), (ch.text or "").strip()
            if name == "title" and not title:
                title = txt
            elif name == "link":
                href = ch.get("href")  # Atom: <link href=... rel=...>
                if href and ch.get("rel", "alternate") == "alternate":
                    link = href
                elif txt and not link:
                    link = txt
            elif name == "creator":
                authors.append(txt)
            elif name == "author":  # Atom: <author><name>…</name></author>
                nm = next((( c.text or "").strip() for c in ch if _local(c.tag) == "name"), txt)
                if nm:
                    authors.append(nm)
            elif name in ("date", "pubDate", "published", "updated") and not date:
                date = txt
            elif name == "encoded":
                summary = html_to_text(txt) or summary
            elif name in ("description", "summary") and not summary:
                summary = html_to_text(txt)
            elif name == "content":
                if ch.get("url") and not image:  # media:content image
                    image = ch.get("url")
                elif not summary:  # Atom content (text/html)
                    inner = txt or "".join(ET.tostring(c, encoding="unicode") for c in ch)
                    summary = html_to_text(inner)
            elif name == "thumbnail" and not image and ch.get("url"):
                image = ch.get("url")
            elif name in ("guid", "id") and not guid:
                guid = txt
            elif name == "doi" and not doi:
                doi = txt
        if not link:
            link = el.get("{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about") or guid
        items.append({
            "guid": doi or guid or link, "title": title or "(untitled)", "link": link,
            "authors": [a for a in authors if a], "date": date, "summary": summary,
            "image": image, "source": source,
        })
    return items


def parse_hf(data: bytes, source: str) -> list[dict]:
    rows = json.loads(data)
    out = []
    for r in rows:
        p = r.get("paper", {})
        out.append({
            "guid": p.get("id", ""), "title": p.get("title") or r.get("title") or "(untitled)",
            "link": f"https://huggingface.co/papers/{p.get('id', '')}",
            "authors": [a.get("name") for a in p.get("authors", []) if a.get("name")],
            "date": r.get("publishedAt") or p.get("publishedAt", ""),
            "summary": p.get("ai_summary") or p.get("summary") or r.get("summary") or "",
            "image": r.get("thumbnail", ""), "source": source,
            "extra": f"▲ {p['upvotes']}" if isinstance(p.get("upvotes"), int) else "",
        })
    return out


def parse_s2(data: bytes, source: str) -> list[dict]:
    out = []
    for p in (json.loads(data).get("data") or []):
        out.append({
            "guid": p.get("paperId", ""), "title": p.get("title") or "(untitled)",
            "link": p.get("url") or (p.get("openAccessPdf") or {}).get("url", ""),
            "authors": [a.get("name") for a in p.get("authors", []) if a.get("name")],
            "date": p.get("publicationDate", ""), "summary": p.get("abstract") or "",
            "image": "", "source": source, "extra": p.get("venue") or "",
        })
    return out


PARSERS = {
    "nature": parse_rss, "deepmind": parse_rss, "huggingface": parse_hf, "semanticscholar": parse_s2,
    "arxiv": parse_rss, "latentspace": parse_rss, "simonw": parse_rss,
}
SOURCE_NAMES = {
    "nature": "Nature", "deepmind": "DeepMind", "huggingface": "HF Trending Papers",
    "semanticscholar": "Semantic Scholar", "arxiv": "arXiv (cs.LG)",
    "latentspace": "Latent Space", "simonw": "Simon Willison",
}


def gather_by_source() -> dict[str, list[dict]]:
    """Fetch each source's feed once; return {src_id: [items]}."""
    by_source: dict[str, list[dict]] = {}
    for src, parser in PARSERS.items():
        try:
            parsed = parser(fetch(FEEDS[src]), SOURCE_NAMES[src])
            by_source[src] = parsed[:SOURCE_FEED_CAP]
            log(f"{src}: {len(by_source[src])} items")
        except Exception as err:  # one bad source must not sink the run
            by_source[src] = []
            log(f"{src}: FAILED ({err})")
    return by_source


# ---------- categorization ----------

def extract_json(text: str) -> list:
    fenced = re.search(r"```(?:json)?\s*([\s\S]*?)```", text)
    body = fenced.group(1) if fenced else text
    start, end = body.find("["), body.rfind("]")
    if start == -1 or end == -1:
        raise ValueError("no JSON array in CLI output")
    return json.loads(body[start:end + 1])


def run_claude(prompt: str, model: str, timeout: int = 240) -> list:
    """Run the headless claude CLI on a prompt and parse its JSON array output."""
    claude = find_claude()
    if not claude:
        raise RuntimeError("claude CLI not found")
    proc = subprocess.run(
        # --strict-mcp-config skips loading MCP servers (faster, no health-check stalls).
        [claude, "-p", prompt, "--model", model, "--strict-mcp-config"],
        stdin=subprocess.DEVNULL, capture_output=True, text=True, timeout=timeout, cwd=HERE,
    )
    if proc.returncode != 0:
        raise RuntimeError(f"claude CLI failed: {(proc.stderr or proc.stdout).strip()[:300]}")
    return extract_json(proc.stdout)


def build_categorize_prompt(items: list[dict], categories: list[str]) -> str:
    payload = [
        {"i": i, "source": it.get("source", ""), "title": str(it.get("title", ""))[:200],
         "text": str(it.get("summary", ""))[:240]}
        for i, it in enumerate(items)
    ]
    return (
        "You are a science-news librarian. For EACH article, choose the single "
        'best-fitting category from the list (use "Other" if none fit) and rate its '
        "general significance and novelty from 0-100.\n\n"
        "CATEGORIES: " + ", ".join(categories) + "\n\n"
        "Return ONLY a JSON array, one object per article: "
        '{"i": <index>, "category": "<one category or Other>", "score": <0-100>}. '
        "No prose, no extra keys.\n\nARTICLES:\n" + json.dumps(payload, ensure_ascii=False)
    )


def categorize(items: list[dict], cfg: dict) -> list[dict]:
    """Tag each item with a category + significance score via the LLM, in chunks."""
    model = MODEL_TIERS.get(str(cfg.get("model", "haiku")), "haiku")
    valid = set(CATEGORIES)
    annotated = [dict(it) for it in items]
    for start in range(0, len(items), CATEGORIZE_CHUNK):
        chunk = items[start:start + CATEGORIZE_CHUNK]
        try:
            res = run_claude(build_categorize_prompt(chunk, CATEGORIES), model, timeout=240)
        except Exception as err:  # a bad chunk shouldn't sink the run
            log(f"categorize chunk @{start} failed ({err}) — defaulting to Other")
            res = []
        by_i = {o["i"]: o for o in res if isinstance(o, dict) and "i" in o}
        for j in range(len(chunk)):
            o = by_i.get(j, {})
            cat, score = o.get("category"), o.get("score")
            annotated[start + j]["category"] = cat if cat in valid else "Other"
            annotated[start + j]["score"] = score if isinstance(score, int) else None
        log(f"categorized {min(start + CATEGORIZE_CHUNK, len(items))}/{len(items)}")
    return annotated


def build_brief_prompt(items: list[dict]) -> str:
    payload = [
        {"i": i, "source": it.get("source", ""), "title": str(it.get("title", ""))[:300],
         "text": str(it.get("summary", ""))[:1500]}
        for i, it in enumerate(items)
    ]
    return (
        "You are a science writer. For EACH article write a self-contained briefing "
        "a reader can absorb in one to two minutes.\n\n"
        "For each, return an object: "
        '{"i": <index>, "summary": "a 100-160 word plain-language briefing — open '
        "with the key finding, then the specifics (concrete numbers, methods or "
        "results that appear in the text), then why it matters. Use ONLY facts "
        "present in the title and text; never invent figures or claims. If the text "
        'is thin, write a shorter accurate summary rather than padding it.", '
        '"why": "<=8 word takeaway"}.\n'
        "Return ONLY a valid JSON array — escape quotes, no line breaks inside "
        "strings, no prose.\n\nARTICLES:\n" + json.dumps(payload, ensure_ascii=False)
    )


def brief_top(items: list[dict], cfg: dict) -> list[dict]:
    """Write full briefings for the top BRIEF_PER_CATEGORY stories per category."""
    model = MODEL_TIERS.get(str(cfg.get("model", "haiku")), "haiku")
    by_cat: dict[str, list[int]] = {}
    for idx, it in enumerate(items):
        by_cat.setdefault(it.get("category", "Other"), []).append(idx)
    chosen: set[int] = set()
    for idxs in by_cat.values():  # top per category (for category filtering)
        chosen.update(sorted(idxs, key=lambda i: items[i].get("score") or 0, reverse=True)[:BRIEF_PER_CATEGORY])
    # global top by score (so Home's top-N are all briefed)
    chosen.update(sorted(range(len(items)), key=lambda i: items[i].get("score") or 0, reverse=True)[:BRIEF_GLOBAL_TOP])
    to_brief: list[int] = sorted(chosen)

    for start in range(0, len(to_brief), BRIEF_BATCH):
        batch = to_brief[start:start + BRIEF_BATCH]
        try:
            res = run_claude(build_brief_prompt([items[i] for i in batch]), model, timeout=240)
        except Exception as err:  # a bad batch keeps the raw summaries
            log(f"brief batch @{start} failed ({err})")
            res = []
        by_i = {o["i"]: o for o in res if isinstance(o, dict) and "i" in o}
        for j, gi in enumerate(batch):
            o = by_i.get(j, {})
            if o.get("summary"):
                items[gi]["origSummary"] = items[gi].get("summary", "")
                items[gi]["summary"] = o["summary"]
                items[gi]["why"] = o.get("why", "")
                items[gi]["briefed"] = True
        log(f"briefed {min(start + BRIEF_BATCH, len(to_brief))}/{len(to_brief)}")
    return items


# ---------- static-site output ----------

def slugify(text: str, limit: int = 60) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")
    return (s[:limit].rstrip("-")) or "story"


def write_json(path: str, obj) -> None:
    with open(path, "w") as fh:
        json.dump(obj, fh, ensure_ascii=False, indent=2)


def yaml_value(v) -> str:
    if isinstance(v, list):
        return "[" + ", ".join(json.dumps(str(x), ensure_ascii=False) for x in v) + "]"
    return json.dumps("" if v is None else v, ensure_ascii=False)


def write_story_md(item: dict, generated: str) -> str:
    """Write one story as Markdown with YAML front-matter, grouped by category and
    de-duplicated by slug (re-runs overwrite the same file)."""
    cat_dir = os.path.join(STORIES_DIR, slugify(item.get("category", "other")))
    os.makedirs(cat_dir, exist_ok=True)
    slug = slugify(item.get("title", "story"))
    path = os.path.join(cat_dir, f"{slug}.md")
    fields = {
        "title": item.get("title", ""), "category": item.get("category", "Other"),
        "source": item.get("source", ""), "url": item.get("link", ""),
        "authors": item.get("authors", []), "date": item.get("date", ""),
        "score": item.get("score"), "guid": item.get("guid", ""),
        "image": item.get("image", ""), "generated": generated,
    }
    lines = ["---"]
    lines += [f"{k}: {yaml_value(v)}" for k, v in fields.items()]
    lines.append("---\n")
    lines.append(item.get("summary", "").strip() + "\n")
    with open(path, "w") as fh:
        fh.write("\n".join(lines))
    return os.path.relpath(path, HERE)


def write_sqlite(scored: list[dict], generated: str) -> None:
    """Mirror story metadata into a single-file SQLite DB for safekeeping/querying."""
    db = os.path.join(DATA_DIR, "feed.db")
    con = sqlite3.connect(db)
    try:
        con.execute("DROP TABLE IF EXISTS stories")  # schema may have changed
        con.execute(
            "CREATE TABLE stories ("
            "guid TEXT PRIMARY KEY, generated TEXT, date TEXT, category TEXT, source TEXT, "
            "title TEXT, url TEXT, score INTEGER, summary TEXT, authors TEXT, image TEXT)"
        )
        for it in scored:
            con.execute(
                "INSERT OR REPLACE INTO stories VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                (
                    it.get("guid", ""), generated, it.get("date", ""), it.get("category", "Other"),
                    it.get("source", ""), it.get("title", ""), it.get("link", ""), it.get("score"),
                    it.get("summary", ""), ", ".join(it.get("authors", []) or []), it.get("image", ""),
                ),
            )
        con.commit()
    finally:
        con.close()


def write_outputs(items: list[dict], by_source: dict, cfg: dict) -> None:
    os.makedirs(DATA_DIR, exist_ok=True)
    generated = datetime.datetime.now().astimezone().isoformat(timespec="seconds")

    # Order by significance score (highest first; unscored last).
    items = sorted(items, key=lambda it: (it.get("score") is not None, it.get("score") or 0), reverse=True)

    # The categorized feed the app reads. `categories` is the canonical list the
    # UI renders as chips. No personal profile is published.
    feed = {"generatedAt": generated, "categories": CATEGORIES, "total": len(items), "items": items}
    write_json(os.path.join(DATA_DIR, "feed.json"), feed)
    write_json(os.path.join(DATA_DIR, "latest.json"), feed)  # back-compat

    # Per-source snapshots so the source tabs work on a static host.
    for src, src_items in by_source.items():
        write_json(os.path.join(DATA_DIR, f"source-{src}.json"), {"generatedAt": generated, "items": src_items})

    # Per-story Markdown (archive / safekeeping), grouped by category.
    md_paths = [write_story_md(it, generated) for it in items]

    # Flat metadata (JSON) + SQLite mirror.
    meta = [{k: it.get(k) for k in ("guid", "title", "category", "source", "link", "date", "score")} for it in items]
    write_json(os.path.join(DATA_DIR, "metadata.json"), {"generatedAt": generated, "items": meta})
    write_sqlite(items, generated)

    log(f"wrote feed.json ({len(items)} items), {len(by_source)} source files, {len(md_paths)} story MD, metadata.json, feed.db")


def _model_detail(model_id: str) -> dict:
    """Best-effort fetch of a model's detail (tags, library, created date)."""
    try:
        d = json.loads(fetch(MODEL_DETAIL_URL.format(id=model_id)))
        return d if isinstance(d, dict) else {}
    except Exception:
        return {}


def _readme_excerpt(model_id: str, limit: int = 1400) -> str:
    """Best-effort fetch of a model README → plain-text prose excerpt (no frontmatter/markup)."""
    try:
        raw = fetch(MODEL_README_URL.format(id=model_id)).decode("utf-8", "ignore")
    except Exception:
        return ""
    m = re.match(r"\s*---.*?---\s*", raw, re.S)  # strip YAML frontmatter
    if m:
        raw = raw[m.end():]
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", raw)       # images
    text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)   # links → label
    text = re.sub(r"<[^>]+>", " ", text)                   # html
    text = re.sub(r"[#>*_`|]+", " ", text)                 # md punctuation
    return re.sub(r"\s+", " ", text).strip()[:limit]


def build_model_summary_prompt(models: list[dict]) -> str:
    payload = [
        {"i": i, "id": m.get("id"), "task": m.get("task") or "",
         "tags": (m.get("tags") or [])[:10], "about": m.get("readme") or ""}
        for i, m in enumerate(models)
    ]
    return (
        "You are an ML librarian. For EACH Hugging Face model, write ONE concise sentence "
        "(max 28 words) describing what the model is and what it does, in plain language for "
        "an AI engineer. Base it ONLY on the provided name, task, tags, and 'about' excerpt. "
        "Do NOT invent benchmark numbers or unverifiable claims. If information is thin, "
        "describe it generically by its task/modality.\n\n"
        'Return ONLY a JSON array: [{"i": <index>, "summary": "<one sentence>"}]. '
        "No prose, no extra keys.\n\nMODELS:\n" + json.dumps(payload, ensure_ascii=False)
    )


def write_leaderboard(cfg: dict | None = None) -> None:
    """Write the top-10 trending Hugging Face models (enriched + summarized) for the Leaderboard tab."""
    try:
        rows = json.loads(fetch(LEADERBOARD_URL))
    except Exception as err:  # leaderboard is optional — never sink the run
        log(f"leaderboard: fetch failed ({err})")
        return
    models = []
    for r in (rows if isinstance(rows, list) else [])[:10]:
        mid = r.get("id")
        if not mid:
            continue
        detail = _model_detail(mid)
        tags = [t for t in (detail.get("tags") or []) if isinstance(t, str) and "://" not in t]
        models.append({
            "id": mid,
            "task": r.get("pipeline_tag") or detail.get("pipeline_tag"),
            "likes": r.get("likes"),
            "downloads": r.get("downloads"),
            "library": detail.get("library_name"),
            "createdAt": detail.get("createdAt"),
            "url": f"https://huggingface.co/{mid}",
            "tags": tags,
            "readme": _readme_excerpt(mid),
        })

    if models:  # one-line "what it does" summaries (best-effort — never sink the run)
        try:
            model_name = MODEL_TIERS.get(str((cfg or {}).get("model", "haiku")), "haiku")
            for obj in run_claude(build_model_summary_prompt(models), model_name, timeout=180):
                i = obj.get("i")
                if isinstance(i, int) and 0 <= i < len(models):
                    models[i]["summary"] = str(obj.get("summary", "")).strip()
            log(f"leaderboard: summarized {sum(1 for m in models if m.get('summary'))}/{len(models)} models")
        except Exception as err:
            log(f"leaderboard: summary generation failed ({err})")

    for m in models:  # drop bulky grounding fields from the published artifact
        m.pop("readme", None)
        m.pop("tags", None)

    os.makedirs(DATA_DIR, exist_ok=True)
    write_json(os.path.join(DATA_DIR, "leaderboard.json"), {
        "generatedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "source": "Hugging Face — trending models", "models": models,
    })
    log(f"wrote leaderboard.json ({len(models)} models)")


def git_publish() -> int:
    """Commit and push generated content. Used by the scheduled job with --push."""
    if not os.path.isdir(os.path.join(HERE, ".git")):
        log("git: not a repo yet — skipping push (see README to set up)")
        return 0
    msg = f"feed: daily digest {datetime.date.today().isoformat()}"
    try:
        subprocess.run(["git", "add", "-A"], cwd=HERE, check=True)
        # Nothing to commit is not an error.
        diff = subprocess.run(["git", "diff", "--cached", "--quiet"], cwd=HERE)
        if diff.returncode == 0:
            log("git: nothing to commit")
            return 0
        subprocess.run(["git", "commit", "-m", msg], cwd=HERE, check=True)
        subprocess.run(["git", "push"], cwd=HERE, check=True)
        log("git: pushed")
        return 0
    except subprocess.CalledProcessError as err:
        log(f"git: publish failed ({err})")
        return 1


SCHEDULED_HOUR = 19  # 7 PM — matches the LaunchAgent's StartCalendarInterval
STAMP_PATH = os.path.join(DATA_DIR, ".last_sync")  # git-ignored; records last run date


def already_ran_today() -> bool:
    try:
        with open(STAMP_PATH) as fh:
            return fh.read().strip() == datetime.date.today().isoformat()
    except FileNotFoundError:
        return False


def stamp_today() -> None:
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(STAMP_PATH, "w") as fh:
        fh.write(datetime.date.today().isoformat())


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate the daily feed digest.")
    parser.add_argument("--push", action="store_true", help="git commit & push generated content")
    parser.add_argument(
        "--catchup", action="store_true",
        help="run only if today's scheduled run was missed (past the scheduled hour and not yet run today)",
    )
    args = parser.parse_args()

    if args.catchup:
        if datetime.datetime.now().hour < SCHEDULED_HOUR:
            log("catchup: before scheduled hour — skipping")
            return 0
        if already_ran_today():
            log("catchup: already ran today — skipping")
            return 0
        log("catchup: today's run was missed — running now")

    cfg = load_config()
    log(f"sync start — model={cfg.get('model', 'haiku')}")
    by_source = gather_by_source()
    items = [it for src in PARSERS for it in by_source.get(src, [])]
    if not items:
        log("no items fetched — aborting")
        return 1

    categorized = categorize(items, cfg)
    by_cat: dict[str, int] = {}
    for it in categorized:
        by_cat[it["category"]] = by_cat.get(it["category"], 0) + 1
    log(f"categorized {len(categorized)} items: " + ", ".join(f"{k}={v}" for k, v in sorted(by_cat.items())))

    categorized = brief_top(categorized, cfg)
    log(f"briefed {sum(1 for it in categorized if it.get('briefed'))} top stories")

    write_outputs(categorized, by_source, cfg)
    write_leaderboard(cfg)
    stamp_today()  # mark today's run complete (for --catchup)

    if args.push:
        return git_publish()
    return 0


if __name__ == "__main__":
    sys.exit(main())
