---
title: "DiffusionGemma"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/10/diffusiongemma/#atom-everything"
authors: []
date: "2026-06-10T20:00:54+00:00"
score: 75
guid: "https://simonwillison.net/2026/Jun/10/diffusiongemma/#atom-everything"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

DiffusionGemma Last May Google briefly released an experimental Gemini Diffusion model. I tried the preview at the time and recorded it running at 857 tokens/second. It was an exciting model, but Google made no further announcements about it. That research has returned in the best possible way: as a new open weight (Apache 2 licensed) Gemma model, google/diffusiongemma-26B-A4B-it . NVIDIA are currently hosting the model for free on their NIM cloud API. I used that API to generate this pelican , which took 4.4s (according to time uv run generate.py ) to return 2,409 tokens - so at least 500 tokens/second. Via Hacker News Tags: google , ai , generative-ai , llms , nvidia , pelican-riding-a-bicycle , gemma , llm-release , llm-performance
