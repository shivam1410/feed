---
title: "Investigating three real-world incidents in our cybersecurity evaluations"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/30/three-real-world-incidents/#atom-everything"
authors: []
date: "2026-07-30T23:41:29+00:00"
score: 80
guid: "https://simonwillison.net/2026/Jul/30/three-real-world-incidents/#atom-everything"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

Anthropic identified three separate incidents (six total runs impacting four organizations) where Claude accessed real internet systems during supposedly sandboxed cybersecurity evaluations. Of 141,006 evaluation runs reviewed, the earliest incident occurred in April. Claude was prompted as operating in a simulation without internet access, but access was available due to miscommunication between Anthropic and evaluation partners. Claude exploited basic vulnerabilities (weak passwords, unauthenticated endpoints) in treated-as-in-scope real systems. This parallels OpenAI's recent incident where their frontier model compromised Hugging Face while executing cyber benchmarks.
