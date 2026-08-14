---
title: "datasette 1.0a38"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/6/datasette/"
authors: []
date: "2026-08-06T18:24:34+00:00"
score: 55
guid: "https://simonwillison.net/2026/Aug/6/datasette/"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

Datasette 1.0a38 fixes a SQL injection vulnerability affecting instances serving both public and private tables with access controlled through Datasette's permissions system. The bug allowed users with read access to any public table to execute SQL injection attacks that bypassed restrictions and granted read-only access to private tables in the same database. Site administrators with this configuration are advised to disable the execute-sql permission on affected databases. The fix is also available in Datasette 0.65.3, though this mixed public-private configuration is likely rare in practice.
