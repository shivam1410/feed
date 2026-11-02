---
title: "eMudhra Intermediate CA Compromise"
category: "Cyber Security"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/20/emudhra-certificates/"
authors: []
date: "2026-10-20T23:50:25+00:00"
score: 70
guid: "https://simonwillison.net/2026/Oct/20/emudhra-certificates/"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Eight eMudhra intermediate certificate authorities have had their private keys compromised. Those certificates chain to roots trusted by Mozilla, Microsoft, Apple, and Chrome. Any software that bundles trusted certificates needs an update. Linux distributions need to update their ca-certificates packages. In the Python world, uv 0.13.4, pip 26.2.2, and certifi 2026.10.19 ship upgraded certificate lists.
