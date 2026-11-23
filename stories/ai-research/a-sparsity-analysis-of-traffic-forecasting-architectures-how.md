---
title: "A Sparsity Analysis of Traffic Forecasting Architectures: How Much Missing Data is Too Much?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.26847"
authors: ["Mohamed Hamad, Bilal Mutahir, Mohamed Mabrok, Nizar Zorba, Hamid Saeedi, Halim Yanikomeroglu"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 28
guid: "oai:arXiv.org:2611.26847v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Traffic forecasting models are typically evaluated under ideal conditions with complete data. This evaluation does not reflect the frequent sensor failures and communication outages common in real-world deployments. This paper presents a comprehensive analysis of multivariate traffic prediction models to evaluate their performance under varying levels of sensor data loss during inference. We benchmark several architectural paradigms, including graph neural networks, attention-based Transformers, and selective state-space models, across sparsity levels ranging from zero to complete sensor loss, using two widely used multi-channel traffic benchmarks. To ensure consistent comparison across traffic variables, we use normalized metrics and define a usability threshold to identify when predictions become unreliable. Our results show a clear trade-off between baseline accuracy and robustness: models with the highest accuracy under full-data conditions often degrade most sharply as data becomes sparse, while less accurate models maintain more stable performance. These findings show that model selection should be based on the expected reliability of the sensor network rather than peak accuracy alone. This work provides a practical framework for assessing traffic forecasting models and highlights the importance of robustness in real-world applications.
