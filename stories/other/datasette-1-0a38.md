---
title: "datasette 1.0a38"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/6/datasette/#atom-everything"
authors: []
date: "2026-08-06T18:24:34+00:00"
score: 50
guid: "https://simonwillison.net/2026/Aug/6/datasette/#atom-everything"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

Datasette 1.0a38 patches a SQL injection vulnerability affecting mixed-access database configurations. The vulnerable pattern: Datasette serving both public and private tables from one database with permission-based access control. A user with public-table access could exploit SQL injection to read private tables despite restrictions. Site administrators should disable execute-sql permissions to prevent exploitation. The fix appears in Datasette 0.65.3. While this configuration is uncommon, the vulnerability exposes a critical edge case: permission systems can be bypassed through SQL injection when public and private data share a database.
