---
title: "condense-json 1.1"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/3/condense-json/#atom-everything"
authors: []
date: "2026-08-03T04:56:26+00:00"
score: 45
guid: "https://simonwillison.net/2026/Aug/3/condense-json/#atom-everything"
image: ""
generated: "2026-08-05T20:00:21+05:30"
---

Release: condense-json 1.1 After shipping condense-json 1.0 I started integrating it into LLM, and found there were some desirable new features already: Replacements object can now include values other than strings. These will be identified and used as structural replacements by condense_json() and uncondense_json() . #8 Objects can be used as the basis for merge operations. condense_json() will identify if there are objects that are a close match and will store instructions for keys to update or delete. uncondense_json() can then apply these merges. I also added some round-trip tests using the Hypothesis property-based Python testing library. Tags: json
