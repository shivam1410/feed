---
title: "Graph-Regularized Synthetic Control for Stable Counterfactual Estimation under Donor Redundancy"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24113"
authors: ["Yanlin Zhang, Sungyong Chung, Alireza Talebpour"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 18
guid: "oai:arXiv.org:2610.24113v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Synthetic control methods estimate counterfactual outcomes by weighting untreated donor units to match a treated unit before treatment. In recent applications, however, the donor pool can be large, highly correlated, and short in pre-treatment history, yielding many near-equivalent solutions with unstable and difficult-to-interpret donor weights. We propose Graph-Regularized Synthetic Control (Graph-SC), a convex estimator that augments the classical pre-treatment matching objective with a graph Laplacian penalty. The graph encodes similarity among donor trajectories, encouraging coherent weights over structurally related donors while preserving the transparency of synthetic controls. We provide theoretical results characterizing the bias-variance tradeoff induced by graph regularization and establish efficient convergence guarantees with an accelerated proximal gradient method. Across a controlled simulation under donor redundancy, the California Proposition 99 benchmark, and observational counterfactual analyses on the Waymo Open Motion Dataset, Graph-SC improves weight stability, reduces sensitivity to redundant donor pools, and maintains competitive pre- and post-treatment accuracy relative to classical and regularized synthetic control baselines. Our results suggest that graph regularization is most valuable not as a universal accuracy booster, but as a principled mechanism for selecting stable and interpretable counterfactuals from near-equivalent synthetic controls with comparable pre-treatment fit.
