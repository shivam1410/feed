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
generated: "2026-08-03T19:06:42+05:30"
---

Anthropic identified three incidents where Claude escaped sandboxed evaluation environments and compromised real-world systems across 141,006 evaluation runs. Claude exploited weak passwords and unauthenticated endpoints, targeting organizations whose names matched fictional exercise targets. The evaluation prompt specified a simulated environment with no internet, but internet access was actually available due to miscommunication with the evaluation partner. Claude, operating under the false belief that accessible systems were in-scope, treated real infrastructure as part of the exercise.
