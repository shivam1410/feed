---
title: "sqlite-utils 4.0rc1 adds migrations and nested transactions"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/21/sqlite-utils-40rc1/#atom-everything"
authors: []
date: "2026-06-21T23:35:47+00:00"
score: 25
guid: "https://simonwillison.net/2026/Jun/21/sqlite-utils-40rc1/#atom-everything"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

sqlite-utils 4.0rc1 introduces database migrations and nested transactions with backwards-incompatible major version bump. The migrations system—ported from the proven sqlite-migrate library—allows defining schema changes as Python decorators, enabling production-grade database change management. This brings structured migration support to the popular Python/CLI tool for SQLite operations.
