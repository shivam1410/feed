---
title: "Canonical Correlation Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07212"
authors: ["Andrea Cavallo, Sundeep Prabhakar Chepuri, Charilaos Kanatsoulis, Elvin Isufi"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07212v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Relational inductive biases such as grids or graphs allow neural networks with fewer trainable parameters and improved generalization, but require a known structure beforehand. When no structure is available, the covariance matrix provides a principled substitute, and coVariance Neural Networks (VNNs) have shown that using it yields models that are theoretically grounded in Principal Component Analysis, stable to finite-sample estimation errors and parameter-efficient. This framework, however, is limited to single-view data, whereas many applications observe the same phenomenon through multiple views, each with its own in-view covariance and a cross-view covariance linking them. To incorporate these matrices as inductive biases in a principled way, we introduce CAnonical correlation NEural networks (CANEs), architectures that use in-view and cross-view covariances as distinct relational biases to solve downstream tasks. Via spectral analysis, CANEs draw analogies with Canonical Correlation Analysis (CCA), a classical technique to project two-view data onto a correlated subspace. However, while CCA's objective is to compute shared view representations, CANEs are trained to solve a downstream task directly. We bound their output error under finite-sample covariance perturbations and show that it depends on controllable Lipschitz constants of the learned filters in place of the singular-value gap that governs the stability of CCA, thus guaranteeing better robustness. Experiments on seven datasets from brain imaging and motion sensing show that CANEs match or outperform single-view, two-view and CCA-based baselines, often with fewer parameters, and retain their performance when covariances are re-estimated from fewer samples.
