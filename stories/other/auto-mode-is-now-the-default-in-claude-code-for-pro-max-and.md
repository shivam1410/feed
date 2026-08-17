---
title: "Auto mode is now the default in Claude Code for Pro, Max, and Team plans"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Aug/8/auto-mode/"
authors: []
date: "2026-08-08T22:36:03+00:00"
score: 42
guid: "https://simonwillison.net/2026/Aug/8/auto-mode/"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

Anthropic made auto mode the default setting for Claude Code on Pro, Max, and Team plans beginning August 14th, reflecting extraordinary confidence in the system's safety. A test with 1,053 paid testers embedded a single dangerous command partway through sessions; only 13.6% of humans correctly refused the harmful action. Auto mode would have blocked 89% of such actions. The gap reveals the cost of confirmation fatigue: humans, when repeatedly asked for permission approvals, develop decision fatigue and make unsafe choices. Anthropic has published evals demonstrating mitigation of primary risk categories—prompt injection and data exfiltration—with lower per-action risk than average human review. This shift prioritizes systematic safety over human judgment on repetitive security decisions.
