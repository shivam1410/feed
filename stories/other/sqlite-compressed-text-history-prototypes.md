---
title: "SQLite compressed text-history prototypes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything"
authors: []
date: "2026-08-09T22:05:00+00:00"
score: 35
guid: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

Simon Willison explored an efficient approach to storing revision histories in SQLite: bundling all previous document versions into a JSON array and applying zlib or zstd compression. This leverages high redundancy across versions—earlier versions contain much of the same text as later ones. The motivation is practical: storing each version as separate rows becomes inefficient with long documents, adding 20 kilobytes per edit. The compression approach allows a single compressed column to store complete revision history far more compactly than traditional row-per-version designs, with repeated strings compressed away.
