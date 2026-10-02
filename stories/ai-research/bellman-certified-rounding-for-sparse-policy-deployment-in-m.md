---
title: "Bellman-Certified Rounding for Sparse Policy Deployment in MDPs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00325"
authors: ["Zhaojun Peng"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.00325v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Continuous policy optimization may spread an update across many states, even when deployment permits only a few complete state-level changes. We study how much discounted return can be retained when continuous row mixtures are rounded to sparse binary policies in finite MDPs. Policy-dependent visitation couples the row edits, while long horizons make global curvature bounds conservative. From $2d+2$ Bellman solves, we derive reusable envelopes that support uniform and candidate-specific guarantees before rounding. A rank-two rational representation of each exchange further permits weighted curvature integration along the realized trajectory. We prove that linear dimension dependence is unavoidable when the budget scales, and that exact global curvature thresholding is hard. Candidate-specific bounds raise pre-rounding certification coverage from $48.2\%$ to $74.1\%$ on the structured suite. At $\gamma=0.95$, local integration lowers the median bound-to-loss ratio from $402.3$ to $2.08$ on coupled instances.
