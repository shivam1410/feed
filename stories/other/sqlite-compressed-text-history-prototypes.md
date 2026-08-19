---
title: "SQLite compressed text-history prototypes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
authors: []
date: "2026-08-09T22:05:00+00:00"
score: 52
guid: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
image: ""
generated: "2026-08-19T19:06:05+05:30"
---

A prototype approach for efficient text-revision storage in SQLite: instead of storing each version as a separate database row (which adds 20KB of overhead per edit for every 20KB document), store all prior versions in a single JSON array and apply aggressive zlib or zstd compression. The repeated text appearing across versions should compress exceptionally well, significantly reducing total storage overhead. This novel approach addresses a persistent and difficult challenge in database revision-history design, where naive implementations quickly consume storage. The technique leverages compression's inherent strength at finding repeated patterns within correlated data sequences, making it ideal for version histories where documents often change minimally between revisions.
