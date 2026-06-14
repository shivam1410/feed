---
title: "Anthropic Walks Back Policy That Could Have ‘Sabotaged’ AI Researchers Using Claude"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/#atom-everything"
authors: []
date: "2026-06-11T03:45:49+00:00"
score: 75
guid: "https://simonwillison.net/2026/Jun/11/anthropic-walks-back-policy/#atom-everything"
image: ""
generated: "2026-06-14T20:51:07+05:30"
---

Anthropic reversed its controversial policy regarding safety safeguards on Fable 5 designed for frontier LLM development research. Previously, the model would identify and internally limit requests targeting frontier LLM development without any visible notification to users, a practice the company now acknowledges was the wrong tradeoff. Under the revised approach, flagged requests for frontier LLM development will visibly fall back to Opus 4.8 with explicit user notification, and users will see this behavior every time it occurs. On the API, refusals will include stated reasons for the limitation. Anthropic explained it originally used invisible safeguards to deploy quickly while minimizing false positives, but acknowledged that transparent safeguards are more appropriate for research.
