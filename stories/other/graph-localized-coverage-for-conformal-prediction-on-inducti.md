---
title: "Graph-Localized Coverage for Conformal Prediction on Inductive Graphs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04066"
authors: ["Jinwen Xu, Qin Lu, Georgios B. Giannakis"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04066v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Conformal prediction (CP) provides marginal coverage guarantees, but marginal coverage does not determine where prediction errors occur on a graph. Queries from different graph neighborhoods can exhibit substantially different levels of uncertainty even when aggregate coverage remains near its target. We introduce GLocalCP, an online CP framework for inductive node classification and edge prediction that combines marginal and graph-local calibration with uncertainty-adaptive prediction sets. Specifically, GLocalCP puts forth a novel uncertainty-adaptive nonconformality score that relies on the mutual information obtained from Monte-Carlo (MC) dropout based prediction. Then, it augments a global online threshold with a kernel-based local correction that propagates coverage feedback among similar graph queries. On the theoretical horizon, we establish pathwise $O(N^{-1/2})$ marginal calibration error without exchangeability or stationarity and, for the exact-kernel formulation, an explicit $O(N^{-1/2})$ graph-localized calibration guarantee. Experiments on seven node-classification and seven edge-prediction benchmarks show that similar marginal coverage can conceal substantially different local reliability. Our proposed GLocalCP maintains coverage near the target while consistently reducing graph-local calibration error. Uncertainty scaling in GLocalCP further reduces prediction-set size across all evaluated node and edge datasets while leaving marginal coverage essentially unchanged.
