---
title: "From Prediction to Incrementality: Causal Optimization for Large-Scale Targeting and Recommendation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10182"
authors: ["Changshuai Wei, John Bencina, Phuc Nguyen, Andre Assuncao Silva T Ribeiro, Benjamin Zelditch"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.10182v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

arXiv:2608.10182v1 Announce Type: new Abstract: Large-scale targeting and recommendation systems are typically built around predictive scores fed into heuristic or local allocation. When the business goal is incremental impact, as in marketing campaigns, incentives, and notifications, this paradigm systematically misallocates resources toward users who would have acted anyway. We present a decision-centric framework that instead optimizes causal effects under global constraints, aligning three components under a single objective: a causal neural network with a Transformer backbone for individual treatment-effect estimation, a Bayesian neural-bandit layer for uncertainty-aware exploration, and a dual-based large-scale linear-programming layer for constrained allocation. The framework also supports sequential context and multi-outcome, attribute-conditioned scoring through a Transformer encoder and outcome embeddings. We evaluate it with offline simulations on a public bandit dataset, targeted architectural ablations, and an online A/B test on LinkedIn Feed marketing traffic. We also distill production lessons on causal training-data construction and cost and delivery control, which were critical to successful deployment. The end-to-end treatment policy delivered a statistically significant $+7.20\%$ lift in the primary long-term-value metric, demonstrating the feasibility of production-scale causal optimization under business constraints.
