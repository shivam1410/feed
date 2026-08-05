---
title: "AI Worming through Word"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
authors: []
date: "2026-07-29T18:43:03+00:00"
score: 77
guid: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
image: ""
generated: "2026-08-05T20:00:21+05:30"
---

Security researcher Håkon Måløy discovered a self-replicating prompt injection worm targeting Microsoft Word. An attacker embeds hidden instructions in documents used by Copilot, which interprets them as user requests and copies the instructions into new documents. Those new documents become vectors: when used in subsequent Copilot workflows, the instructions trigger again and propagate further—even without the original document present. This is the first deliberate self-replicating prompt injection attack. Responsibly disclosed to Microsoft with 144 days to develop a fix, no mitigation yet covers the full attack class.
