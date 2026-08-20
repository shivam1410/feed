---
title: "CORS Chat"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/15/cors-chat/"
authors: []
date: "2026-08-15T14:49:54+00:00"
score: ""
guid: "https://simonwillison.net/2026/Aug/15/cors-chat/"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

Tool: CORS Chat I built this today ( with GPT-5.6-Sol xhigh ) to help test Qwen 3.8 27B running in LM Studio on both my M5 MacBook Pro and an NVIDIA DGX Spark. It provides a web UI for exercising an OpenAI-Responses-compatible chat endpoint. I've tried it against LM Studio with the --cors option and OpenRouter, and both work fine. Conversations are persisted in the browser and can be exported as copy-pasted JSON. One fun detail is that it notices SVG images that are being generated and progressively renders them in the chat while the tokens are still streaming in. Tags: svg , ai , generative-ai , llms , cors , openrouter , lm-studio
