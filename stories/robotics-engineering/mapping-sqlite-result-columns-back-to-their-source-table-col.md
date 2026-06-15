---
title: "Mapping SQLite result columns back to their source `table.column`"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/13/sqlite-column-provenance/#atom-everything"
authors: []
date: "2026-06-13T23:05:00+00:00"
score: 20
guid: "https://simonwillison.net/2026/Jun/13/sqlite-column-provenance/#atom-everything"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

Research: Mapping SQLite result columns back to their source `table.column` It would be neat if arbitrary SQL queries in Datasette could be rendered with additional information based on which columns from which tables were included in the results. To build that, we would need to be able to look at a SQL query like select users.name, orders.total from users join orders on orders.user_id = users.id and programmatically identify the table.column for each result - navigating not just joins but also more complex syntax like CTEs. I decided to set Claude Code (Opus 4.8, since Fable is currently banned by the US government ) on the problem. It found several promising solutions - one using apsw , another that uses ctypes to access the SQLite sqlite3_column_table_name() C function (which is not otherwise exposed to Python), and one using clever interrogation of the output of EXPLAIN . Tags: python , sqlite , datasette
