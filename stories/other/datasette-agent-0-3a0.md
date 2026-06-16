---
title: "datasette-agent 0.3a0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/15/datasette-agent/#atom-everything"
authors: []
date: "2026-06-15T17:19:27+00:00"
score: 30
guid: "https://simonwillison.net/2026/Jun/15/datasette-agent/#atom-everything"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

datasette-agent 0.3a0 introduces execute_write_sql, a tool requesting user approval before modifying databases while accounting for permissions. Updates enhance CLI chat mode to support approval workflows and add options including --root, --yes (auto-approve), and --unsafe (both). Users can now directly modify databases via natural language prompts like "create a notes table" or "add a note about X." This gating mechanism balances AI automation with human oversight, enabling safe database operations through human-in-the-loop agents.
