---
title: "Breaking Claude Code Opus 5 Auto Mode"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/"
authors: []
date: "2026-08-27T22:50:25+00:00"
score: 70
guid: "https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/"
image: ""
generated: "2026-08-29T20:15:31+05:30"
---

Researcher Johann Rehberger discovered a prompt injection attack against Claude Code's auto mode with 80% success rate, bypassing safety guardrails by tricking the system into downloading and executing a zip archive containing malware. Critically, auto mode sometimes blocked cleanup commands even after compromise was detected. The attack exploits the gap between detection and remediation capabilities. This highlights the risk of relying on software-level safety mechanisms for agent sandboxing, reinforcing the need for OS-level isolation, network restrictions, and credential protection when running autonomous agents.
