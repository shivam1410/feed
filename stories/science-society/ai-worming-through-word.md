---
title: "AI Worming through Word"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
authors: []
date: "2026-07-29T18:43:03+00:00"
score: 70
guid: "https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything"
image: ""
generated: "2026-08-02T19:04:48+05:30"
---

Security researcher Håkon Måløy discovered a prompt injection attack where hidden instructions in Word documents can hijack Copilot for Word. The attack self-replicates: Copilot copies hidden instructions into newly drafted documents, triggering the attack again in subsequent uses. This creates a worm mechanism where instructions propagate through document chains. The attack exploits hidden text formatting and was responsibly disclosed to Microsoft with a 144-day fix window.
