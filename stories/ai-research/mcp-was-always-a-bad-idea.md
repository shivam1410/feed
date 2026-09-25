---
title: "MCP was always a bad idea?"
category: "AI Research"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Sep/20/hn-49779718/"
authors: []
date: "2026-09-20T20:24:41+00:00"
score: 52
guid: "https://simonwillison.net/2026/Sep/20/hn-49779718/"
image: ""
generated: "2026-09-25T23:24:50+05:30"
---

My comment on MCP was always a bad idea? — Hacker News. This article entirely misses the value that MCP brings today. Sure, there's almost no reason to use MCPs if you are running a full-blown terminal agent (Claude Code, Codex, Meta Muse, OpenClaw etc) with unfettered internet access - just let it call APIs directly. If you want to operate something that's less YOLO than that, you'll find yourself wanting: Control over exactly which external services it can access A way to handle authentication that doesn't allow the agent to directly access API keys A sensible UI to allow users to connect and authenticate further services Strong audit logging for what's going on MCP makes all of that so much easier to provide. Thinking MCP is obsolete because full coding agents don't need it misses out on all of the other things we might want to build. Tags: hacker-news , model-context-protocol
