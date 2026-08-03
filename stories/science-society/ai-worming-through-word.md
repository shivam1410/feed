---
title: "AI Worming through Word"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
authors: []
date: "2026-07-29T18:43:03+00:00"
score: 85
guid: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

Håkon Måløy discovered a new prompt injection attack class that self-replicates through Word documents. Hidden instructions in source material trigger Copilot to copy those instructions into generated documents, creating self-propagating worms. Subsequent Copilot workflows re-trigger the instructions, spreading them further without requiring the attacker's original document. Responsibly disclosed to Microsoft with 144 days for mitigation, but no defense covering the full attack class exists yet.
