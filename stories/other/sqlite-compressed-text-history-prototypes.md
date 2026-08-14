---
title: "SQLite compressed text-history prototypes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
authors: []
date: "2026-08-09T22:05:00+00:00"
score: 45
guid: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

A new approach for storing document revision histories in SQLite compresses multiple text versions efficiently: collect every previous version as strings in a JSON array, then apply zlib or zstd compression to the entire structure. The technique exploits high redundancy across version histories; storing full-text copies of long documents normally requires duplicating that data per edit. Compression significantly reduces storage overhead by eliminating repeated strings across versions, making it practical for tracking changes to documents such as 20-kilobyte texts where naive row-per-version approaches become expensive.
