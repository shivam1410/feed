/**
 * Google Apps Script — "Save to Notion" Web App (schema-aware + Markdown body).
 *
 * POST JSON:
 *   {
 *     "title":    "Paper title",                 -> Name (Title)
 *     "writer":   "Jane Doe" | ["Jane","John"],  -> Writer  (any select/text type)
 *     "tags":     ["llm","rag"] | "llm, rag",     -> Tags    (multi-select/text)
 *     "category": "Research paper",               -> Category (defaults to this)
 *     "source":   "DeepMind · https://...",       -> Source  (text/url)
 *     "content":  "# Markdown ...",               -> page body (Markdown -> blocks)
 *     "secret":   "..."                           -> only if API_SECRET is set
 *   }
 *
 * Script Properties (Project Settings → Script properties):
 *   NOTION_TOKEN     = secret_xxx
 *   NOTION_BOOKS_DB  = your database id
 *   API_SECRET       = anything   (OPTIONAL gate)
 *
 * The script reads the DB schema and formats each property by its ACTUAL type,
 * so Select vs Multi-select vs Text just works. Connect your integration to the
 * database (⋯ → Connections) or you'll get object_not_found.
 */

var NOTION_VERSION = '2022-06-28';

// Map incoming JSON fields → your column names. Title is detected by type.
var COL_WRITER = 'Writer';
var COL_TAGS = 'Tags';
var COL_CATEGORY = 'Category';
var COL_SOURCE = 'Source';
var DEFAULT_CATEGORY = 'Research paper';

function doPost(e) {
  try {
    var p = PropertiesService.getScriptProperties();
    var token = p.getProperty('NOTION_TOKEN');
    var dbId = p.getProperty('NOTION_BOOKS_DB');
    var secret = p.getProperty('API_SECRET');
    if (!token || !dbId) return out({ ok: false, error: 'Set NOTION_TOKEN and NOTION_BOOKS_DB in Script properties' });

    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (secret && body.secret !== secret) return out({ ok: false, error: 'Unauthorized' });

    var title = String(body.title || '').trim();
    if (!title) return out({ ok: false, error: 'Missing title' });

    var schema = getSchema(dbId, token);
    var titleCol = null;
    for (var k in schema) { if (schema[k].type === 'title') { titleCol = k; break; } }
    if (!titleCol) return out({ ok: false, error: 'No title property found in DB' });

    var properties = {};
    setProp(properties, schema, titleCol, title);
    setProp(properties, schema, COL_WRITER, body.writer);
    setProp(properties, schema, COL_TAGS, body.tags);
    setProp(properties, schema, COL_CATEGORY, body.category || DEFAULT_CATEGORY);
    setProp(properties, schema, COL_SOURCE, body.source || body.link);

    var res = UrlFetchApp.fetch('https://api.notion.com/v1/pages', {
      method: 'post',
      contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + token, 'Notion-Version': NOTION_VERSION },
      payload: JSON.stringify({
        parent: { database_id: dbId },
        properties: properties,
        children: markdownToBlocks(body.content || '')
      }),
      muteHttpExceptions: true
    });

    var code = res.getResponseCode();
    var data = {};
    try { data = JSON.parse(res.getContentText() || '{}'); } catch (ignore) {}
    if (code >= 200 && code < 300) return out({ ok: true, id: data.id, url: data.url });
    return out({ ok: false, error: 'Notion HTTP ' + code, detail: data.message || data });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}

/* ---------- schema-aware property formatting ---------- */

function getSchema(dbId, token) {
  var cache = CacheService.getScriptCache();
  var key = 'nschema_' + dbId;
  var hit = cache.get(key);
  if (hit) return JSON.parse(hit);
  var res = UrlFetchApp.fetch('https://api.notion.com/v1/databases/' + dbId, {
    headers: { Authorization: 'Bearer ' + token, 'Notion-Version': NOTION_VERSION },
    muteHttpExceptions: true
  });
  if (res.getResponseCode() >= 300) throw new Error('Cannot read DB schema: ' + res.getContentText());
  var props = JSON.parse(res.getContentText()).properties || {};
  var map = {};
  for (var name in props) map[name] = { type: props[name].type };
  cache.put(key, JSON.stringify(map), 21600); // cache 6h; clear cache if you add columns
  return map;
}

function setProp(properties, schema, colName, value) {
  if (!colName || !schema[colName]) return;                 // column missing → skip
  if (value === undefined || value === null || value === '') return;
  var type = schema[colName].type;
  if (type === 'title') properties[colName] = { title: textRT(value) };
  else if (type === 'rich_text') properties[colName] = { rich_text: textRT(value) };
  else if (type === 'url') properties[colName] = { url: String(value) };
  else if (type === 'select') properties[colName] = { select: { name: firstName(value) } };
  else if (type === 'status') properties[colName] = { status: { name: firstName(value) } };
  else if (type === 'multi_select') properties[colName] = { multi_select: toNames(value) };
  else if (type === 'number') properties[colName] = { number: Number(value) };
  else if (type === 'date') properties[colName] = { date: { start: String(value) } };
  // other types are ignored
}

function textRT(v) { return [{ type: 'text', text: { content: String(v).slice(0, 2000) } }]; }
function toArray(v) {
  if (Object.prototype.toString.call(v) === '[object Array]') return v;
  if (typeof v === 'string') return v.split(',');
  return [v];
}
function firstName(v) { return String(toArray(v)[0] || '').replace(/,/g, ' ').trim().slice(0, 100); }
function toNames(v) {
  return toArray(v)
    .map(function (t) { return String(t).replace(/,/g, ' ').trim(); })
    .filter(function (t) { return t.length; })
    .map(function (t) { return { name: t.slice(0, 100) }; })
    .slice(0, 100);
}

/* ---------- Markdown → Notion blocks ---------- */

function markdownToBlocks(md) {
  md = String(md || '').replace(/\r\n/g, '\n').trim();
  if (!md) return [];
  var lines = md.split('\n');
  var blocks = [];
  var i = 0;
  while (i < lines.length) {
    var line = lines[i];
    if (!line.trim()) { i++; continue; }

    if (/^```/.test(line)) {                                  // code fence
      var code = []; i++;
      while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; }
      i++;
      blocks.push({ object: 'block', type: 'code', code: { rich_text: textRT(code.join('\n')), language: 'plain text' } });
      continue;
    }
    var h = line.match(/^(#{1,3})\s+(.*)$/);                  // headings
    if (h) {
      var type = 'heading_' + h[1].length;
      var b = { object: 'block', type: type }; b[type] = { rich_text: parseInline(h[2]) };
      blocks.push(b); i++; continue;
    }
    if (/^>\s?/.test(line)) {                                 // quote
      blocks.push({ object: 'block', type: 'quote', quote: { rich_text: parseInline(line.replace(/^>\s?/, '')) } });
      i++; continue;
    }
    var bullet = line.match(/^\s*[-*]\s+(.*)$/);              // bullet list
    if (bullet) {
      blocks.push({ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: parseInline(bullet[1]) } });
      i++; continue;
    }
    var num = line.match(/^\s*\d+\.\s+(.*)$/);                // numbered list
    if (num) {
      blocks.push({ object: 'block', type: 'numbered_list_item', numbered_list_item: { rich_text: parseInline(num[1]) } });
      i++; continue;
    }
    var para = [line]; i++;                                   // paragraph (gather wrapped lines)
    while (i < lines.length && lines[i].trim() &&
           !/^(#{1,3}\s|>\s?|\s*[-*]\s|\s*\d+\.\s|```)/.test(lines[i])) { para.push(lines[i]); i++; }
    blocks.push({ object: 'block', type: 'paragraph', paragraph: { rich_text: parseInline(para.join(' ')) } });
  }
  return blocks.slice(0, 100); // Notion: max 100 children per create call
}

/** Inline markdown → rich_text: links, **bold**, *italic*, `code`. */
function parseInline(text) {
  text = String(text || '');
  var re = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)|(__([^_]+)__)|(\*([^*]+)\*)|(_([^_]+)_)|(`([^`]+)`)/g;
  var tokens = [], last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) tokens.push(rt(text.slice(last, m.index)));
    if (m[1]) tokens.push(rt(m[2], null, m[3]));          // link text=m2 url=m3
    else if (m[4]) tokens.push(rt(m[5], { bold: true }));
    else if (m[6]) tokens.push(rt(m[7], { bold: true }));
    else if (m[8]) tokens.push(rt(m[9], { italic: true }));
    else if (m[10]) tokens.push(rt(m[11], { italic: true }));
    else if (m[12]) tokens.push(rt(m[13], { code: true }));
    last = re.lastIndex;
  }
  if (last < text.length) tokens.push(rt(text.slice(last)));
  return tokens.length ? tokens : [rt('')];
}
function rt(content, annotations, url) {
  var t = { type: 'text', text: { content: String(content).slice(0, 2000) } };
  if (url) t.text.link = { url: url };
  if (annotations) t.annotations = annotations;
  return t;
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
function doGet() { return out({ ok: true, service: 'notion-save', usage: 'POST { title, writer, tags[], category, source, content(markdown) }' }); }
