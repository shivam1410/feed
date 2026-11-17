---
title: "OverclusterDRG: a Deterministic, LP-Free Heuristic for Robust $k$-Center"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18931"
authors: ["Rudra Bhardwaj, Rajni Dabas, Neelima Gupta"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18931v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

The $k$-center problem is a fundamental formulation for metric clustering. However, its min-max objective is highly sensitive to outliers, motivating the Robust $k$-Center (R$k$C) formulation which permits excluding up to $z$ points as outliers. Existing algorithms for R$k$C suffer from scalability issues: LP rounding relies on fractional relaxations that scale poorly, known combinatorial approximation algorithms are computationally expensive due to radius guessing, and scalable randomized heuristics require exponential trial multipliers to guarantee success. We present OverclusterDRG, a deterministic, LP-free heuristic for R$k$C. The algorithm leverages the theoretical insight of farthest-point oversampling -- adding exactly $z$ extra candidates to the center set to absorb outliers -- followed by a forward-greedy initialization and a $1$-swap local search. Evaluations across real-world datasets show that OverclusterDRG attains a mean approximation ratio of 1.147 against fractional LP lower bounds on the UCI Adult dataset, outperforming state-of-the-art baselines in both clustering quality and speed. By avoiding subset-guessing and exponential trial multipliers, it scales smoothly to $n=10^5$ points where LP solvers and theoretical algorithms become intractable.
