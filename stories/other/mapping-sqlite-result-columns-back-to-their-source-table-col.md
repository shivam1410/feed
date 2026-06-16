---
title: "Mapping SQLite result columns back to their source `table.column`"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/13/sqlite-column-provenance/#atom-everything"
authors: []
date: "2026-06-13T23:05:00+00:00"
score: 35
guid: "https://simonwillison.net/2026/Jun/13/sqlite-column-provenance/#atom-everything"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

Simon Willison explored using Claude Code to map SQL result columns back to their source tables and columns—solving the challenge of tracking which columns from which tables appear in query results. The Opus 4.8 model identified three promising approaches: using the apsw library, calling SQLite's sqlite3_column_table_name() C function via ctypes (normally inaccessible to Python), and analyzing EXPLAIN output. The solution handles complex syntax including joins and CTEs. This capability would let Datasette render arbitrary SQL queries with enriched metadata about column origins, enabling better data source tracking and transparency.
