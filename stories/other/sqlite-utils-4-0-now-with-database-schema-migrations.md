---
title: "sqlite-utils 4.0, now with database schema migrations"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/7/sqlite-utils-4/#atom-everything"
authors: []
date: "2026-07-07T19:32:57+00:00"
score: 40
guid: "https://simonwillison.net/2026/Jul/7/sqlite-utils-4/#atom-everything"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

sqlite-utils 4.0 releases after five years with three major features: database schema migrations, nested transactions via db.atomic(), and compound foreign key support. Schema migrations track which changes have been applied, enabling reproducible database evolution. The library uses table.transform() to achieve ALTER TABLE capabilities SQLite doesn't natively support, implementing SQLite's recommended pattern of creating temporary tables with new schemas, copying data, then swapping tables. This first major version bump since 2020 significantly enhances database management capabilities. The migration system allows developers to version control database schema changes alongside application code, improving database maintenance and team collaboration.
