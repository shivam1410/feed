# AI & Science — Live Feed

A zero-dependency, single-page feed reader that polls multiple research sources,
detects new items, and highlights them. No build step.

## Run

```bash
python3 server.py        # defaults to port 4173
# open http://localhost:4173
```

`server.py` serves the static page and proxies each upstream feed server-side at
`/feed?src=<id>`, which avoids browser CORS restrictions. Only sources in the
`FEEDS` allowlist are fetchable (no open proxy / SSRF). If you open `index.html`
directly via `file://`, the client falls back to public CORS proxies, which are
less reliable.

## Architecture (local pipeline → static site)

The LLM scoring uses your **local `claude` CLI**, which only exists on your Mac —
so the daily job runs locally, generates static files, and pushes them; GitHub
Pages just serves them.

```
7 PM (launchd) → sync.py: fetch all sources → categorize + score with claude CLI
              → write data/*.json, stories/*.md, data/feed.db → git push
GitHub Pages   → serves the committed static site (read from anywhere)
Save → Notion  → browser → Google Apps Script Web App (holds Notion token) → Notion
```

Each story is tagged with one of 10 categories (edit the `CATEGORIES` list in
`sync.py`) + a 0–100 significance score. The UI is fully static: it reads the
committed files and filters by the categories you follow, client-side.

Generated, committed artifacts:
- `data/feed.json` — all categorized stories + the canonical category list
- `data/source-<id>.json` — each source's daily snapshot (source tabs work statically)
- `stories/<category>/<slug>.md` — one Markdown file per story (front-matter incl. category)
- `data/metadata.json` + `data/feed.db` — metadata (JSON for the app, SQLite mirror for you)
- `data/leaderboard.json` — top-10 trending Hugging Face models for the Leaderboard tab (see below)

## Leaderboard

The **Leaderboard** tab shows the top 10 trending models on Hugging Face as
home-style cards. For each model `write_leaderboard()` (in `sync.py`) fetches the
HF trending list plus each model's detail (task, library, created date) and a
README excerpt, then asks the `claude` CLI for a grounded one-line "what it does"
summary. Cards show: rank, task badge, summary, downloads, likes, library, and
the model's added date. It's purely informational — no read-state is stored.

This step is best-effort: if Hugging Face or the LLM is unavailable it logs and
continues (the daily run never fails on it), and the tab falls back to the
always-live canonical leaderboard links (LMArena, Artificial Analysis, etc.).

## Publish to GitHub Pages

> **First resolve the account.** Your SSH key authenticates as **`ShivamHL`**, but
> the repo you created is **`shivam1410/feed`**. Pushing only works if `ShivamHL`
> can write to that repo. If they're different accounts, either point the remote
> at a repo `ShivamHL` owns, or push over HTTPS with a token (see Secrets).

```bash
cd /Users/shivamhl/Shivam/Feed
git init -b main
git remote add origin git@github.com:<owner>/feed.git   # SSH (same account)
git fetch origin
git rebase origin/main        # absorb the existing "first commit" README
git add -A
git commit -m "feed: app + daily pipeline"
git push -u origin main
```

Then enable Pages: **repo → Settings → Pages → Source: Deploy from a branch →
`main` / `/ (root)`**. Your site appears at `https://<owner>.github.io/feed/`.
After that, the daily job (`sync.py --push`) keeps it updated — the LaunchAgent
already runs with `--push`.

## Secrets (.env)

Never commit secrets. `.gitignore` excludes `.env`; copy `.env.example` → `.env`.

- **GitHub push:** prefer SSH (no token). Only if you must push over HTTPS to a
  different account, put a PAT in `.env` as `GITHUB_TOKEN` and configure a git
  credential helper — never embed it in the remote URL or commit it.
- **Notion:** the token lives in the Apps Script Web App's Script Properties
  (see [`apps-script/Code.gs`](apps-script/Code.gs)), not in the app. The app
  only stores the Web App **URL** (sidebar → Notion sync).

## Save to Notion

Saving goes through a **Google Apps Script Web App** (it holds the Notion token,
so the key never touches the browser). See [`apps-script/Code.gs`](apps-script/Code.gs):

1. Create an Apps Script project, paste in `Code.gs`, and add Script Properties
   `NOTION_TOKEN` and `NOTION_BOOKS_DB` (optional `API_SECRET` to gate it).
2. Deploy as a **Web App** with access set to **Anyone**, and copy the `/exec` URL.
3. Paste that URL into the app (sidebar → **Notion sync**).

Once a URL is set, a **Save to Notion** button appears on each card; tapping it
posts the story (title, summary, source, category) to your Notion database. The
request is fire-and-forget (`no-cors`), so the button confirms optimistically.

## Layout

A left **sidebar** holds the nav (**Home** + each source), your **profile**, and
**Refresh now**. The content area shows only stories. On iPad/phone the sidebar
collapses to a hamburger drawer. There is no auto-refresh/interval/model UI —
refresh is manual (plus on focus).

## Sources (sidebar)

| Source | Kind | Notes |
|--------|------|-------|
| Home | scored digest | top stories across all sources, scored to your profile |
| Nature | RSS 1.0 / RDF | `nature.rss` |
| DeepMind | RSS 2.0 | `deepmind.google/blog/rss.xml`, with thumbnails |
| HF Trending Papers | JSON API | `/api/daily_papers`, upvotes + thumbnails |
| Papers with Code | link | discontinued — redirects to HF Papers, no independent feed |
| Semantic Scholar | JSON API | recent AI papers; public API is rate-limited |
| Connected Papers | link | per-paper citation graph; no global feed |

## Home & categories (LLM)

Home shows every story tagged with a **category** and a **0–100 significance
score**, done in the daily job by your **Claude Code login** (no API key). In the
sidebar's **Following** section, click category chips to filter Home: the first
click focuses one category, more clicks add others, and **All** resets. Your
selection is saved per-device in `localStorage`.

How it works: `sync.py` sends every fetched story to the `claude` CLI headless
(`claude -p … --strict-mcp-config`) in chunks, getting back
`{i, category, score}` per item, and writes `data/feed.json`. The browser just
reads that file and filters client-side — so categories work on a static host
with no backend. Edit the 10 categories in the `CATEGORIES` list in `sync.py`.

1. (Optional) Open **AI settings** and pick a model tier — Haiku (fast, default),
   Sonnet, or Opus.
2. Type your **interests** (e.g. `LLM agents, genomics, climate`).
3. Tick **✨ Smart picks** (or hit **Summarize**) on any tab to collapse the
   list to the top-N most relevant, each with a digest and a short "why".
   **Show all** restores the full list.
4. The **✨ For You** tab pools the newest items across all feed sources and
   returns one unified ranked shortlist.

Notes:
- **No API key.** Curation requires the `claude` CLI to be installed and logged
  in, and the page to be served by `server.py` (the `/curate` endpoint).
- Results are cached per (source + interests + top-N + model + item set), so
  background polling does not re-curate; only new items or changed settings
  trigger a fresh CLI call.
- If curation fails (no server, CLI missing, timeout), the tab falls back to
  showing all items with a notice.
- The Claude Code subscription is primarily intended for interactive coding;
  this reuses it for personal curation via the documented headless `-p` mode.

## Daily sync job (7 PM)

`sync.py` fetches all feed sources, curates them with the Claude CLI, and writes
a digest snapshot to `data/latest.json` (+ a dated copy). The **✨ For You** tab
loads that snapshot instantly — no waiting on the CLI — and shows a
"Daily digest · <time> · Re-curate live" banner. Click **Re-curate live** to run
a fresh curation on demand.

Configure what the job curates in `sync.config.json` (`interests`, `topN`,
`model`, `perSource`).

Run it manually:

```bash
python3 sync.py        # writes data/latest.json
```

### Schedule it at 7 PM daily (macOS LaunchAgent)

```bash
cp com.shivam.feedsync.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.shivam.feedsync.plist
# force a test run now:
launchctl kickstart -k gui/$(id -u)/com.shivam.feedsync
# logs:
cat data/sync.log
```

To remove it:

```bash
launchctl bootout gui/$(id -u)/com.shivam.feedsync
rm ~/Library/LaunchAgents/com.shivam.feedsync.plist
```

The plist uses `/usr/bin/python3` (macOS system Python 3.9) — the code is kept
3.9-compatible. It runs in your user session, so the `claude` CLI picks up your
login. The Mac must be awake/logged in at 7 PM for the job to fire.

## Cards & "Read more"

Curated cards show an **Inshorts-style briefing** — a ~60–160 word plain-language
summary (key finding → specifics/numbers → why it matters), written by the model
from the source abstract and grounded in it (it is told not to invent figures).
Depth tracks the source: HF and Semantic Scholar provide full abstracts; Nature
and DeepMind feeds are short, so those briefings are shorter.

**Source abstract ▾** reveals the original feed text verbatim; **Open ↗** (and
the title) open the full article. Uncurated cards show the raw feed summary
(clamped) with a **Read more** to unclamp.

Curation generates ~1–2 minutes for a full batch (it writes many briefings in one
pass); `--strict-mcp-config` is passed to skip loading MCP servers. The For You
tab avoids this wait by serving the daily snapshot.

## Note on the preview panel

The Claude Code preview panel only allows `localhost` URLs, so it blocks
external thumbnails and won't navigate to article links. Thumbnails are routed
through a local `/img` proxy (host-allowlisted) so they load anyway; article
links open normally in a real browser (open http://localhost:4173 directly).

## How "live" works

- Refreshed manually via **Refresh now**, and automatically when the tab
  regains focus. (The daily 7 PM job keeps Home's scored snapshot current.)
- New items are detected per-source by comparing each item's guid against a
  `localStorage`-persisted "seen" set; new ones get a **New** badge.
- **Mark all read** (in the header) baselines the set so only later arrivals
  are flagged.

## Add a new source

1. Add an entry to `FEEDS` in `feed.js` (`id`, `name`, `kind`).
   - `kind: "rss"` works for any RSS/Atom feed out of the box.
   - For a JSON API, add a normalizer to `PARSERS` returning
     `{ guid, title, link, authors, date, summary, image, extra }`.
   - `kind: "link"` renders a static bookmark card (set `link` + `note`).
2. Add the upstream URL to the `FEEDS` allowlist in `server.py` (and to
   `upstreamUrl()` in `feed.js` for the proxy fallback).
