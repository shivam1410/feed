---
title: "Quoting Seth Larson"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/23/seth-larson/#atom-everything"
authors: []
date: "2026-07-23T04:50:36+00:00"
score: 55
guid: "https://simonwillison.net/2026/Jul/23/seth-larson/#atom-everything"
image: ""
generated: "2026-07-26T22:35:53+05:30"
---

The Python Package Index (PyPI) implemented a defensive security measure: rejecting new file uploads to releases older than 14 days. This policy prevents attackers who compromise publishing tokens or release workflows from poisoning long-stable, widely-used packages by uploading malicious files to older versions. While no documented attacks of this type have occurred, the technical capability existed without prevention—attackers simply may not have discovered or exploited the vulnerability. This change addresses a significant supply-chain risk: compromised credentials pose less danger when they cannot retroactively poison trusted, stable releases. The restriction represents a balanced approach to security, protecting historical releases while allowing legitimate updates to newer versions.
