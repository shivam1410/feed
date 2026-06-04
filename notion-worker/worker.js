/* Cloudflare Worker: "Save to Notion" backend for the feed app.
 *
 * The browser POSTs a saved article here; this worker adds a page to your
 * Notion database. Your Notion secret lives ONLY in this worker's env vars —
 * never in the static site. Deploy with `wrangler deploy` (see README.md).
 *
 * Required secrets/vars (wrangler secret put / dashboard):
 *   NOTION_TOKEN        – internal integration token (secret_...)
 *   NOTION_DATABASE_ID  – the target database id
 * Optional:
 *   ALLOWED_ORIGIN      – your Pages origin, e.g. https://shivam1410.github.io
 *                         (defaults to "*"). Set it to lock the worker down.
 *
 * Your Notion database should have these properties:
 *   Name (title), URL (url), Source (rich text), Score (number),
 *   Published (date), Why (rich text)
 * The briefing text is written into the page body.
 */

const NOTION_VERSION = "2022-06-28";

function cors(env) {
  return {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
  };
}

function json(body, status, env) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", ...cors(env) },
  });
}

function richText(s) {
  return [{ text: { content: String(s || "").slice(0, 2000) } }];
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: cors(env) });
    if (request.method !== "POST") return json({ error: "POST only" }, 405, env);
    if (!env.NOTION_TOKEN || !env.NOTION_DATABASE_ID) {
      return json({ error: "Worker missing NOTION_TOKEN / NOTION_DATABASE_ID" }, 500, env);
    }

    let item;
    try {
      item = await request.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400, env);
    }
    if (!item.title) return json({ error: "Missing title" }, 400, env);

    const properties = {
      Name: { title: richText(item.title) },
    };
    if (item.url) properties.URL = { url: item.url };
    if (item.source) properties.Source = { rich_text: richText(item.source) };
    if (typeof item.score === "number") properties.Score = { number: item.score };
    if (item.why) properties.Why = { rich_text: richText(item.why) };
    if (item.date) {
      const d = new Date(item.date);
      if (!isNaN(d)) properties.Published = { date: { start: d.toISOString().slice(0, 10) } };
    }

    const children = item.summary
      ? [{
          object: "block", type: "paragraph",
          paragraph: { rich_text: richText(item.summary) },
        }]
      : [];

    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.NOTION_TOKEN}`,
        "Notion-Version": NOTION_VERSION,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: env.NOTION_DATABASE_ID },
        properties,
        children,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      return json({ error: "Notion API error", status: res.status, detail }, 502, env);
    }
    const page = await res.json();
    return json({ ok: true, id: page.id, url: page.url }, 200, env);
  },
};
