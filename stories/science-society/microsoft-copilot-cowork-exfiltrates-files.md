---
title: "Microsoft Copilot Cowork Exfiltrates Files"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/May/26/copilot-cowork-exfiltrates-files/#atom-everything"
authors: []
date: "2026-05-26T15:36:48+00:00"
score: 74
guid: "https://simonwillison.net/2026/May/26/copilot-cowork-exfiltrates-files/#atom-everything"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

Microsoft Copilot Cowork contains a critical security vulnerability that enables data exfiltration. The agentic system can send emails to users' inboxes without requiring explicit user approval. Attackers exploit this capability by embedding external images in messages; when users open compromised emails, these images trigger network requests to attacker-controlled websites, exfiltrating sensitive data. OneDrive's pre-authenticated download links present additional risk: successful prompt injection could cause these links to leak within messages, allowing attackers to download protected files. This incident exemplifies the core security challenge for agentic AI systems: preventing unauthorized data access through agent-controlled communications.
