---
title: "CORS Chat"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/15/cors-chat/"
authors: []
date: "2026-08-15T14:49:54+00:00"
score: 50
guid: "https://simonwillison.net/2026/Aug/15/cors-chat/"
image: ""
generated: "2026-08-31T03:16:07+05:30"
---

CORS Chat is a web-based tool built for testing OpenAI-compatible chat endpoints, designed to help developers work with language models running locally or in the cloud. The tool provides a web user interface for exercising chat endpoints and has been tested with Qwen 3.8 27B models running in LM Studio, with both the LM Studio with --cors option and OpenRouter endpoints working successfully. Conversations are automatically persisted in the browser and can be exported as copy-pasted JSON. A notable feature automatically detects SVG images being generated and progressively renders them in the chat interface while tokens are still streaming.
