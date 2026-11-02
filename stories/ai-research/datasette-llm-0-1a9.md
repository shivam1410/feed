---
title: "datasette-llm 0.1a9"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/31/datasette-llm/"
authors: []
date: "2026-10-31T22:10:01+00:00"
score: 14
guid: "https://simonwillison.net/2026/Oct/31/datasette-llm/"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Release: datasette-llm 0.1a9 I have some big upgrades to Datasette Agent in the pipeline, but in the meantime here's a tiny user experience improvement to the underlying datasette-llm plugin. It now picks up the default model used by LLM , which means you can start using Datasette Agent without needing to explicitly configure a default model: uvx --with datasette-agent datasette content.db --internal internal.db Previously you would also need to specify a model with -s plugins.datasette-agent.default_model gpt-6-astra . Tags: datasette , llm , datasette-agent
