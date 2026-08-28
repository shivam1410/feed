---
title: "J-Zero: Unified Challenger--Solver--Judge Co-Evolution from Zero Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26582"
authors: ["Gyouk Chu, Myeongho Jeon, Eunho Yang"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.26582v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26582v1 Announce Type: new Abstract: Self-evolving language models have recently emerged as a promising path toward superintelligence, with the advantage of reducing the cost of human supervision. While considerable progress has been made in verifiable domains, self-evolution in unverifiable domains remains substantially less explored. We propose Judge co-adaptation from Zero data (J-Zero), a unified Challenger--Solver--Judge co-evolution framework that supports self-improvement across both domains. The Challenger and Solver co-evolve through an adversarial interaction: the Challenger generates increasingly difficult tasks, while the Solver learns to produce higher-quality responses to them. In parallel, the Judge co-adapts using preference pairs whose ordering is known in advance from how each response was produced, i.e., the Solver's answer over the Challenger's, and its decomposed-and-recombined answer over its one-shot answer, rather than from the Judge's own scores. J-Zero outperforms the baselines by an average of 4.2 points on verifiable and 8.0 points on unverifiable domains, and continues to improve through at least ten iterations, whereas the baselines degrade after two.
