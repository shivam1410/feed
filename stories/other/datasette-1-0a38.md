---
title: "datasette 1.0a38"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/6/datasette/"
authors: []
date: "2026-08-06T18:24:34+00:00"
score: 25
guid: "https://simonwillison.net/2026/Aug/6/datasette/"
image: ""
generated: "2026-08-16T19:04:55+05:30"
---

Datasette 1.0a38 patches a SQL injection vulnerability affecting instances with both public and private tables in the same database. Users with access to public tables could execute SQL injection attacks to read private table data despite permissions restrictions. The fix is backported to version 0.65.3. Site administrators using this mixed-access configuration are advised to disable the execute-sql permission to prevent exploitation. The vulnerability allows read-only data exfiltration from protected tables.
