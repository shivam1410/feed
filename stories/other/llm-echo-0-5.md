---
title: "llm-echo 0.5"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/18/llm-echo/"
authors: []
date: "2026-10-18T23:16:16+00:00"
score: ""
guid: "https://simonwillison.net/2026/Oct/18/llm-echo/"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Release: llm-echo 0.5 I'm working towards a new LLM release, and testing PRs caused me to revisit the llm-echo debug plugin. This plugin provides a "model" which doesn't involve an LLM at all - it just repeats back the prompts that have been fed to it. The new release now updates the simulated token usage counts to take tool calls, system prompts, and reasoning tokens into account. Example usage: uvx --with llm-echo llm -m echo 'hi there' -o thinking 1 --usage Outputs: First I consider the prompt, then I decide what to say. { "prompt": "hi there", "system": "", "attachments": [], "stream": true, "previous": [] } Token usage: 2 input, 24 output Tags: llm
