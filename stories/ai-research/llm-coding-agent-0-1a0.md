---
title: "llm-coding-agent 0.1a0"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything"
authors: []
date: "2026-07-02T19:33:12+00:00"
score: 50
guid: "https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything"
image: ""
generated: "2026-07-05T10:28:16+05:30"
---

llm-coding-agent 0.1a0 is a new Python library implementing a Claude Code-style coding agent built on the llm framework. Created using test-driven development with the spec written first via Claude Code, then built through commits with passing tests and updated documentation, the alpha is available on PyPI. The agent includes tools for reading, editing files, and executing commands. It exposes CLI recipes (--yolo, permission allowlists) and a Python API: CodingAgent(model="gpt-5.5", root="/path").run("Fix the failing test"). The implementation demonstrates practical patterns for building agent frameworks.
