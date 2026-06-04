/* AI & Science — category feed reader.
 *
 * The daily job (sync.py) categorizes every story into one of a fixed set of
 * categories and writes data/feed.json (+ per-source snapshots). This UI is
 * fully static: it reads those committed files and filters client-side by the
 * categories you follow — no backend needed (works on GitHub Pages). "Save"
 * stars locally and, if a Notion worker URL is set, also adds it to Notion.
 */

const FEEDS = [
  { id: "home", name: "Home", kind: "home" },
  { id: "saved", name: "★ Saved", kind: "saved" },
  { id: "leaderboard", name: "🏆 Leaderboard", kind: "leaderboard" },
  // Full-content sources first (full abstracts / posts).
  { id: "arxiv", name: "arXiv (cs.LG)", kind: "rss" },
  { id: "huggingface", name: "HF Trending Papers", kind: "hf" },
  { id: "simonw", name: "Simon Willison", kind: "rss" },
  { id: "latentspace", name: "Latent Space", kind: "rss" },
  // Short-teaser sources next.
  { id: "nature", name: "Nature", kind: "rss" },
  { id: "deepmind", name: "DeepMind", kind: "rss" },
  // Link-only sources last (no article feed).
  {
    id: "paperswithcode", name: "Papers with Code", kind: "link",
    link: "https://paperswithcode.com/",
    note: "Papers With Code was discontinued — the domain now redirects to Hugging Face Papers, so it has no independent feed. Use HF Trending Papers for the same content.",
  },
  {
    id: "connectedpapers", name: "Connected Papers", kind: "link",
    link: "https://www.connectedpapers.com/",
    note: "Connected Papers builds a citation graph around a single seed paper — there's no global article feed. Open it and search for a paper to explore its connections.",
  },
];

// Fallback if feed.json hasn't loaded yet; the real list comes from the data.
const DEFAULT_CATEGORIES = [
  "AI Research", "Nature & Ecology", "Health & Medicine", "Genetics & Biology",
  "Neuroscience & Mind", "Physics & Space", "Climate & Energy",
  "Robotics & Engineering", "Science & Society", "Chemistry & Materials",
];
const HOME_LIMIT = 20; // Home shows only the top-N most relevant (by score)

const SEEN_KEY = (id) => `feed_seen_${id}_v1`;
const POS_KEY = (id) => `feed_pos_${id}_v1`;
const NOTION_URL_KEY = "feed_notion_url_v1";
const SAVED_KEY = "feed_saved_v1";
const CATS_KEY = "feed_cats_v1";

const el = {
  app: document.querySelector(".app"),
  feed: document.getElementById("feed"),
  nav: document.getElementById("nav"),
  sectionTitle: document.getElementById("sectionTitle"),
  meta: document.getElementById("meta"),
  menuBtn: document.getElementById("menuBtn"),
  navToggle: document.getElementById("navToggle"),
  scrim: document.getElementById("scrim"),
  categoryChips: document.getElementById("categoryChips"),
  catAll: document.getElementById("catAll"),
  pNotionUrl: document.getElementById("pNotionUrl"),
  saveNotionUrl: document.getElementById("saveNotionUrl"),
  notionUrlMsg: document.getElementById("notionUrlMsg"),
  deckDots: document.getElementById("deckDots"),
  fsUp: document.getElementById("fsUp"),
  fsDown: document.getElementById("fsDown"),
};

/* ---------- reading font size ---------- */
const FS_KEY = "feed_fontscale_v1";
function applyFontScale(scale) {
  document.documentElement.style.setProperty("--fs", String(scale));
  try { localStorage.setItem(FS_KEY, String(scale)); } catch { /* ignore */ }
}
function nudgeFontScale(delta) {
  let s = parseFloat(localStorage.getItem(FS_KEY) || "1") + delta;
  s = Math.max(0.8, Math.min(1.8, Math.round(s * 10) / 10));
  applyFontScale(s);
}

// Mobile Home shows cards as a horizontal swipe deck (one per screen + dots).
// Reading deck applies to narrow screens OR any touch device (iPad/phone),
// regardless of width — so a wide iPad still gets the swipe deck, not the list.
const deckMQL = window.matchMedia("(max-width: 1024px), (pointer: coarse)");

const HOME_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"/></svg>';
const CHART_SVG = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="11" width="3" height="6" rx="0.5"/><rect x="12" y="7" width="3" height="10" rx="0.5"/><rect x="17" y="4" width="3" height="13" rx="0.5"/></svg>';
const DECK_GAP = 10;

let isFetching = false;
let activeId = localStorage.getItem("feed_active") || "home";
const firstLoad = {};
let seen = new Set();
let lastItems = [];
let renderedById = {};
let deckIndex = 0;
let allCategories = DEFAULT_CATEGORIES.slice();
let selectedCats = loadSelectedCats(); // Set; empty = show all

/* ---------- category selection ---------- */

function loadSelectedCats() {
  try {
    const arr = JSON.parse(localStorage.getItem(CATS_KEY) || "null");
    if (Array.isArray(arr)) return new Set(arr);
  } catch { /* ignore */ }
  return new Set(); // empty = all
}
function saveSelectedCats() {
  try { localStorage.setItem(CATS_KEY, JSON.stringify([...selectedCats])); } catch { /* ignore */ }
}
function isCatShown(cat) {
  return selectedCats.size === 0 || selectedCats.has(cat);
}

/* ---------- saved items + Notion ---------- */

function loadSaved() {
  try { return JSON.parse(localStorage.getItem(SAVED_KEY) || "[]"); } catch { return []; }
}
function notionUrl() {
  return (el.pNotionUrl.value || localStorage.getItem(NOTION_URL_KEY) || "").trim();
}

// Save-to-Notion is a one-shot action, not a persistent bookmark: the "Saved"
// state is per-session feedback only (the button resets to "Save to Notion" on
// reload). We still keep a local record (de-duped by guid) for the Saved tab.
async function saveToNotion(item, btn) {
  const saved = loadSaved().filter((s) => s.guid !== item.guid);
  saved.unshift({
    guid: item.guid, title: item.title, url: item.link, source: item.source || "",
    category: item.category || "", date: item.date, score: item.score ?? null,
    summary: item.summary || "", savedAt: new Date().toISOString(),
  });
  try { localStorage.setItem(SAVED_KEY, JSON.stringify(saved.slice(0, 1000))); } catch { /* ignore */ }

  const url = notionUrl();
  if (!url) { btn.innerHTML = saveLabel("saved"); btn.classList.add("saved"); return; }

  btn.innerHTML = saveLabel("saving");
  const payload = {
    title: item.title,
    tags: [item.category].filter(Boolean),
    source: [item.source, item.link].filter(Boolean).join(" · "),
    content: item.summary || "",
  };
  if (item.authors && item.authors.length) payload.writer = item.authors;
  try {
    // Apps Script can't return CORS headers → fire-and-forget (text/plain, no
    // preflight); response is opaque, so we mark saved optimistically.
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    btn.innerHTML = saveLabel("saved");
    btn.classList.add("saved");
  } catch {
    btn.innerHTML = saveLabel("fail");
  }
}

/* ---------- seen ---------- */

function loadSeen(id) {
  try { return new Set(JSON.parse(localStorage.getItem(SEEN_KEY(id)) || "[]")); } catch { return new Set(); }
}
function saveSeen(id) {
  try { localStorage.setItem(SEEN_KEY(id), JSON.stringify([...seen].slice(-500))); } catch { /* ignore */ }
}

/* ---------- reading position (resume the last story on reload) ---------- */
function savePos(guid) {
  if (!guid) return;
  try { localStorage.setItem(POS_KEY(activeId), guid); } catch { /* ignore */ }
}
function loadPos(id) {
  try { return localStorage.getItem(POS_KEY(id)) || ""; } catch { return ""; }
}
function headerOffset() {
  return (document.querySelector(".content-head")?.offsetHeight || 64) + 8;
}

/* ---------- RSS / JSON parsing (for source tabs) ---------- */

function byLocal(parent, name) {
  return [...parent.getElementsByTagName("*")].filter((n) => n.localName === name);
}
function firstLocalText(parent, name) {
  const nodes = byLocal(parent, name);
  return nodes.length ? (nodes[0].textContent || "").trim() : "";
}
function allLocalText(parent, name) {
  return byLocal(parent, name).map((n) => (n.textContent || "").trim()).filter(Boolean);
}
function extractImage(item) {
  const thumb = byLocal(item, "thumbnail")[0];
  if (thumb?.getAttribute("url")) return thumb.getAttribute("url");
  const content = byLocal(item, "content").find(
    (n) => n.getAttribute && /image/i.test(n.getAttribute("medium") || n.getAttribute("type") || ""));
  if (content?.getAttribute("url")) return content.getAttribute("url");
  const enc = byLocal(item, "enclosure")[0];
  if (enc && /image/i.test(enc.getAttribute("type") || "")) return enc.getAttribute("url");
  return "";
}
function extractSummary(item) {
  const raw = firstLocalText(item, "encoded") || firstLocalText(item, "description");
  if (!raw) return "";
  const doc = new DOMParser().parseFromString(raw, "text/html");
  const firstP = doc.querySelector("p");
  if (firstP && /Published online|doi:/i.test(firstP.textContent)) firstP.remove();
  return (doc.body.textContent || "").trim();
}
function parseRSS(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "application/xml");
  if (doc.getElementsByTagName("parsererror").length) throw new Error("Feed XML could not be parsed");
  let items = byLocal(doc, "item");
  if (!items.length) items = byLocal(doc, "entry");
  if (!items.length) throw new Error("No items found in feed");
  return items.map((item) => {
    let link = firstLocalText(item, "link");
    if (!link) {
      const linkEl = byLocal(item, "link")[0];
      link = linkEl?.getAttribute?.("href") || item.getAttribute("rdf:about") || "";
    }
    return {
      guid: firstLocalText(item, "doi") || firstLocalText(item, "guid") || link,
      title: firstLocalText(item, "title") || "(untitled)", link,
      authors: allLocalText(item, "creator"),
      date: firstLocalText(item, "date") || firstLocalText(item, "pubDate"),
      summary: extractSummary(item), image: extractImage(item),
    };
  });
}
function parseHF(jsonText) {
  return JSON.parse(jsonText).map((r) => {
    const p = r.paper || {};
    return {
      guid: p.id, title: p.title || r.title || "(untitled)",
      link: `https://huggingface.co/papers/${p.id}`,
      authors: (p.authors || []).map((a) => a.name).filter(Boolean),
      date: r.publishedAt || p.publishedAt,
      summary: p.ai_summary || p.summary || r.summary || "",
      image: r.thumbnail || "", extra: typeof p.upvotes === "number" ? `▲ ${p.upvotes}` : "",
    };
  });
}
const PARSERS = { rss: parseRSS, hf: parseHF };

/* ---------- fetching ---------- */

async function fetchWithTimeout(url, ms = 20000, opts = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try { return await fetch(url, { cache: "no-store", signal: ctrl.signal, ...opts }); }
  finally { clearTimeout(t); }
}
function upstreamUrl(feed) {
  switch (feed.id) {
    case "nature": return "https://www.nature.com/nature.rss";
    case "deepmind": return "https://deepmind.google/blog/rss.xml";
    case "huggingface": return "https://huggingface.co/api/daily_papers";
    case "arxiv": return "https://rss.arxiv.org/rss/cs.LG";
    case "latentspace": return "https://www.latent.space/feed";
    case "simonw": return "https://simonwillison.net/atom/everything/";
    default: return feed.link || "";
  }
}
async function fetchLiveFeed(feed) {
  const parse = PARSERS[feed.kind];
  const urls = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(upstreamUrl(feed))}`,
    `https://thingproxy.freeboard.io/fetch/${upstreamUrl(feed)}`,
  ];
  let lastErr;
  for (const url of urls) {
    try {
      const res = await fetchWithTimeout(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return parse(await res.text());
    } catch (err) { lastErr = err; }
  }
  throw lastErr || new Error("feed unavailable");
}
async function loadFeedData() {
  for (const path of ["data/feed.json", "data/latest.json", "data/index.json"]) {
    try {
      const res = await fetchWithTimeout(path, 5000);
      if (!res.ok) continue;
      const data = await res.json();
      if (data && Array.isArray(data.items) && data.items.length) return data;
    } catch { /* next */ }
  }
  return null;
}
async function loadSourceItems(feed) {
  try {
    const res = await fetchWithTimeout(`data/source-${feed.id}.json`, 5000);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.items) && data.items.length) {
        return data.items.map((it) => ({ ...it, source: it.source || feed.name }));
      }
    }
  } catch { /* fall through */ }
  return fetchLiveFeed(feed);
}

/* ---------- rendering ---------- */

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
function fmtAuthors(authors) {
  if (!authors || !authors.length) return "";
  if (authors.length <= 3) return authors.join(", ");
  return `${authors.slice(0, 3).join(", ")} +${authors.length - 3} more`;
}
const safe = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const lightMarkup = (s) => safe(s).replace(/&lt;(\/?)(i|sub|sup|em)&gt;/g, "<$1$2>");

// Notion logo (inline SVG, takes the button's text color via currentColor).
const NOTION_ICON =
  '<svg class="ic" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.561.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.401-1.632z"/></svg>';

function saveLabel(state) {
  const txt = { save: "Save to Notion", saving: "Saving…", saved: "Saved", fail: "Save failed" }[state] || "Save to Notion";
  return NOTION_ICON + " " + txt;
}

function cardHTML(item, isNew) {
  const byline = [item.source, item.extra, fmtAuthors(item.authors)].filter(Boolean).join(" · ");
  const date = fmtDate(item.date);
  const briefed = !!item.briefed || !!item.why;
  const body = item.summary || "";
  // Briefed cards show the full briefing + reveal the source abstract; others
  // clamp the raw summary and expand it.
  const orig = briefed ? (item.origSummary || "") : body;
  const showOrig = briefed && orig && orig !== body;
  const hasMore = briefed ? showOrig : body.length > 220;
  const canSave = !!notionUrl(); // show Save only when a Notion endpoint is configured
  const imgTag = item.image
    ? `<img class="thumb" src="/img?url=${encodeURIComponent(item.image)}" data-orig="${safe(item.image)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="if(!this.dataset.fbk){this.dataset.fbk=1;this.src=this.dataset.orig}else{this.remove()}">`
    : "";
  return `
    <article class="card${isNew ? " is-new" : ""}" data-guid="${safe(item.guid)}">
      ${imgTag}
      <div class="card-body">
        <div class="card-head">
          <h3>${lightMarkup(item.title)}</h3>
          <div class="head-actions">
            ${isNew ? '<span class="badge">New</span>' : ""}
            <a class="open-link" href="${safe(item.link)}" target="_blank" rel="noopener">Open ↗</a>
          </div>
        </div>
        <div class="tags">
          ${item.category ? `<span class="cat-tag">${safe(item.category)}</span>` : ""}
        </div>
        ${item.why ? `<p class="why">↳ ${safe(item.why)}</p>` : ""}
        ${body ? `<p class="summary${briefed ? " rich" : ""}">${lightMarkup(body)}</p>` : ""}
        ${hasMore ? `<button type="button" class="readmore" data-more="${briefed ? "Source abstract ▾" : "Read more ▾"}" data-less="${briefed ? "Hide abstract ▴" : "Show less ▴"}">${briefed ? "Source abstract ▾" : "Read more ▾"}</button>` : ""}
        ${showOrig ? `<div class="full"><span class="full-label">From the source:</span> ${lightMarkup(orig)}</div>` : ""}
        ${byline ? `<div class="byline">${safe(byline)}</div>` : ""}
        <div class="card-foot">
          <span class="date">${safe(date)}</span>
          ${canSave ? `<button type="button" class="save-btn">${saveLabel("save")}</button>` : ""}
        </div>
      </div>
    </article>`;
}

function markSeenGuid(guid) {
  if (guid && !seen.has(guid)) { seen.add(guid); saveSeen(activeId); }
}

// Resume where you left off: scroll back to the last story you were on
// (saved per feed). Works for both the swipe deck and the desktop list.
function restorePosition(items) {
  const cards = el.feed.querySelectorAll(".card");
  if (!cards.length) return;
  const savedGuid = loadPos(activeId);
  let idx = savedGuid ? items.findIndex((it) => it.guid === savedGuid) : -1;

  if (el.feed.classList.contains("deck")) {
    // Fall back to the first unseen card if there's no saved position.
    if (idx < 0) idx = items.findIndex((it) => it.guid && !seen.has(it.guid));
    if (idx < 0) idx = 0;
    deckIndex = idx;
    updateDeckIndicator(idx);
    if (idx > 0) scrollDeckTo(idx);
    return;
  }

  // List view: scroll the window to the saved card. No saved card → stay at top.
  if (idx <= 0) return;
  const targetGuid = items[idx].guid;
  const seek = () => {
    if (el.feed.classList.contains("deck")) return;
    const card = [...el.feed.querySelectorAll(".card")]
      .find((c) => c.getAttribute("data-guid") === targetGuid);
    if (!card) return;
    const top = card.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo(0, Math.max(0, top));
  };
  requestAnimationFrame(() => requestAnimationFrame(seek));
}

// Restore deck scroll position reliably. iOS Safari resets a programmatic
// scrollLeft on a scroll-snap container if it's set before layout/snap settle,
// so wait for the next frame and turn snapping off while we seek.
function scrollDeckTo(idx) {
  const seek = () => {
    if (!el.feed.classList.contains("deck")) return;
    const cards = el.feed.querySelectorAll(".card");
    const target = cards[idx];
    if (!target || !cards[0]) return;
    // Exact pixel offset of the card — robust against gap/padding rounding,
    // unlike index × step which can drift and let snap land back on card 0.
    const left = target.offsetLeft - cards[0].offsetLeft;
    const prevSnap = el.feed.style.scrollSnapType;
    el.feed.style.scrollSnapType = "none";
    el.feed.scrollLeft = left;
    void el.feed.offsetWidth; // force reflow so the seek sticks
    el.feed.style.scrollSnapType = prevSnap;
  };
  // Retry across a few frames/delays: mobile browsers settle layout late
  // (address-bar collapse, font swap) and would otherwise drop the seek.
  requestAnimationFrame(() => requestAnimationFrame(seek));
  setTimeout(seek, 120);
  setTimeout(seek, 400);
}

function renderItems(items) {
  renderedById = Object.fromEntries(items.filter((it) => it.guid).map((it) => [it.guid, it]));
  el.feed.innerHTML = items.map((it) => cardHTML(it, it.guid && !seen.has(it.guid))).join("");
  el.meta.textContent = "";
  firstLoad[activeId] = false;
  setupDeck();
  if (!el.feed.classList.contains("deck")) {
    // List view: treat everything shown as seen (baseline for NEW).
    let changed = false;
    items.forEach((it) => { if (it.guid && !seen.has(it.guid)) { seen.add(it.guid); changed = true; } });
    if (changed) saveSeen(activeId);
  }
  // Deck marks seen as you swipe past cards (handled in the scroll listener).
  restorePosition(items);
}

// A feed is "headline-only" when almost none of its items carry a summary
// (e.g. a source whose article text is unavailable). Such feeds are tedious as
// a one-card-per-screen carousel, so we show a scannable title-link list instead.
function isHeadlineOnly(items) {
  if (!items || !items.length) return false;
  const withSummary = items.filter((it) => (it.summary || "").trim()).length;
  return withSummary / items.length < 0.3;
}

function renderTitleList(items) {
  renderedById = {};
  el.feed.classList.remove("deck"); // not a carousel — a plain scannable list
  el.deckDots.style.display = "none";
  el.deckDots.innerHTML = "";
  el.feed.innerHTML = `<div class="title-list">` + items.map((it) => {
    const isNew = it.guid && !seen.has(it.guid);
    return `<a class="title-row${isNew ? " is-new" : ""}" href="${safe(it.link)}" target="_blank" rel="noopener">
      <span class="title-row-title">${lightMarkup(it.title)}</span>
      <span class="title-row-meta">${it.date ? safe(fmtDate(it.date)) : ""}</span>
    </a>`;
  }).join("") + `</div>`;
  el.meta.textContent = `${items.length} headlines`;
  firstLoad[activeId] = false;
  let changed = false; // everything shown counts as seen
  items.forEach((it) => { if (it.guid && !seen.has(it.guid)) { seen.add(it.guid); changed = true; } });
  if (changed) saveSeen(activeId);
}

/* ---------- mobile swipe deck (Home) ---------- */

function deckStep() {
  const card = el.feed.querySelector(".card");
  return card ? card.offsetWidth + DECK_GAP : el.feed.clientWidth;
}
const DECK_DOTS_MAX = 20; // beyond this, show an "n / N" counter instead of dots
function updateDeckIndicator(i) {
  if (el.deckDots.dataset.mode === "counter") {
    const total = el.feed.querySelectorAll(".card").length;
    const c = el.deckDots.querySelector(".deck-counter");
    if (c) c.textContent = `${i + 1} / ${total}`;
  } else {
    el.deckDots.querySelectorAll(".dot").forEach((d, n) => d.classList.toggle("active", n === i));
  }
}
// preserve=true keeps the current card (e.g. on resize / address-bar collapse)
// instead of snapping back to the first one.
function setupDeck(preserve = false) {
  // Reading mode (swipe deck) for every story list on mobile — not link cards.
  const isDeck = !["link", "leaderboard"].includes(activeFeed().kind) && deckMQL.matches;
  el.feed.classList.toggle("deck", isDeck);
  if (!preserve) deckIndex = 0;
  const cards = isDeck ? el.feed.querySelectorAll(".card") : [];
  if (!isDeck || cards.length < 2) {
    deckIndex = 0;
    el.deckDots.innerHTML = "";
    el.deckDots.style.display = "none";
    return;
  }
  deckIndex = Math.max(0, Math.min(deckIndex, cards.length - 1));
  el.deckDots.style.display = "flex";
  if (cards.length > DECK_DOTS_MAX) {
    el.deckDots.dataset.mode = "counter";
    el.deckDots.innerHTML = `<span class="deck-counter">${deckIndex + 1} / ${cards.length}</span>`;
  } else {
    el.deckDots.dataset.mode = "dots";
    el.deckDots.innerHTML = Array.from(cards)
      .map((_, i) => `<button type="button" class="dot${i === deckIndex ? " active" : ""}" data-i="${i}" aria-label="Card ${i + 1}"></button>`)
      .join("");
  }
  if (deckIndex > 0) scrollDeckTo(deckIndex); else el.feed.scrollLeft = 0;
}

const LEADERBOARD_LINKS = [
  { name: "LMArena (Chatbot Arena)", url: "https://lmarena.ai/leaderboard", note: "Human-vote Elo rankings across chat models." },
  { name: "Artificial Analysis", url: "https://artificialanalysis.ai/", note: "Quality vs cost vs speed — the practical engineering view." },
  { name: "HF Open LLM Leaderboard", url: "https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard", note: "Open models on standard academic benchmarks." },
  { name: "Aider LLM Leaderboard", url: "https://aider.chat/docs/leaderboards/", note: "Real-world code-editing ability." },
  { name: "SWE-bench", url: "https://www.swebench.com/", note: "Resolving real GitHub issues — agentic coding." },
];

function fmtNum(n) {
  if (typeof n !== "number") return "—";
  if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + "k";
  return String(n);
}

async function renderLeaderboard() {
  el.sectionTitle.textContent = "Leaderboard";
  el.meta.textContent = "";
  let data = null;
  try {
    const res = await fetchWithTimeout("data/leaderboard.json", 5000);
    if (res.ok) data = await res.json();
  } catch { /* show links only */ }

  let html = "";
  if (data && Array.isArray(data.models) && data.models.length) {
    const wd = data.generatedAt ? new Date(data.generatedAt) : null;
    const when = wd && !isNaN(wd)
      ? wd.toLocaleString("en-US", { year: "numeric", month: "short", day: "2-digit", hour: "numeric", minute: "2-digit" })
      : "";
    html += `<div class="curate-banner">🏆 Top trending models on Hugging Face${when ? " · " + safe(when) : ""}</div>`;
    html += data.models.map((m, i) => {
      const stats = [
        m.downloads != null ? `⬇ ${fmtNum(m.downloads)} downloads` : "",
        m.likes != null ? `❤ ${fmtNum(m.likes)} likes` : "",
        m.library ? safe(m.library) : "",
        m.createdAt ? safe(fmtDate(m.createdAt)) : "",
      ].filter(Boolean);
      return `
      <article class="card model-card">
        <div class="card-body">
          <div class="card-head">
            <h3><span class="lb-rank">#${i + 1}</span> ${safe(m.id)}</h3>
            <a class="open-link" href="${safe(m.url)}" target="_blank" rel="noopener">Open ↗</a>
          </div>
          ${m.task ? `<div class="tags"><span class="cat-tag">${safe(m.task)}</span></div>` : ""}
          ${m.summary ? `<p class="summary">${safe(m.summary)}</p>` : ""}
          <div class="card-foot model-stats">${stats.map((s) => `<span>${s}</span>`).join("")}</div>
        </div>
      </article>`;
    }).join("");
  } else {
    html += `<div class="curate-banner warn">Live model data isn't generated yet (runs with the daily job). The leaderboards below are always live.</div>`;
  }
  html += `<h3 class="lb-heading">Compare on the canonical leaderboards</h3>`;
  html += LEADERBOARD_LINKS.map((l) => `
    <article class="card link-card">
      <div class="card-body">
        <div class="card-head"><h3>${safe(l.name)}</h3></div>
        <p class="summary">${safe(l.note)}</p>
        <div class="card-foot"><a class="source-link" href="${safe(l.url)}" target="_blank" rel="noopener">Open ↗</a></div>
      </div>
    </article>`).join("");
  el.feed.innerHTML = html;
  setupDeck(); // leaderboard is not a deck — this clears any deck state
}

function renderLinkCard(feed) {
  el.meta.textContent = "";
  el.feed.innerHTML = `
    <article class="card link-card">
      <div class="card-body">
        <div class="card-head"><h3>${safe(feed.name)}</h3></div>
        <p class="summary">${safe(feed.note || "")}</p>
        <div class="card-foot"><a class="source-link" href="${safe(feed.link)}" target="_blank" rel="noopener">Open ${safe(feed.name)} ↗</a></div>
      </div>
    </article>`;
  setupDeck(); // clears deck mode for link cards
}

/* ---------- load ---------- */

async function load() {
  const feed = activeFeed();
  el.sectionTitle.textContent = feed.name;

  if (feed.kind === "link") return renderLinkCard(feed);
  if (feed.kind === "leaderboard") return renderLeaderboard();

  if (feed.kind === "saved") {
    const items = loadSaved();
    if (!items.length) {
      el.feed.innerHTML = '<div class="empty">No saved stories yet. Tap <b>☆ Save</b> on any card.</div>';
      el.meta.textContent = "";
    } else {
      renderItems(items);
    }
    return;
  }

  if (isFetching) return;
  isFetching = true;
  if (firstLoad[activeId] === undefined) {
    firstLoad[activeId] = true;
    el.feed.innerHTML = Array.from({ length: 5 }).map(() => '<div class="skeleton"></div>').join("");
  }

  try {
    if (feed.kind === "home") {
      const data = await loadFeedData();
      if (!data) throw new Error("No daily feed yet — run python3 sync.py");
      if (Array.isArray(data.categories) && data.categories.length) {
        allCategories = data.categories;
        renderCategoryChips();
      }
      lastItems = data.items;
      renderItems(homeShown());
    } else {
      lastItems = await loadSourceItems(feed);
      if (isHeadlineOnly(lastItems)) renderTitleList(lastItems);
      else renderItems(lastItems);
    }
  } catch (err) {
    if (!el.feed.querySelector(".card")) {
      el.feed.innerHTML = `<div class="error-box">Could not load ${safe(feed.name)}.<br><small>${safe(err.message || err)}</small></div>`;
    }
    el.meta.textContent = "Load failed";
  } finally {
    isFetching = false;
  }
}

/* ---------- interactions ---------- */

const activeFeed = () => FEEDS.find((f) => f.id === activeId) || FEEDS[0];

function switchSource(id) {
  if (id === activeId) { closeNav(); return; }
  activeId = id;
  localStorage.setItem("feed_active", id);
  seen = loadSeen(id);
  lastItems = [];
  renderNav();
  el.feed.innerHTML = "";
  el.meta.textContent = "";
  load();
  closeNav();
}

function renderNav() {
  const item = (f) =>
    `<button type="button" class="nav-item${f.id === activeId ? " active" : ""}" data-id="${f.id}">${safe(f.name)}</button>`;
  const isTop = (f) => ["home", "saved", "leaderboard"].includes(f.kind);
  const top = FEEDS.filter(isTop).map(item).join("");
  const rest = FEEDS.filter((f) => !isTop(f)).map(item).join("");
  el.nav.innerHTML = top + '<div class="nav-sep">Sources</div>' + rest;
  updateHeadNav();
}

function updateHeadNav() {
  if (!el.navToggle) return;
  // On Home, the toggle jumps to the Leaderboard; everywhere else it jumps Home.
  const toLeaderboard = activeId === "home";
  el.navToggle.innerHTML = toLeaderboard ? CHART_SVG : HOME_SVG;
  const label = toLeaderboard ? "Leaderboard" : "Home";
  el.navToggle.setAttribute("aria-label", label);
  el.navToggle.title = label;
  el.navToggle.dataset.target = toLeaderboard ? "leaderboard" : "home";
}

function renderCategoryChips() {
  el.categoryChips.innerHTML = allCategories
    .map((c) => `<button type="button" class="chip${isCatShown(c) ? " active" : ""}" data-cat="${safe(c)}">${safe(c)}</button>`)
    .join("");
}

function toggleCategory(cat) {
  if (selectedCats.size === 0) {
    selectedCats = new Set([cat]); // from "all" → focus just this one
  } else if (selectedCats.has(cat)) {
    selectedCats.delete(cat); // empty again means "all"
  } else {
    selectedCats.add(cat);
  }
  if (selectedCats.size === allCategories.length) selectedCats = new Set(); // all → store empty
  saveSelectedCats();
  renderCategoryChips();
  if (activeFeed().kind === "home" && lastItems.length) renderItems(homeShown());
}

function selectAllCategories() {
  selectedCats = new Set();
  saveSelectedCats();
  renderCategoryChips();
  if (activeFeed().kind === "home" && lastItems.length) renderItems(homeShown());
}

// Top-N most relevant within the followed categories (items are pre-sorted by score).
function homeShown() {
  return lastItems.filter((it) => isCatShown(it.category)).slice(0, HOME_LIMIT);
}

function openNav() { el.app.classList.add("nav-open"); }
function closeNav() { el.app.classList.remove("nav-open"); }

/* ---------- wiring ---------- */

el.nav.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-item");
  if (btn) switchSource(btn.dataset.id);
});
el.categoryChips.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) toggleCategory(chip.dataset.cat);
});
el.catAll.addEventListener("click", selectAllCategories);
el.menuBtn.addEventListener("click", openNav);
el.navToggle.addEventListener("click", () => switchSource(el.navToggle.dataset.target || "home"));
el.scrim.addEventListener("click", closeNav);
function saveNotionUrl() {
  const url = el.pNotionUrl.value.trim();
  try { localStorage.setItem(NOTION_URL_KEY, url); } catch { /* ignore */ }
  el.notionUrlMsg.textContent = url ? "Saved" : "Cleared";
  setTimeout(() => { el.notionUrlMsg.textContent = ""; }, 2000);
  load(); // re-render so Save buttons appear/disappear immediately
}
el.saveNotionUrl.addEventListener("click", saveNotionUrl);
el.pNotionUrl.addEventListener("change", saveNotionUrl);

// Swipe deck: track scroll → indicator; tap a dot → scroll to that card.
el.feed.addEventListener("scroll", () => {
  if (!el.feed.classList.contains("deck")) return;
  const count = el.feed.querySelectorAll(".card").length;
  if (count < 2) return;
  const i = Math.max(0, Math.min(count - 1, Math.round(el.feed.scrollLeft / deckStep())));
  if (i !== deckIndex) {
    // The card you swiped away from counts as seen.
    const leaving = el.feed.querySelectorAll(".card")[deckIndex];
    markSeenGuid(leaving && leaving.getAttribute("data-guid"));
    deckIndex = i;
    updateDeckIndicator(i);
    const current = el.feed.querySelectorAll(".card")[i];
    savePos(current && current.getAttribute("data-guid"));
  }
}, { passive: true });

// List view: remember the story currently at the top of the viewport.
let posT;
window.addEventListener("scroll", () => {
  if (el.feed.classList.contains("deck")) return;
  clearTimeout(posT);
  posT = setTimeout(() => {
    if (el.feed.classList.contains("deck")) return;
    const line = headerOffset();
    let current = null;
    for (const c of el.feed.querySelectorAll(".card")) {
      if (c.getBoundingClientRect().top - line <= 1) current = c; else break;
    }
    if (current) savePos(current.getAttribute("data-guid"));
  }, 200);
}, { passive: true });
el.deckDots.addEventListener("click", (e) => {
  const dot = e.target.closest(".dot");
  if (dot) el.feed.scrollTo({ left: Number(dot.dataset.i) * deckStep(), behavior: "smooth" });
});
deckMQL.addEventListener("change", () => setupDeck(true));
let resizeT;
window.addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(() => setupDeck(true), 150); });

// Reading font size
el.fsUp.addEventListener("click", () => nudgeFontScale(0.1));
el.fsDown.addEventListener("click", () => nudgeFontScale(-0.1));

document.body.addEventListener("click", (e) => {
  const save = e.target.closest(".save-btn");
  if (save) {
    const item = renderedById[save.closest(".card")?.getAttribute("data-guid")];
    if (item) saveToNotion(item, save);
    return;
  }
  const more = e.target.closest(".readmore");
  if (more) {
    const card = more.closest(".card");
    const expanded = card.classList.toggle("expanded");
    more.textContent = expanded ? more.dataset.less : more.dataset.more;
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && !isFetching && activeFeed().kind !== "home") load();
});

el.pNotionUrl.value = localStorage.getItem(NOTION_URL_KEY) || "";
applyFontScale(parseFloat(localStorage.getItem(FS_KEY) || "1"));
seen = loadSeen(activeId);
renderNav();
renderCategoryChips();
load();
