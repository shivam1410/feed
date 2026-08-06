---
title: "condense-json 1.0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/2/condense-json/#atom-everything"
authors: []
date: "2026-08-02T22:19:59+00:00"
score: 35
guid: "https://simonwillison.net/2026/Aug/2/condense-json/#atom-everything"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

condense-json 1.0 delivers JSON compression by replacing repeated strings with compact references. The library accepts JSON and a replacements object mapping strings to keys, scans for occurrences, and replaces them with special {$r: ...} syntax; uncondense_json() reverses the process. Originally developed for reducing SQLite log storage containing duplicated data from related structures, after 1.5 years of incremental fixes the library reached maturity for 1.0 release. Willison emphasized using the stable version to encourage confidence in releasing smaller tools.
