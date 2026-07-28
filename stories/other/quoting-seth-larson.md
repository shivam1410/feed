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
generated: "2026-07-28T19:07:22+05:30"
---

PyPI now rejects file uploads to releases older than 14 days, a policy designed to prevent poisoning of long-stable releases if publishing tokens or project workflows are compromised. According to PyPI maintainer Seth Larson, this attack vector has not yet been exploited, but the absence of technical barriers meant it was only a matter of time. The policy represents proactive supply-chain security. By restricting updates to aged releases, PyPI reduces the window during which attackers could successfully compromise widely-trusted package versions, protecting the Python ecosystem from downstream damage.
