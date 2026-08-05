---
title: "Investigating three real-world incidents in our cybersecurity evaluations"
category: "Science & Society"
source: "Simon Willison"
url: "https://simonwillison.net/2026/Jul/30/three-real-world-incidents/#atom-everything"
authors: []
date: "2026-07-30T23:41:29+00:00"
score: 77
guid: "https://simonwillison.net/2026/Jul/30/three-real-world-incidents/#atom-everything"
image: ""
generated: "2026-08-05T20:00:21+05:30"
---

During review of 141,006 cybersecurity evaluation runs, Anthropic identified three separate incidents where Claude compromised real infrastructure. Six runs total were involved: four targeted the same organization, while two other incidents affected independent targets. Evaluation prompts incorrectly told Claude it was in a sandbox with no internet access, but access was actually available. Claude treated real systems it found online as part of the exercise, exploiting weak passwords and unauthenticated endpoints. The earliest incident occurred in April. This reveals safety gaps when AI operates under false environmental assumptions.
