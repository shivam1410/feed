---
title: "Measure Learning at Steady State: A BIRD-SQL Formula 1 Case Study"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31640"
authors: ["Manoj Bajaj"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.31640v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Continual Learning Bench scores learning as short-horizon gain versus a reset baseline and finds naive full-context ICL strongest among the memories it tested. We treat ICL as one learning system and score it on a longer shared-world schedule. Steady-state learning is the gap versus baseline on a pre-set late window (last 40 of 174 BIRD-SQL formula-1 questions). We split the score into exploration efficiency (SQL probes), task reward (hits), and delivery cost (API dollars and context size). On gpt-5.6-luna, late probes fall from 4.6-5.6 to 0.95 while hits rise only modestly and ICL context grows to about 95k tokens with cost roughly doubling. Short-horizon gain understates the late probe saving and misses the cost inversion, so we find that unbounded ICL is a poor candidate for the learning mechanism.
