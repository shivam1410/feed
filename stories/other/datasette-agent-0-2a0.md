---
title: "datasette-agent 0.2a0"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/10/datasette-agent/#atom-everything"
authors: []
date: "2026-06-10T23:57:27+00:00"
score: 20
guid: "https://simonwillison.net/2026/Jun/10/datasette-agent/#atom-everything"
image: ""
generated: "2026-06-13T19:05:08+05:30"
---

datasette-agent 0.2a0 introduces interactive tool capabilities and SQL saving features. Tools can now ask users yes/no, multiple-choice, or free-text questions mid-execution through a ToolContext parameter. Unanswered questions suspend the agent turn, rendering as persistent forms in the chat UI that survive server restarts. Upon answering, tools re-execute with stored answers replayed, ensuring side effects occur only after approval. A new built-in save_query tool allows agents to propose SQL saved as Datasette stored queries, requiring explicit human approval before storage. This enables safer agent-human collaboration with approval gates for dangerous operations.
