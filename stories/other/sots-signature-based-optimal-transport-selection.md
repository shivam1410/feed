---
title: "SOTS: Signature-based Optimal Transport Selection"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31525"
authors: ["Khalid Akhmouch, Eric Jauer"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31525v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Training data selection for machine learning models is a critical bottleneck in industrial applications where expert annotation is costly and time-consuming. Existing coreset selection methods for time series either ignore temporal structure entirely or cannot handle variable-length, irregularly sampled, multi-channel signals, the setting most common in industrial monitoring and testing. We introduce SOTS (Signature-based Optimal Transport Selection), an unsupervised coreset selection framework for irregular multivariate time series (IMTS) classification. Each sample is mapped to a truncated path signature, capturing the joint geometric structure of its channels, and the coreset is selected by greedily minimizing the Sliced Wasserstein distance between the empirical signature distributions of the candidate subset and the full dataset, a criterion for which we establish a convergence guarantee for random coresets. We validate SOTS on a real-world, highly imbalanced industrial I&C testing dataset, where SOTS-Greedy exceeds 95% of full-dataset accuracy using only 30% of the training data, outperforming standard coreset baselines at most budgets. This advantage generalizes to public UEA regular multivariate time series benchmarks specifically when class-discriminative information is purely geometric.
