---
title: "The Granularity Paradox: How Temporal Disaggregation Inflates In-Sample Fit and Compounds Out-of-Sample Error"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05450"
authors: ["Hugo Moreira"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.05450v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05450v1 Announce Type: new Abstract: This paper explores the "Granularity Paradox" in time-series forecasting, wherein finer temporal disaggregation (e.g., Monthly to Weekly/Daily) improves in-sample diagnostics and dataset size (N), but degrades out-of-sample accuracy due to recursive error compounding over longer horizons (H). Conversely, coarse aggregation (Annual) eliminates recursive error propagation but reduces data available to estimators. We formalize this trade-off and benchmark 10 models - spanning na\"ive, statistical, machine learning, and deep learning architectures - across six granularities using a 13-year public procurement dataset. The empirical results reveal a non-monotonic threshold structure: recursive autoregressive and seasonal models degrade substantially under high-frequency forecasting (e.g., Holt-Winters reaches a Test R-squared of -151 and TPFE of 425.85% at the Daily grain), while the LSTM traces a U-shaped error curve, worsening from Monthly (19.66%) through Bi-Weekly (35.94%) before overcoming the error propagation penalty at Daily (TPFE of 4.35%, R-squared of 0.66). Linear Regression remains stable across all granularities (16.3-17.0% TPFE), confirming that the paradox is driven by recursive feedback topology, not model complexity. The results demonstrate that standard pointwise metrics (RMSE, MAE) systematically mask cumulative error propagation, and that evaluating forecasts without goal-dependent cumulative metrics produces misleading assessments of model adequacy. We introduce a consensus-dissensus diagnostic comparing the directional behaviour of pointwise metrics against cumulative TPFE across granularities, enabling the identification of models whose standard diagnostics mask systematic error propagation.
