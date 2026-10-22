---
title: "Redesigning source control at Anthropic"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/"
authors: []
date: "2026-10-13T23:00:06+00:00"
score: 40
guid: "https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Anthropic built its own source control system to replace Git. Code merges rose from about 2,500 a day in May 2026 to over 30,000 a day by September. The main branch history alone is almost 100 GB. The company runs about 25 million code checkouts per day for CI. Fetched naively, that would mean over 600 PB of git traffic daily. The system is called Scion, and its code review tool is called Antique. Anthropic credits Google's Piper and Meta's Sapling as prior art.
