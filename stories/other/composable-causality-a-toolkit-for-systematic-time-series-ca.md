---
title: "Composable Causality: A Toolkit for Systematic Time-Series Causal Discovery and Treatment-Effect Benchmarking"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08918"
authors: ["Muhammad Hasan Ferdous, Md Osman Gani"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08918v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Real-world multivariate time series rarely come with verified ground-truth causal structure, so research on time-series causal discovery and treatment-effect estimation depends on synthetic data. Existing tools are either fixed datasets that cannot be modified after release or script-based generators in which each script fixes one combination of mechanism, confounding, and missingness. Neither supports controlled experiments that vary a single property, such as sparsity, noise distribution, or missingness mechanism, while holding the others fixed. Counterfactual evaluation has the same gap, since existing simulators are built per paper with hardcoded mechanisms or produce observational data only. We introduce DTCD (Datasets and Toolkit for Causal Discovery), a data generation library that produces multivariate time series with ground-truth contemporaneous and lagged adjacency matrices. Topology, mechanism, noise, observational mask, and intervention policy are independent components that compose through configuration alone. Paired counterfactual twins, produced by caching the stochastic realization during the factual rollout and re-injecting it during the interventional rollout, recover individual treatment effects to numerical precision. A reference benchmark of eight discovery algorithms on eighty-one configurations and four treatment-effect estimators on eighteen configurations exposes failure modes that aggregate metrics hide. These include the inability of standard discovery methods to handle missing values, regardless of whether the missingness mechanism is informative, and a marginal-variance shortcut (varsortability) that we measure and remove by standardization. Code and data: https://github.com/hferdous/Composable_Causality
