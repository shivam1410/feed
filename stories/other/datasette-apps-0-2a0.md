---
title: "datasette-apps 0.2a0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything"
authors: []
date: "2026-08-01T21:23:56+00:00"
score: 40
guid: "https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

datasette-apps 0.2a0 introduces two tools enabling Datasette Agent to autonomously test and edit apps. app_debug() renders the app invisibly in an iframe (opacity: 0, pointer-events: none) and executes agent-provided JavaScript in the sandbox to smoke-test and measure element dimensions. app_list() gives the agent access to editable apps. Both tools use context.browser_task() from datasette-agent 0.4a0, improving feedback loops for AI-driven app creation and debugging by enabling invisible testing without visual display.
