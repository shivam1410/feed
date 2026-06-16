---
title: "datasette-agent 0.2a0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/10/datasette-agent/#atom-everything"
authors: []
date: "2026-06-10T23:57:27+00:00"
score: 35
guid: "https://simonwillison.net/2026/Jun/10/datasette-agent/#atom-everything"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

Datasette-agent 0.2a0 adds interactive mid-execution questioning and a new save_query tool. Tools declaring a context parameter receive a ToolContext object enabling context.ask_user() calls for yes/no, multiple-choice, or free-text questions. Questions suspend execution, render as forms in the chat UI, and persist to the database so conversations survive server restarts. Once answered, tools re-execute with stored answers replayed. The new save_query tool lets agents save SQL as Datasette stored queries—always requiring human approval before storage. These features enable more collaborative human-in-the-loop agent workflows.
