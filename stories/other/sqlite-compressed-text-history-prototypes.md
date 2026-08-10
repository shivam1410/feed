---
title: "SQLite compressed text-history prototypes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything"
authors: []
date: "2026-08-09T22:05:00+00:00"
score: 45
guid: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

An experimental approach stores document revision histories efficiently in SQLite by bundling all versions in JSON arrays of full text strings, then applying zlib or zstd compression. This exploits the redundancy across versions—repeated strings compress well. The prototype avoids the row-per-version approach where a 20-kilobyte document adds 20 kilobytes of storage per edit, multiplying inefficiently. The author prototyped the idea using GPT Live voice mode, exploring trade-offs between simplicity and compression efficiency. For revision-heavy applications like collaborative documents, code repositories, and config management, this compression approach significantly reduces wasted storage compared to naive full-text duplication.
