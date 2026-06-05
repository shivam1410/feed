---
title: "datasette 1.0a32"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/May/31/datasette/#atom-everything"
authors: []
date: "2026-05-31T23:23:38+00:00"
score: 10
guid: "https://simonwillison.net/2026/May/31/datasette/#atom-everything"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

Datasette 1.0a32 is a minor maintenance release fixing two database operation issues. First, it resolves a bug with INSERT INTO ... RETURNING SQL queries executed via the new /db/-/execute-write API endpoint that was preventing proper query execution. Second, it addresses a series of base_url configuration issues that emerged during Service Worker experimentation with alternative deployment paths. These fixes improve reliability of database write operations and URL path handling for deployments using non-root base paths or service worker caching strategies.
