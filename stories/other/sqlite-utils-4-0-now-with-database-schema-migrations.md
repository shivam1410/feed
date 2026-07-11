---
title: "sqlite-utils 4.0, now with database schema migrations"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/7/sqlite-utils-4/#atom-everything"
authors: []
date: "2026-07-07T19:32:57+00:00"
score: 18
guid: "https://simonwillison.net/2026/Jul/7/sqlite-utils-4/#atom-everything"
image: ""
generated: "2026-07-11T21:29:29+05:30"
---

sqlite-utils reached version 4.0, its first major release since November 2020, introducing three significant features: database migrations, nested transactions via a new db.atomic() method, and support for compound foreign keys. The migration system enables tracking which schema changes have been applied to SQLite databases. Migrations are defined in Python files and leverage the powerful table.transform() method, which creates a temporary table with the new schema, copies data, drops the original table, and renames the temporary one—implementing SQLite's recommended pattern for alterations that its native ALTER TABLE statement doesn't support. This 124th release marks a milestone for the project, enabling proper version control of database schemas alongside application code.
