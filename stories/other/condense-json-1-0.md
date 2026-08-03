---
title: "condense-json 1.0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/2/condense-json/#atom-everything"
authors: []
date: "2026-08-02T22:19:59+00:00"
score: 15
guid: "https://simonwillison.net/2026/Aug/2/condense-json/#atom-everything"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

condense-json 1.0 released after 18 months in production. The library scans JSON for repeated substrings matching a replacements object and compresses them using {"$r": ...} syntax, with uncondense_json() reversing the effect. A substring appearing multiple times compresses to a reference plus one full instance. The tool reduces storage for SQLite logs containing LLM data with inherent duplication. Small library but practical for space-efficient JSON storage in applications with repeated field values across similar structures.
