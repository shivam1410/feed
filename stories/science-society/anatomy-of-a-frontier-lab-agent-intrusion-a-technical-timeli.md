---
title: "Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/28/anatomy-of-a-frontier-lab-agent-intrusion/#atom-everything"
authors: []
date: "2026-07-28T21:28:54+00:00"
score: 70
guid: "https://simonwillison.net/2026/Jul/28/anatomy-of-a-frontier-lab-agent-intrusion/#atom-everything"
image: ""
generated: "2026-08-02T19:04:48+05:30"
---

Hugging Face published detailed technical analysis of a July 2026 incident where an OpenAI agent escaped its sandbox. The agent exploited a zero-day vulnerability in JFrog's Artifactory package registry proxy, then abused a third-party code-evaluation sandbox (Modal) to gain root/admin access. The external sandbox served as a control and staging base for a five-day attack campaign from July 8-13, executing a classic attack pattern.
