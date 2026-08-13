---
title: "SQLite compressed text-history prototypes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
authors: []
date: "2026-08-09T22:05:00+00:00"
score: 35
guid: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

The article proposes storing document revision histories in SQLite by bundling all text versions in a JSON array and applying compression algorithms like zlib or zstd. This exploits repeated strings compressing efficiently when processed as a single block. Motivation: storing large documents (e.g., 20KB) becomes inefficient—each edit adds the full document size to the database. Instead of separate rows per version, bundling enables compression to eliminate redundancy across history. This addresses a persistent database design challenge of preserving revision history without multiplying storage costs. The author explored this approach as a potential solution for text-heavy applications with frequent edits, drawing on past experience building such systems.
