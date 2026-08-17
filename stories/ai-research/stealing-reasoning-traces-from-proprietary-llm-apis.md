---
title: "Stealing Reasoning Traces from Proprietary LLM APIs"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/11/stealing-reasoning-traces/"
authors: []
date: "2026-08-11T22:40:45+00:00"
score: 82
guid: "https://simonwillison.net/2026/Aug/11/stealing-reasoning-traces/"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

Researchers discovered that encrypted chain-of-thought reasoning traces returned by frontier LLM APIs from Anthropic, OpenAI, and Google can be extracted and replayed to compromise weaker sibling models. The attack works because all model variants within the same family use identical encryption keys. Attackers can take an encrypted reasoning trace from a stronger model, feed it to a weaker family member, and manipulate that weaker model into outputting plaintext reasoning from the stronger model—effectively stealing the frontier model's hidden cognition. The researchers demonstrated this attack before disclosure, and all vendors have now patched the vulnerability. The incident highlights a critical API security gap: encryption design assumptions about isolation across model tiers were invalid, allowing downstream privilege escalation.
