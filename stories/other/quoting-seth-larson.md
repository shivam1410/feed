---
title: "Quoting Seth Larson"
category: "Other"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/23/seth-larson/#atom-everything"
authors: []
date: "2026-07-23T04:50:36+00:00"
score: 30
guid: "https://simonwillison.net/2026/Jul/23/seth-larson/#atom-everything"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

Python's official package index (PyPI) now prevents new file uploads to any release older than 14 days in age. This protective policy blocks attackers who compromise publishing credentials or continuous integration workflows from retroactively poisoning well-established package versions that millions of developers rely on globally. According to the PyPI blog, the measure is preemptive and defensive: no confirmed attacks exploiting this vulnerability have occurred, but the attack surface existed unknown to maintainers, implying attackers may not have discovered this possible exploit path. The policy guards against an existential supply-chain threat—compromised credentials could enable poisoned legacy package versions deployed across millions of production systems.
