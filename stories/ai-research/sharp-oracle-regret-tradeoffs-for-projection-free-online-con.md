---
title: "Sharp Oracle-Regret Tradeoffs for Projection-Free Online Convex Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00254"
authors: ["Vaneet Aggarwal"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.00254v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

We characterize the regret attainable in online convex optimization when access to the feasible set is limited to an exact linear optimization oracle. The learner is given an inscribed ball and a diameter bound and must remain feasible on every consistent instance. For convex $G$-Lipschitz losses, diameter at most $D$, a total allowance of $Q$ oracle calls, and a strict limit of $B$ calls per round, the dimension-free minimax expected regret is $\Theta(GD\max\{\sqrt T,T/(1+\min\{Q,BT\})^{1/4}\})$. The lower bound applies to arbitrary randomized learners. Universal feasibility first forces each action into the hull of the supplied ball and the preceding oracle replies. A fixed-body construction then couples fresh phase directions to a shared simplex, making useful replies costly repeatedly even though all losses have a common minimizer. A counted approximate-gradient method with interleaved blocks attains the matching rate. Total-budget and strict per-round guarantees follow as special cases, including the $T^{3/4}$ rate with one call per round and the quadratic total budget needed for $\sqrt T$ regret. For prescribed smoothness $\beta$, an analytic construction yields a curvature-dependent lower bound and identifies the threshold above which the general characterization remains sharp.
