---
title: "datasette 1.0a38"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/6/datasette/"
authors: []
date: "2026-08-06T18:24:34+00:00"
score: 50
guid: "https://simonwillison.net/2026/Aug/6/datasette/"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

Datasette 1.0a38 patches a SQL injection vulnerability affecting deployments that expose both public and private tables within the same database using permission-based access control. The vulnerability allowed users with legitimate access to public tables to bypass permissions and execute SQL injection attacks, gaining read-only access to private tables in the same database. Site administrators using this configuration are advised to disable the execute-sql permission on affected databases. The bug is also patched in Datasette 0.65.3. Although this particular configuration—mixing private and public tables in one database instance—is uncommon, the vulnerability illustrates a critical principle in permission-based systems: permission boundaries must prevent unauthorized data access through all code paths, including raw SQL execution interfaces.
