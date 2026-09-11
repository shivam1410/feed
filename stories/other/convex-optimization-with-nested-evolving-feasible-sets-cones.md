---
title: "Convex Optimization with Nested Evolving Feasible Sets (CONES) under Time-Varying Loss Functions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11207"
authors: ["Rahul Vaze"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11207v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11207v1 Announce Type: new Abstract: Convex Optimization with Nested Evolving Feasible Sets (CONES)} was introduced in \cite{CONESVaze} where the objective function \(f\) remains fixed but the feasible region evolves over time as a nested sequence \(S_1 \supseteq S_2 \supseteq \cdots \supseteq S_T\). The goal of an online algorithm is to simultaneously minimize the regret with respect to hindsight static optimal benchmark and the total movement cost $M_\cA(T)$ while ensuring feasibility at all times. CONES is an optimization-oriented generalization of the well-known \emph{nested convex body chasing} (NCBC). In this paper, we extend CONES to allow for loss functions $f_t'$s to also change over time. When all loss functions are convex, we show that the projected proximal algorithm achieves $O(T^{1-\beta}), O(T^\beta)$ simultaneous regret and movement cost, respectively, for any $\beta \in [0,1)$, over a time horizon of $T$. We also show that any {\it weakly adaptive} online algorithm with $O(T^\beta)$ regret has a movement cost of $\Omega\left(T^{\frac{1-\beta}{2}}\right)$ for any $\beta \in [0,1)$. When all loss functions are strongly convex, we show that the projected proximal algorithm simultaneously achieves $O(1)$ regret and a movement cost of $O(\log T)$. To complement this, we show that any online algorithm with sublinear {\it anytime} regret has a movement cost of $\Omega\left(\log T\right)$.
