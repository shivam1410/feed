---
title: "datasette 0.65.5"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/16/datasette-2/"
authors: []
date: "2026-09-16T23:51:08+00:00"
score: 15
guid: "https://simonwillison.net/2026/Sep/16/datasette-2/"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

Datasette 0.65.5 patched a security vulnerability (GHSA-h547-rmjf-5m2m) where a trailing newline in a table name could bypass permissions and expose private rows, as reported by dpfkdlemtp. The fix prevents unauthorized database access through formatting manipulation.
