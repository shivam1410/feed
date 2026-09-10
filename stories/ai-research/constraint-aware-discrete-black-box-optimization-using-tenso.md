---
title: "Constraint-Aware Discrete Black-Box Optimization Using Tensor Decomposition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09370"
authors: ["Keisuke Onoue, Ryosuke Kojima"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09370v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09370v1 Announce Type: new Abstract: Discrete black-box optimization is often addressed using approaches such as Sequential Model-Based Optimization (SMBO), which aims to improve sample efficiency by fitting surrogate models that approximate a costly objective function over a discrete search space. In many real-world problems, the set of feasible inputs is often given by logical constraints known in advance. However, existing surrogate modeling techniques generally fail to capture the symbolic rules governing feasibility in discrete input spaces. In this paper, we propose a surrogate modeling approach based on tensor decomposition that captures the structure of discrete search spaces while directly integrating feasibility information. To implement this approach, we formulate surrogate model training as a constrained polynomial optimization problem and solve a relaxed formulation using a differentiable penalty term derived from T-norms. Our experiments on both synthetic and real-world benchmarks, including a pressure vessel design task, demonstrate that the proposed method improves sample efficiency by effectively guiding the search away from infeasible regions.
