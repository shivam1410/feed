---
title: "Causal Discovery in Equal Variance Linear Gaussian DAGs via SURE-Tuned Ridge Regression"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17132"
authors: ["Sambit Mishra, Urbashi Mitra"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17132v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17132v1 Announce Type: new Abstract: Recovering the directed acyclic graph (DAG) of a structural equation model (SEM) from observational data is a central problem in causal discovery. The iterative gradient descent and per-problem hyperparameter tuning of continuous-optimization methods are poorly suited to two practically important regimes: the sample-limited regime, where the number of samples is comparable to or smaller than the number of nodes in the DAG, and the compute-limited regime. This work proposes SURE-Ridge, a non-iterative, closed-form estimator for equal variance linear Gaussian SEM. The method performs parallel node-wise regressions with regularization parameters chosen adaptively by Stein's unbiased risk estimate (SURE), and applies an adaptive thresholding procedure to extract a DAG from the resulting soft adjacency matrix. Numerical results show that SURE-Ridge achieves the lowest structural Hamming distance in the small-sample regime and the lowest run time across all sample sizes tested, compared with NOTEARS, DAGMA, and GBNSL baselines.
