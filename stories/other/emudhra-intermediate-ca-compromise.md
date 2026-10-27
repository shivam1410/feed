---
title: "eMudhra Intermediate CA Compromise"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Oct/20/emudhra-certificates/"
authors: []
date: "2026-10-20T23:50:25+00:00"
score: ""
guid: "https://simonwillison.net/2026/Oct/20/emudhra-certificates/"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

eMudhra Intermediate CA Compromise This is very, very bad news: The private keys of eight eMudhra intermediate CA certificates have been compromised. They chain to roots trusted by the Mozilla, Microsoft, Apple and Chrome root programs and by many downstream trust stores. Any software that bundles a list of trusted certificates needs to be updated. This site is tracking software updates via this GitHub repository - Linux distros need to update their ca-certificates packages. In Python world uv 0.13.4 and pip 26.2.2 and certifi 2026.10.19 have been released with upgraded certificate lists. There's a very informative thread about this on the official Python forum. Tags: encryption , https , pip , python , security , uv
