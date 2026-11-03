---
title: "eMudhra Intermediate CA Compromise"
category: "Cyber Security"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/20/emudhra-certificates/"
authors: []
date: "2026-10-20T23:50:25+00:00"
score: 80
guid: "https://simonwillison.net/2026/Oct/20/emudhra-certificates/"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Private keys for eight eMudhra intermediate certificate authorities have been compromised. Those certificates chain to roots trusted by Mozilla, Microsoft, Apple and Chrome, and by many downstream trust stores. Any software that bundles trusted certificates needs an update. Python tools uv 0.13.4, pip 26.2.2 and certifi 2026.10.19 now ship upgraded certificate lists. Linux distributions need to update their ca-certificates packages.
