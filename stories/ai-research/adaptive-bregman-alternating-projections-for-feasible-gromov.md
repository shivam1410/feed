---
title: "Adaptive Bregman Alternating Projections for Feasible Gromov-Wasserstein Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04264"
authors: ["Aoran Zhang, C\\'esar A. Uribe"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.04264v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

The Gromov-Wasserstein (GW) problem compares structured distributions without requiring a shared feature space or known correspondences, but its nonconvex objective and coupled marginal constraints make computation challenging. Bregman alternating projected gradient (BAPG) uses inexpensive alternating row and column updates, yet its fixed-penalty relaxation leaves a persistent feasibility gap. We propose Adaptive KL-BAPG (A-KL-BAPG), which combines a finite fixed-penalty burn-in with a guarded increasing-penalty phase. At each tail iteration, the method reuses BAPG's alternating updates and backtracks a delayed-power step until a Sinkhorn-inspired projective-diameter safeguard is satisfied. We prove finite termination of the backtracking at each iteration and show that the feasibility gap vanishes asymptotically. We further establish a best-iterate $O(1/\log N)$ bound for the weighted squared corrected residual and, under a support regularity condition, the existence of a stationary accumulation point for the original GW problem. This distinguishes A-KL-BAPG from fixed-penalty BAPG, whose stationarity guarantees are given for the relaxed problem. Experiments show that A-KL-BAPG achieves a favorable balance of accuracy, objective value, feasibility, and stationarity relative to BAPG variants, projection-based methods, and task-specific baselines. For synthetic and real graph alignment problems, it closely matches the accuracy and objective value of fixed-penalty KL-BAPG while reducing the marginal feasibility gap by 62-99% and the projected stationarity residual by 28-98%. Heterogeneous domain adaptation experiments show a similar pattern: A-KL-BAPG maintains comparable target accuracy and objective values while achieving better feasibility and stationarity than fixed-penalty KL-BAPG.
