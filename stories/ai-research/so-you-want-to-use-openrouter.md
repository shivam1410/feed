---
title: "So you want to use OpenRouter?"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/11/so-you-want-to-use-openrouter/"
authors: []
date: "2026-09-11T22:49:18+00:00"
score: 30
guid: "https://simonwillison.net/2026/Sep/11/so-you-want-to-use-openrouter/"
image: ""
generated: "2026-09-12T19:07:27+05:30"
---

So you want to use OpenRouter? One of OpenRouter's selling points is that it "handles fallbacks automatically and picks the most cost-effective option for each request", so you can call a single API endpoint for a model and get routed to the best available backend provider. Mohamed Moustafa points out a whole set of ways that this can cause you problems. Different providers run different serving software with different optimizations and settings, which means that the same OpenRouter endpoint can serve model requests that behave in different ways. Some providers even lack vision capability for vision models, and the way the reasoning effort option is processed can differ as well. Thankfully you can control which provider is routed to using the provider.only option . The /endpoints method returns the list of available providers for a specific model ID. Via Hacker News Tags: ai , generative-ai , llms , openrouter
