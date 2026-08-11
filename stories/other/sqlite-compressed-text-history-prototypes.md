---
title: "SQLite compressed text-history prototypes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything"
authors: []
date: "2026-08-09T22:05:00+00:00"
score: 55
guid: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

Simon Willison explores efficiently storing document revision histories in SQLite by compressing full-text versions as JSON arrays using zlib or zstd. The motivation: naive row-per-version schemes multiply database size rapidly—each 20KB edit adds 20KB of storage. Compression should work well because historical versions contain repeated content. Willison discussed the prototype using GPT-Live voice mode in ChatGPT's iPhone app, exploring the idea conversationally. This research addresses a longstanding challenge: preserving complete revision history without proportional storage penalties in relational databases.
