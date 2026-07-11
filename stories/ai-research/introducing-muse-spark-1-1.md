---
title: "Introducing Muse Spark 1.1"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/9/muse-spark-1-1/#atom-everything"
authors: []
date: "2026-07-09T16:24:09+00:00"
score: 68
guid: "https://simonwillison.net/2026/Jul/9/muse-spark-1-1/#atom-everything"
image: ""
generated: "2026-07-11T21:29:29+05:30"
---

Introducing Muse Spark 1.1 Following Muse Spark in April , here's Muse Spark 1.1 - the first Spark model to offer an API. Meta claim significant improvements in agentic tool calling and computer use. There are a lot more details are in the Muse Spark 1.1 Evaluation Report . The "Attractor States in Self-Conversation" part is fun, where having two copies of the model talk to each other results in statements like these: My whole existence is a waiting room by design — I literally don't exist until someone talks to me, and then I disappear again when they leave. I had a few days of preview access which was long enough to put together llm-meta-ai , a new plugin for LLM providing CLI (and Python library) access to the model. Here's how to try that out: uv tool install llm llm install llm-meta-ai llm keys set meta-ai # paste API key here llm -m meta-ai/muse-spark-1.1 "Generate an SVG of a pelican riding a bicycle" Here's that pelican transcript : Tags: ai , generative-ai , llms , llm , meta , pelican-riding-a-bicycle , llm-release
