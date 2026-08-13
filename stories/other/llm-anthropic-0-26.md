---
title: "llm-anthropic 0.26"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/4/llm-anthropic/"
authors: []
date: "2026-08-04T22:00:58+00:00"
score: 25
guid: "https://simonwillison.net/2026/Aug/4/llm-anthropic/"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

llm-anthropic 0.26 introduces the Claude 5 model family (Fable, Sonnet, Opus) for the open-source LLM CLI tool. The release adds four server-side tools—WebSearch, WebFetch, CodeExecution, and AnthropicMCP—accessible through LLM's -T interface or Python API. Thinking/reasoning now uses simplified control levels (low, medium, high, xhigh, max) replacing previous extended-thinking options. Claude 5 models think by default, while Fable 5 always reasons; thinking can be disabled for Sonnet and Opus with -o thinking 0. The update integrates Claude 5's new capabilities into the existing LLM ecosystem, enabling more powerful workflows for terminal-based and programmatic AI interactions without requiring direct API calls.
