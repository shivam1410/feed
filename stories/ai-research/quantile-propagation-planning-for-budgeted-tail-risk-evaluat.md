---
title: "Quantile Propagation Planning for Budgeted Tail-Risk Evaluation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.41351"
authors: ["Weijia Han, Zhi Huang, Lisha Qu, Yuanyuan Tan, Jiayue Meng"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 18
guid: "oai:arXiv.org:2610.41351v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

Risk-aware planning must identify rare, costly outcomes using only a limited number of model evaluations. Monte Carlo rollouts spend this budget on noisy tail estimates, while planning from the mean can miss the tail entirely. We introduce quantile propagation planning (QPP), which propagates a small, fixed set of disturbance quantiles through the dynamics and integrates the resulting cost curve to evaluate both mean and tail risk. The method is exact at the propagated levels, converges as the quantile grid is refined, and admits a one-sided conservatism guarantee under stated structural conditions. In controlled overload and inventory tasks, QPP reduces realized tail cost and constraint violations relative to mean-rollout planning. On overload, it remains competitive with sampled evaluators that use substantially more trajectories. These results position QPP as a transparent, budget-controlled approach to tail-risk evaluation.
