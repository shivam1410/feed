---
title: "Information-Based Calibration of Uncertainty Quantification in Product-of-Experts Gaussian Process Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29349"
authors: ["Yean Hoon Ong, Paolo Barucca, Wei Pan, Jun Wang"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.29349v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29349v1 Announce Type: new Abstract: Gaussian process (GP) regression with a single global GP (GP-glo) incurs cubic computational cost, limiting scalability to large datasets. Product-of-experts GP models (GP-pro), which combine local GP models to capture global correlations, alleviate this computational burden. However, training local experts on disjoint data subsets can lead to overestimated posterior variances. We propose GP-pro-c, a product-of-experts GP model that calibrates these variances using an information-based method. The method exploits the monotonicity and submodularity of information gain in GPs to define a calibration ratio that reduces the posterior variance of individual local GP models. We evaluate GP-pro-c using negative log-likelihood (NLL), root mean squared error (RMSE), and expected normalised calibration error (ENCE). Experiments on four synthetic functions and six regression datasets show that GP-pro-c achieves average reductions of 2.3% in NLL and 12.0% in ENCE compared with the uncalibrated GP-pro model. The proposed method mitigates posterior variance overestimation while maintaining predictive accuracy and reducing computational complexity. GP-pro-c provides a promising approach for uncertainty estimation in scalable GP models and may serve as a useful surrogate model for Bayesian optimisation with high-dimensional and large-scale data.
