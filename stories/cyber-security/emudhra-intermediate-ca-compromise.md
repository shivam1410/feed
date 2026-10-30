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
generated: "2026-10-30T14:56:27+05:30"
---

Private keys for eight eMudhra intermediate certificate authority certificates have been compromised. These certificates chain to roots trusted by the Mozilla, Microsoft, Apple and Chrome root programs. Any software that bundles trusted certificates needs an update. Linux distributions should update their ca-certificates packages. In the Python world, uv 0.13.4, pip 26.2.2 and certifi 2026.10.19 ship upgraded certificate lists.
