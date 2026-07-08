---
title: "Stability Annealing Selects the Implicit Bias of Smoothed Sign Descent: A Rate-Indexed Barrier Path on Separable Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06013"
authors: ["Xiangwu Wang, Chengwei Cao, Yicheng Song, Ran Bi, Peilin Yu"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2607.06013v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.06013v1 Announce Type: new Abstract: Adaptive gradient methods can favor max-margin separators that differ from gradient descent, yet a fixed positive numerical stability constant eventually changes the update geometry again. This paper studies the rate-controlled middle case for full-batch linear classification on separable data. For memoryless stability-annealed smoothed-sign descent with weighted exponential loss, we prove that the normalized iterates converge to the minimizer of a convex Burg-type barrier over a margin slice. The proof rewrites the dynamics exactly as entropic mirror ascent on a concave dual objective, controls the dual gap by a KL recursion, and yields an explicit S_t^{-1/2} normalized-iterate envelope. The static barrier geometry is fully characterized, including KKT conditions and both endpoint limits. Experiments validate the exact dual identities to floating-point error, illustrate the predicted path and rate diagram, and show an empirical fixed-epsilon crossover scaling in cumulative time. We further report robustness and boundary diagnostics for logistic tails, fixed-epsilon crossover, and adaptive-method variants, delineating the scope of the proved smoothed-sign theory.
