---
title: "Spatiotemporal Kronecker Covariance Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25326"
authors: ["Andrea Cavallo, Athanasios Georgoutsos, Elvin Isufi"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.25326v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25326v1 Announce Type: new Abstract: Multivariate time series contain complex patterns that span across both space and time. While covariance-based statistical tools like spatiotemporal Principal Component Analysis (ST-PCA) help identify these patterns, they are limited to linear operations and prone to estimation errors with limited data. Recent covariance-based spatiotemporal neural networks offer more stable, non-linear alternatives, but they ignore correlations across different time steps. To solve this, we introduce the Kronecker coVariance Neural Network (KVNN), a temporal graph neural network that represents the spatiotemporal covariance matrix via a sum of Kronecker products where spatial and temporal dependencies are decoupled. By implementing filtering operations on spatial and temporal components, KVNNs achieve expressive processing capabilities, admit a rigorous spectral analysis, and are provably stable to finite-sample estimation errors, ultimately addressing all of ST-PCA's limitations. We show on five real-world datasets that KVNNs achieve strong forecasting performance, often requiring significantly fewer trainable parameters than competitive methods, and are consistent under estimation noise.
