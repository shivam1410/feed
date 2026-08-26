---
title: "From Relaxed Indexability to Exact Indexability: A $t$-Step Approach for Partially Observable Restless Bandits"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24167"
authors: ["Qizhen Jia, Keqin Liu"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.24167v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24167v1 Announce Type: new Abstract: Whittle index policies offer a scalable method for restless multi-armed bandits, but under partial observability even determining the indifference subsidy at a single belief requires solving an infinite-horizon belief-state problem with no closed-form value function. Liu [10] addresses this difficulty by linearizing the unknown decision boundary, leading to a linear system and a closed-form approximate Whittle index. However, the resulting threshold uses only a one-step active--passive comparison and does not account for longer-horizon continuation values. We extend this framework to a \emph{$t$-step lookahead threshold policy}. For each subsidy $m$, the threshold is defined by the active-minus-passive advantage under $t$-step finite-horizon value iteration. At $t=1$, the threshold is $m$-independent and recovers the linear threshold of Liu [10]; for $t>1$, it becomes subsidy-dependent through the induced first-crossing structure and tracks the exact decision boundary more closely. The proposed algorithm does not require indexability as an input and includes an indexability verification. Under the original Whittle indexability, we prove that the $t$-step approximate Whittle index converges geometrically to the exact Whittle index, \[ |\widehat W_t(\omega)-W(\omega)|=O(\beta^t). \] Numerically, all 2,715 tested three-state instances are verified as indexable according to the proposed criterion. The P95 index error decreases from $2.18\times10^{-2}$ at $t=1$ to $8.93\times10^{-4}$ at $t=8$. In an exact-comparable instance with $\beta=0.9999$, $t=2$ already recovers the exact Whittle-index ordering. Moderate-depth threshold policies also outperform the one-step baseline and remain close to the optimal dynamic-programming benchmark, while runtime grows mildly with $t$.
