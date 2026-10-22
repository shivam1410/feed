---
title: "Minimax-Optimal Predictive Flow Matching under Distribution Drift"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28898"
authors: ["Aadithya Srikanth, Vaneet Aggarwal"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.28898v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Flow matching learns a generative velocity field by regression, but under distribution drift a field must be deployed before the current data arrive. We study this predictive problem for a fixed, possibly nonconvex, neural class, with dynamic regret against the best represented field of each round. We propose DyProd-FM, which refits flow matching on dyadic historical prefixes and selects among the fits with a sleeping Prod master. Without knowing any drift budget, it attains regret $\widetilde{O}(\min\{N_\omega+1,1+\sqrt{T\Omega}\})$ in the relative velocity risk variation $\Omega$ and $\widetilde{O}(\min\{N_\mu+1,1+T^{1/3}V_\mu^{2/3}\})$ in the target-law variation $V_\mu=\sum_t W_2(\mu_{t+1},\mu_t)$, up to approximation and fitting costs. Matching lower bounds for fixed classes show that both rates are optimal in $T$ and in the budgets up to logarithmic factors. Prior optimal dynamic-regret guarantees rely on a convex decision set with strongly convex or exp-concave losses, whereas our class may be nonconvex and no curvature in its parameters is assumed. The target-law rate rests on a second-order link between the two variations, which the base noise of flow matching provides.
