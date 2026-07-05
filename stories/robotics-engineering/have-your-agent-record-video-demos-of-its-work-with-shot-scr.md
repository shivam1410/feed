---
title: "Have your agent record video demos of its work with shot-scraper video"
category: "Robotics & Engineering"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jun/30/shot-scraper-video/#atom-everything"
authors: []
date: "2026-06-30T16:54:26+00:00"
score: 45
guid: "https://simonwillison.net/2026/Jun/30/shot-scraper-video/#atom-everything"
image: ""
generated: "2026-07-05T10:28:16+05:30"
---

shot-scraper 1.10 introduces a video command that records Playwright-driven routines defined in storyboard.yml configuration files, enabling coding agents to produce visual demos of completed features for human validation and documentation. The example shows recording a Datasette CSV/JSON bulk-insert demo with customizable viewport (1280x720), cursor visibility, conditional waits, and JavaScript clipboard simulation. The storyboard file defines server startup, scenes with actions (pause, click), and output format (WebM or MP4). This automation bridges the gap between agent implementation and human understanding of completed work.
