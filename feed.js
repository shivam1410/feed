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
  { id: "nature", name: "Nature", kind: "rss" },
  { id: "deepmind", name: "DeepMind", kind: "rss" },
  { id: "huggingface", name: "HF Trending Papers", kind: "hf" },
  {
    id: "paperswithcode", name: "Papers with Code", kind: "link",
    link: "https://paperswithcode.com/",
    note: "Papers With Code was discontinued — the domain now redirects to Hugging Face Papers, so it has no independent feed. Use HF Trending Papers for the same content.",
  },
  { id: "semanticscholar", name: "Semantic Scholar", kind: "s2", link: "https://www.semanticscholar.org/" },
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
const S2_LIMIT = 40;
const HOME_LIMIT = 15; // Home shows only the top-N most relevant (by score)

const SEEN_KEY = (id) => `feed_seen_${id}_v1`;
const NOTION_URL_KEY = "feed_notion_url_v1";
const SAVED_KEY = "feed_saved_v1";
const CATS_KEY = "feed_cats_v1";

const el = {
  app: document.querySelector(".app"),
  feed: document.getElementById("feed"),
  nav: document.getElementById("nav"),
  sectionTitle: document.getElementById("sectionTitle"),
  meta: document.getElementById("meta"),
  refreshBtn: document.getElementById("refreshBtn"),
  menuBtn: document.getElementById("menuBtn"),
  scrim: document.getElementById("scrim"),
  categoryChips: document.getElementById("categoryChips"),
  catAll: document.getElementById("catAll"),
  pNotionUrl: document.getElementById("pNotionUrl"),
  saveNotionUrl: document.getElementById("saveNotionUrl"),
  notionUrlMsg: document.getElementById("notionUrlMsg"),
  deckDots: document.getElementById("deckDots"),
};

// Mobile Home shows cards as a horizontal swipe deck (one per screen + dots).
const deckMQL = window.matchMedia("(max-width: 560px)");
const DECK_GAP = 12;

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
function isSaved(guid) {
  return loadSaved().some((s) => s.guid === guid);
}
function notionUrl() {
  return (el.pNotionUrl.value || localStorage.getItem(NOTION_URL_KEY) || "").trim();
}
async function toggleSave(item, btn) {
  const saved = loadSaved();
  const idx = saved.findIndex((s) => s.guid === item.guid);
  if (idx >= 0) {
    saved.splice(idx, 1);
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    btn.innerHTML = saveLabel("save");
    btn.classList.remove("saved");
    return;
  }
  const record = {
    guid: item.guid, title: item.title, url: item.link, source: item.source || "",
    category: item.category || "", date: item.date, score: item.score ?? null,
    summary: item.summary || "", savedAt: new Date().toISOString(),
  };
  saved.unshift(record);
  localStorage.setItem(SAVED_KEY, JSON.stringify(saved.slice(0, 1000)));
  btn.classList.add("saved");

  const url = notionUrl();
  if (!url) { btn.innerHTML = saveLabel("saved"); return; }

  btn.innerHTML = saveLabel("saving");
  // Shape the payload the Apps Script / Notion endpoint expects.
  const payload = {
    title: item.title,
    tags: [item.category].filter(Boolean),
    source: [item.source, item.link].filter(Boolean).join(" · "),
    content: item.summary || "",
  };
  if (item.authors && item.authors.length) payload.writer = item.authors;
  try {
    // Apps Script can't return CORS headers, so this is a fire-and-forget
    // "simple" request (text/plain → no preflight); response is opaque, so we
    // mark saved optimistically.
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
    btn.innerHTML = saveLabel("saved");
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
function parseS2(jsonText) {
  return (JSON.parse(jsonText).data || []).slice(0, S2_LIMIT).map((p) => ({
    guid: p.paperId, title: p.title || "(untitled)",
    link: p.url || (p.openAccessPdf && p.openAccessPdf.url) || "",
    authors: (p.authors || []).map((a) => a.name).filter(Boolean),
    date: p.publicationDate, summary: p.abstract || "", image: "", extra: p.venue || "",
  }));
}
const PARSERS = { rss: parseRSS, hf: parseHF, s2: parseS2 };

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
    case "semanticscholar":
      return "https://api.semanticscholar.org/graph/v1/paper/search/bulk?query=artificial+intelligence&sort=publicationDate:desc&fields=title,abstract,url,authors,publicationDate,venue";
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
  const saved = isSaved(item.guid);
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
        ${showOrig ? `<div class="full"><span class="full-label">From the source:</span> ${lightMarkup(orig)}</div>` : ""}
        ${hasMore ? `<button type="button" class="readmore" data-more="${briefed ? "Source abstract ▾" : "Read more ▾"}" data-less="Show less ▴">${briefed ? "Source abstract ▾" : "Read more ▾"}</button>` : ""}
        ${byline ? `<div class="byline">${safe(byline)}</div>` : ""}
        <div class="card-foot">
          <span class="date">${safe(date)}</span>
          ${canSave ? `<button type="button" class="save-btn${saved ? " saved" : ""}">${saveLabel(saved ? "saved" : "save")}</button>` : ""}
        </div>
      </div>
    </article>`;
}

function renderItems(items) {
  renderedById = Object.fromEntries(items.filter((it) => it.guid).map((it) => [it.guid, it]));
  el.feed.innerHTML = items.map((it) => cardHTML(it, it.guid && !seen.has(it.guid))).join("");
  el.meta.textContent = "";
  // Baseline "new": mark currently shown items as seen so NEW means "since last visit".
  var changed = false;
  items.forEach(function (it) { if (it.guid && !seen.has(it.guid)) { seen.add(it.guid); changed = true; } });
  if (changed) saveSeen(activeId);
  firstLoad[activeId] = false;
  setupDeck();
}

/* ---------- mobile swipe deck (Home) ---------- */

function deckStep() {
  const card = el.feed.querySelector(".card");
  return card ? card.offsetWidth + DECK_GAP : el.feed.clientWidth;
}
function setActiveDot(i) {
  const dots = el.deckDots.querySelectorAll(".dot");
  dots.forEach(function (d, n) { d.classList.toggle("active", n === i); });
}
function setupDeck() {
  const isDeck = activeFeed().kind === "home" && deckMQL.matches;
  el.feed.classList.toggle("deck", isDeck);
  if (!isDeck) {
    el.deckDots.innerHTML = "";
    el.deckDots.style.display = "none";
    return;
  }
  const cards = el.feed.querySelectorAll(".card");
  el.deckDots.style.display = cards.length > 1 ? "flex" : "none";
  el.deckDots.innerHTML = Array.from(cards)
    .map((_, i) => `<button type="button" class="dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="Card ${i + 1}"></button>`)
    .join("");
  el.feed.scrollLeft = 0;
  deckIndex = 0;
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
}

/* ---------- load ---------- */

async function load() {
  const feed = activeFeed();
  el.sectionTitle.textContent = feed.name;

  if (feed.kind === "link") return renderLinkCard(feed);

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
      renderItems(lastItems);
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
  const top = FEEDS.filter((f) => f.kind === "home" || f.kind === "saved").map(item).join("");
  const rest = FEEDS.filter((f) => f.kind !== "home" && f.kind !== "saved").map(item).join("");
  el.nav.innerHTML = top + '<div class="nav-sep">Sources</div>' + rest;
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
el.refreshBtn.addEventListener("click", load);
el.menuBtn.addEventListener("click", openNav);
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

// Swipe deck: track scroll → active dot; tap a dot → scroll to that card.
el.feed.addEventListener("scroll", () => {
  if (!el.feed.classList.contains("deck")) return;
  const count = el.deckDots.querySelectorAll(".dot").length;
  if (!count) return;
  const i = Math.max(0, Math.min(count - 1, Math.round(el.feed.scrollLeft / deckStep())));
  if (i !== deckIndex) { deckIndex = i; setActiveDot(i); }
}, { passive: true });
el.deckDots.addEventListener("click", (e) => {
  const dot = e.target.closest(".dot");
  if (dot) el.feed.scrollTo({ left: Number(dot.dataset.i) * deckStep(), behavior: "smooth" });
});
deckMQL.addEventListener("change", setupDeck);
let resizeT;
window.addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(setupDeck, 150); });

document.body.addEventListener("click", (e) => {
  const save = e.target.closest(".save-btn");
  if (save) {
    const item = renderedById[save.closest(".card")?.getAttribute("data-guid")];
    if (item) toggleSave(item, save);
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
seen = loadSeen(activeId);
renderNav();
renderCategoryChips();
load();
