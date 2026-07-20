---
title: "sqlite-utils 4.1.1"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/12/sqlite-utils/#atom-everything"
authors: []
date: "2026-07-12T20:55:30+00:00"
score: 40
guid: "https://simonwillison.net/2026/Jul/12/sqlite-utils/#atom-everything"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

Release: sqlite-utils 4.1.1 Mainly a fix for an edge case that regular Claude chat spotted while experimenting with the 4.1 release to answer a question about ON DELETE. table.transform() now raises a TransactionError if called while a transaction is open with PRAGMA foreign_keys enabled and the table is referenced by foreign keys with destructive ON DELETE actions - CASCADE , SET NULL or SET DEFAULT . The pragma cannot be changed inside a transaction, so previously dropping the old table as part of the transform could fire those actions and silently delete or modify referencing rows. See Foreign keys and transactions for details and workarounds. ( #794 ) The CLI and Python API documentation now cross-reference each other: CLI sections link to the equivalent Python API functionality and Python API sections link back to the corresponding CLI command. ( #791 ) Tags: sqlite , sqlite-utils
