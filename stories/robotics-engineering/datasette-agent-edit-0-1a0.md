---
title: "datasette-agent-edit 0.1a0"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything"
authors: []
date: "2026-06-07T23:56:38+00:00"
score: 25
guid: "https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

Release: datasette-agent-edit 0.1a0 I'm planning several plugins for Datasette Agent which can make edits to existing pieces of text - things like collaborative Markdown editing, updating large SQL queries, and editing SVG files. Agentic editing of text is a little tricky to get right. My favorite published design for this is for the Claude text editor , which implements the following tools: view - view sections of a file, with line numbers added to every line. str_replace - find an exact old_str and replace it with new_str - fail if the original string is not unique insert - insert the specified text after the specified line number Rather than recreate these patterns for every plugin that needs them I decided to create this base plugin, datasette-agent-edit , which implements the core tools in a way that allows them to be adapted for other plugins. Tags: ai , datasette , generative-ai , llms , llm-tool-use , datasette-agent
