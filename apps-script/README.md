# Save to Notion — Google Apps Script Web App

This folder holds the backend for the app's **Save to Notion** button. It's a
Google Apps Script Web App that holds your Notion token server-side, so the
secret never lives in the browser. The app only stores the deployed Web App
**URL** (sidebar → **Notion sync**).

- [`Code.gs`](Code.gs) — the Web App: `doPost` reads JSON, inspects your Notion
  database schema, formats each property by its **actual** type (Title /
  Select / Multi-select / Text / URL), and writes the Markdown `content` as
  page blocks.

```
app (browser) → POST JSON (no-cors) → Apps Script Web App (holds token) → Notion API
```

## Why Apps Script (and why a Google Sheet)

Notion's API can't be called directly from the browser (CORS, and the token
would be exposed). Apps Script gives you a free, always-on HTTPS endpoint that
holds the token. The simplest way to get one is to attach the script to a
**Google Sheet** and deploy it — that's the flow used here.

## Setup

1. **Create a Google Sheet** (any blank sheet) → **Extensions → Apps Script**.
   This opens a script project bound to the sheet.
2. **Paste in `Code.gs`** — replace the default `Code.gs` contents with this
   file. (Optional: adjust the column-name constants near the top —
   `COL_WRITER`, `COL_TAGS`, `COL_CATEGORY`, `COL_SOURCE`, `DEFAULT_CATEGORY` —
   to match your database.)
3. **Add Script Properties** — **Project Settings (⚙) → Script properties**:
   | Property | Value | Required |
   |---|---|---|
   | `NOTION_TOKEN` | your Notion internal integration secret (`secret_…` / `ntn_…`) | ✅ |
   | `NOTION_BOOKS_DB` | the target database ID | ✅ |
   | `API_SECRET` | any string; if set, requests must include a matching `secret` | optional |
4. **Connect the integration to the database** — in Notion, open the database →
   **⋯ → Connections → (your integration)**. Without this you'll get
   `object_not_found`.
5. **Deploy as a Web App** — **Deploy → New deployment → type: Web app**:
   - **Execute as:** Me
   - **Who has access:** **Anyone** (must be plain "Anyone", *not* "Anyone with
     a Google account" — otherwise requests hit a Google login page).
   - Click **Deploy**, authorize the scopes, and **copy the `/exec` URL**. This
     is the "access API" — the endpoint the app calls.
6. **Paste the `/exec` URL into the app** — sidebar → **Notion sync**. A **Save
   to Notion** button now appears on each card.

> Re-deploying: after editing `Code.gs`, use **Deploy → Manage deployments →
> (edit) → New version** so the same `/exec` URL serves the new code.

## Request contract

`POST` JSON (the app sends `text/plain`, fire-and-forget / `no-cors`):

```json
{
  "title":    "Paper title",
  "writer":   "Jane Doe",
  "tags":     ["llm", "rag"],
  "category": "Research paper",
  "source":   "DeepMind · https://…",
  "content":  "# Markdown body …",
  "secret":   "only-if-API_SECRET-is-set"
}
```

| Field | Notion target | Notes |
|---|---|---|
| `title` | the Title property | detected by type, not name |
| `writer` | `COL_WRITER` | string or array; adapts to select/multi-select/text |
| `tags` | `COL_TAGS` | array or comma string; adapts to multi-select/text |
| `category` | `COL_CATEGORY` | defaults to `DEFAULT_CATEGORY` |
| `source` | `COL_SOURCE` | text or URL |
| `content` | page body | Markdown → Notion blocks |

Because the response is opaque under `no-cors`, the app confirms the save
optimistically. To debug, watch **Executions** in the Apps Script editor.

## Security

- The Notion token lives only in Script Properties — never in the app or repo.
- Set `API_SECRET` to stop strangers from POSTing to your endpoint (the app
  sends a matching `secret` when configured).
- Rotate the Notion token (Notion → integration settings) if it ever leaks.
