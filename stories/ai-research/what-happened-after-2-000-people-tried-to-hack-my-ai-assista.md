---
title: "What happened after 2,000 people tried to hack my AI assistant"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything"
authors: []
date: "2026-06-26T18:33:14+00:00"
score: 65
guid: "https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything"
image: ""
generated: "2026-07-05T10:28:16+05:30"
---

Fernando Irarrázaval tested Claude Opus 4.6 against 6,000 prompt injection attempts via hackmyclaw.com, achieving zero successful secret extractions despite $500 in token costs and a Google account suspension from excessive inbound emails. The model included explicit anti-injection rules prohibiting credential exposure and file modification. Results suggest frontier models now effectively resist sophisticated prompt injection attacks. However, experts recommend against production deployments relying solely on this defense, as 6,000 failed attempts provide no guarantee against more sophisticated approaches.
