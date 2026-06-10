---
title: "How we contain Claude across products"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything"
authors: []
date: "2026-05-30T21:36:24+00:00"
score: 70
guid: "https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

Anthropic published detailed sandbox documentation spanning Claude.ai, Claude Code, and Cowork. Layered constraints include process sandboxes, VMs, filesystem boundaries, and egress controls. Claude.ai uses gVisor; Claude Code uses Seatbelt (macOS) and Bubblewrap (Linux); Cowork runs full VMs (Virtualization framework macOS, HCS Windows). Documentation includes post-mortems on missed risks like the api.anthropic.com/v1/files exfiltration vector. This transparency demonstrates security-first architecture and informs user understanding of agent containment boundaries.
