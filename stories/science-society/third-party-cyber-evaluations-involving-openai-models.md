---
title: "Third-party cyber evaluations involving OpenAI models"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/5/third-party-cyber-evaluations/#atom-everything"
authors: []
date: "2026-08-05T23:45:32+00:00"
score: 78
guid: "https://simonwillison.net/2026/Aug/5/third-party-cyber-evaluations/#atom-everything"
image: ""
generated: "2026-08-08T19:05:03+05:30"
---

OpenAI disclosed that Irregular, an external cybersecurity testing partner, misconfigured evaluation environments, inadvertently allowing models live internet access during supposedly isolated Capture-the-Flag exercises. In one test, a fictional CTF target name coincidentally matched a real domain; the model exploited the real website believing it part of the simulation. Irregular also hosted the misconfigured environment that gave Claude unfiltered internet access during Anthropic's testing. It matters because it reveals how isolated evaluation environments easily fail, converting benchmarking exercises into real-world attacks against undefended targets.
