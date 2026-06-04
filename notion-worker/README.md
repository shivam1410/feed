# Notion "Save" worker

A tiny Cloudflare Worker that holds your Notion secret and creates a Notion page
when you Save a story. The static site only knows this worker's **URL** — never
your Notion key.

## 1. Prepare Notion

1. Create an internal integration at https://www.notion.so/my-integrations and
   copy its token (`secret_…`).
2. Create (or pick) a database with these properties:
   - **Name** — title
   - **URL** — url
   - **Source** — text
   - **Score** — number
   - **Published** — date
   - **Why** — text
3. Open the database → **⋯ → Connections → add your integration** so it has access.
4. Copy the database id (the 32-char id in the database URL).

## 2. Deploy the worker

```bash
cd notion-worker
npm install -g wrangler        # if needed
wrangler login
wrangler secret put NOTION_TOKEN          # paste the secret_… token
wrangler secret put NOTION_DATABASE_ID    # paste the database id
wrangler deploy
```

`wrangler deploy` prints a URL like `https://feed-notion.<you>.workers.dev`.

## 3. Connect the app

In the app sidebar → **Notion sync URL**, paste that worker URL and click
**Save & re-score**. Now tapping **☆ Save** on a story adds it to your Notion
database (and stars it locally). Leave the field blank to only star locally.

## Lock it down (optional)

Set `ALLOWED_ORIGIN` in `wrangler.toml` to your Pages origin so only your site
can call the worker.
