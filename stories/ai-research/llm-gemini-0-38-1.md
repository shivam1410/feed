---
title: "llm-gemini 0.38.1"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Nov/20/llm-gemini/"
authors: []
date: "2026-11-20T03:01:57+00:00"
score: 20
guid: "https://simonwillison.net/2026/Nov/20/llm-gemini/"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Release: llm-gemini 0.38.1 Gemini 4 Carbon only supports low , medium and high reasoning levels - but Gemini 4 Hydrogen and Gemini 4 Neon both have an extra xhigh level. I missed that when I added those models to the llm-gemini plugin, which is now fixed in this dot release. The xhigh setting for Hydrogen makes a significant difference. I updated my Gemini 4 comparison grid - note how Hydrogen at high used 5,311 output tokens and cost 3.99 cents, but the same model at xhigh used 31,477 output tokens, cost 23.61 cents, and produced a pelican that's competitive with Gemini 4 Neon: Tags: gemini , llm , llm-reasoning , pelican-riding-a-bicycle , ai , llms , google , generative-ai
