---
title: "condense-json 1.1"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/3/condense-json/#atom-everything"
authors: []
date: "2026-08-03T04:56:26+00:00"
score: 35
guid: "https://simonwillison.net/2026/Aug/3/condense-json/#atom-everything"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

condense-json 1.1 expands the JSON compression library with two features: replacements now support non-string values for structural transformations, and objects can be identified as merge candidates with key-update or deletion instructions. The uncondense_json() function applies these merges during decompression. The release adds round-trip tests using Hypothesis property-based testing. The library reduces storage of JSON containing duplicated data structures, particularly in SQLite logs, improving on the stable 1.0 release from eighteen months of incremental development.
