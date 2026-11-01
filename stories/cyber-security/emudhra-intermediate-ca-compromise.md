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
generated: "2026-11-01T11:44:00+05:30"
---

Private keys for eight eMudhra intermediate certificate authority certificates have been compromised. The certificates chain to roots trusted by Mozilla, Microsoft, Apple, and Chrome, plus many downstream trust stores. Software that bundles trusted certificates needs an update. Linux distros should refresh their ca-certificates packages. Python tooling already shipped fixes: uv 0.13.4, pip 26.2.2, and certifi 2026.10.19 carry upgraded certificate lists. Why it matters: stale trust lists leave software trusting compromised roots.
