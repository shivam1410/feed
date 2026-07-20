---
title: "lobste.rs is now running on SQLite"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/14/lobsters-sqlite/#atom-everything"
authors: []
date: "2026-07-14T19:44:11+00:00"
score: 55
guid: "https://simonwillison.net/2026/Jul/14/lobsters-sqlite/#atom-everything"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

Community discussion site Lobsters has successfully migrated from MariaDB to SQLite after exploring database alternatives since August 2018, initially considering PostgreSQL before ultimately settling on SQLite. Now running entirely on a single VPS, the system manages a 3.8GB primary content database alongside separate 1.1GB cache, 218MB queue, and 555MB rate-limiting databases. The migration was accomplished through 30 commits spanning 188 affected files. Measured operational improvements include reduced CPU consumption, decreased memory usage, improved site responsiveness, and halved VPS operating costs. This case study demonstrates SQLite's practical viability for production-scale community platforms, challenging longstanding conventional assumptions about database selection for web applications.
