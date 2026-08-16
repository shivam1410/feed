---
title: "SQLite compressed text-history prototypes"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
authors: []
date: "2026-08-09T22:05:00+00:00"
score: 30
guid: "https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/"
image: ""
generated: "2026-08-16T19:04:55+05:30"
---

This research explores storing text revision histories efficiently in SQLite by compressing arrays of full-text versions. Rather than storing each edit as a separate row—which multiplies storage for large documents—the approach bundles all historical versions into a JSON array and applies compression algorithms like zlib or zstd. The repeated content across versions compresses exceptionally well. This prototype aims to solve a long-standing problem: storing complete document history without proportional storage bloat for frequently-edited content.
