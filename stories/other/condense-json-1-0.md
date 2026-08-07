---
title: "condense-json 1.0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/2/condense-json/#atom-everything"
authors: []
date: "2026-08-02T22:19:59+00:00"
score: 20
guid: "https://simonwillison.net/2026/Aug/2/condense-json/#atom-everything"
image: ""
generated: "2026-08-07T19:04:45+05:30"
---

Simon Willison released condense-json 1.0, a library that identifies repeated substrings in JSON and replaces them with compact reference syntax, reducing storage footprint. Developed over 1.5 years for SQLite logs in LLM token-storage applications, it scans for matching substrings and outputs compressed JSON reversible via uncondense_json. While modest in scope, it addresses practical efficiency needs in workflows generating large JSON with duplicated text.
