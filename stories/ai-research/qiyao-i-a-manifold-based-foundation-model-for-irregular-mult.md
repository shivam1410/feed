---
title: "QiYao-I: A Manifold Based Foundation Model for Irregular Multivariate Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06936"
authors: ["Linfeng Wang, Ruitong Zhang, Kai Zhao, Yang Shu, Zhongwen Rao, Meng Wang, Yijie Li, Bin Yang, Chenjun Guo"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.06936v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Irregular multivariate time series forecasting is a challenging yet important problem in real-world applications, where observations are often irregularly sampled and asynchronously recorded across variables. Existing time series foundation models are mostly built on regularly sampled sequences, making them difficult to generalize to irregular time intervals and asynchronous cross-variable dependencies. To address these challenges, we propose QiYao-I, a manifold based foundation model for irregular multivariate time series forecasting. Specifically, we introduce a novel sampling-conditioned temporal manifold attention mechanism that maps real timestamps into a learnable temporal manifold feature space and injects temporal manifold biases into attention layers, enabling the model to capture both irregular time intervals and local sampling structures. Further, we propose a dynamic variable interaction mechanism with frequency awareness. It selectively performs cross-variable message passing under asynchronous observations. Extensive experiments on real-world irregular multivariate forecasting benchmarks demonstrate that QiYao-I achieves superior performance compared with both time series foundation models and end-to-end irregular forecasting models, showing strong generalization ability in zero-shot and few-shot settings.
