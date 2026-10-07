---
title: "Do Neural PDE Solvers Learn the Right Dynamics?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06952"
authors: ["Haonan Li, Yue Song, Bin Yang, Kaihong Luo"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.06952v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Neural PDE solvers can achieve low prediction errors, but do they reproduce the dynamics of the systems they model? Prediction scores alone offer an incomplete answer: they measure agreement with reference solutions but provide limited insight into how errors accumulate, nearby states diverge, or extreme events arise. We propose an evaluation framework that directly examines these behaviors in deterministic and stochastic neural solvers. By evolving ensembles of nearby initial states and comparing them with direct numerical simulation, we assess three complementary aspects of learned dynamics: error formation, ensemble geometry, and extreme events. Experiments on two-dimensional Kolmogorov flow reveal limitations that conventional scores can obscure. Smaller trajectory errors can reflect weaker error amplification despite less accurate local updates. Models can match an ensemble's overall spread and effective dimension while failing to capture the spatial directions where nearby states diverge. Similarly, matching overall event frequencies can conceal failures to predict persistent extreme events. These findings show that improved prediction accuracy does not necessarily imply greater dynamical fidelity. Our framework makes this distinction measurable, providing concrete criteria for evaluating whether advances in neural PDE solvers better capture the underlying dynamics.
