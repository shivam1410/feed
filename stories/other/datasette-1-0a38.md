---
title: "datasette 1.0a38"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/6/datasette/#atom-everything"
authors: []
date: "2026-08-06T18:24:34+00:00"
score: 35
guid: "https://simonwillison.net/2026/Aug/6/datasette/#atom-everything"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

Datasette 1.0a38 fixes a critical SQL injection vulnerability affecting instances serving both public and private tables with permission-based access. The vulnerability allowed users with public table access to execute SQL injection attacks, gaining read-only access to private tables in the same database despite permission restrictions. The fix is available in Datasette 1.0a38 and 0.65.3. Site administrators serving private tables are advised to disable execute-sql permission. While the vulnerable configuration is relatively rare, this patch is critical for affected deployments.
