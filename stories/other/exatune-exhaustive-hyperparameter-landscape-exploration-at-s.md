---
title: "ExaTune: Exhaustive Hyperparameter Landscape Exploration at Scale"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03867"
authors: ["Kevin Dick, Katie Lonsway"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03867v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Hyperparameter optimization (HPO) returns a single optimal configuration, systematically discarding the explored performance landscape that encodes how results depend on configuration choices. Fitness landscape analysis comprises a robust collection of methods from evolutionary computation offering ruggedness indices, autocorrelation functions, and fitness-distance correlation that have never been applied to machine learning hyperparameter spaces at scale, given that fine-grained ground-truth enumeration data has not existed. We present ExaTune, an open-source HPC system to produce a new artifact class: the hyperparameter landscape map. ExaTune exhaustively evaluates every point on a discretized hyperparameter grid via $K$-fold cross-validation, aggregates results into reproducible parquet benchmarks, and applies a suite of five formalized landscape metrics: spatial autocorrelation (Moran's $I$), ruggedness, local optima density, fitness-distance correlation (FDC), and variance-based parameter importance. We release a benchmark collection of 8 complete landscape maps (totalling 285,080 exhaustively evaluated configurations) spanning five model families (SVMs, random forests, XGBoost, ridge regression, and $k$-nearest neighbors) across six classification and two regression benchmarks, hosted on HuggingFace. Empirical analysis demonstrates that Bayesian optimization, Optuna, Hyperband, and Random Search at standard trial budgets systematically miss instability regions, secondary optima, and parameter interaction effects that are visible in complete landscapes; information that is structurally unavailable to any optimizer by design.
