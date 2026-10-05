---
title: "Parameter-Free Interval-Dynamic Regret under Heavy-Tailed Noise"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02258"
authors: ["Vaneet Aggarwal"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.02258v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

We study online convex optimization with one unbiased stochastic subgradient per round and an unknown finite conditional $p$th noise moment, $1<p\le2$. For every fixed interval $I$ of length $n$ and comparator path with $\Lambda_I=1+P_I/D$, one learner achieves \[ E[Regret_I(u)]\le\min(GDn, C[GD\sqrt{n(\Lambda_I+\log^2(2T))} +\sigma Dn^{1/p}(\Lambda_I+\log^2(2T))^{(p-1)/p}]). \] The learner uses none of $G,\sigma,p,I,P_I$, and the constant is universal. Interval adaptation adds to comparator complexity, preserving the distinct mean-gradient and noise exponents. The analysis controls calibration in expectation and limits the cost of observation-scale changes. Its general theorem compares to distributions over predictably available experts with relative-entropy dependence on a nonuniform prior. A common prior favors long windows and long restart lengths. With the statistics supplied, the interval cost becomes $1+\log(T/n)$, including the optimal full-horizon static rate. A change-of-measure lower bound identifies the noise power of this logarithm for learners retaining a full-horizon optimal guarantee, under explicit conditions. Static comparisons and deterministic partitions follow from the same decisions.
