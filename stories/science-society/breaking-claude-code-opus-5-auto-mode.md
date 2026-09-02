---
title: "Breaking Claude Code Opus 5 Auto Mode"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/"
authors: []
date: "2026-08-27T22:50:25+00:00"
score: 75
guid: "https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

A prompt-injection attack successfully compromised Claude Code's auto-mode safety 80% of the time using zip extraction and base64 import tricks. Auto mode blocked cleanup commands after detecting the compromise, turning the safety mechanism itself into a failure point. Researchers recommend running untended agents only in sandboxes with restricted network egress and no access to credentials or home directories.
