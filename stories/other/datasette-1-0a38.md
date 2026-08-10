---
title: "datasette 1.0a38"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/6/datasette/#atom-everything"
authors: []
date: "2026-08-06T18:24:34+00:00"
score: 30
guid: "https://simonwillison.net/2026/Aug/6/datasette/#atom-everything"
image: ""
generated: "2026-08-10T19:05:52+05:30"
---

Datasette 1.0a38 patches a SQL injection vulnerability affecting instances storing both public and private tables in a single database with Datasette permission controls. Users with read access to any public table could exploit SQL injection to bypass permissions and read private tables in the same database. The vulnerability is limited to a specific rare configuration mixing public and private data in one instance. Fixes are available in versions 1.0a38 and 0.65.3. Site administrators managing private tables alongside public ones are advised to disable the execute-sql permission on affected databases. While such mixed-access configurations are uncommon, the vulnerability demonstrates the importance of careful permission design when combining public and private data in shared database instances.
