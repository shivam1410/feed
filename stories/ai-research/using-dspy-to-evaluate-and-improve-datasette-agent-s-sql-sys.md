---
title: "Using DSPy to evaluate and improve Datasette Agent's SQL system prompts"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything"
authors: []
date: "2026-07-02T18:25:00+00:00"
score: 65
guid: "https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything"
image: ""
generated: "2026-07-05T10:28:16+05:30"
---

Researcher used DSPy to evaluate and improve system prompts for Datasette Agent's read-only SQL query feature, testing with GPT 4.1 mini and nano. Analysis identified that schema listings should include column names, not just table names. The original prompt advised 'don't call describe_table if you already have the information,' but this caused the agent to guess column names and enter error-retry loops. Including column names upfront or softening that advice reduces guessing. This demonstrates how systematic evaluation surfaces gaps in prompt design that can be specifically remedied.
