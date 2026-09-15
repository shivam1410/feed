---
title: "Online Bayesian Node Classification on Inductive Graphs under Distribution Shift"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13655"
authors: ["Jinwen Xu, Gonzalo Mateos Buckstein, Qin Lu"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13655v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13655v1 Announce Type: new Abstract: On evolving graphs, node classifiers must satisfy two key requirements: inductive generalization to newly arriving nodes under distribution shift and calibrated uncertainty for safety-sensitive applications. Standard graph neural networks (GNNs) are typically trained once and address neither requirement. We adapt the Bayesian last-layer (BLL) model by placing random last-layer parameters on top of a deterministic GNN encoder for uncertainty quantification. The categorical softmax likelihood required for classification breaks Gaussian conjugacy, so neither the training posterior nor the test-time streaming update has a closed-form solution. To address both challenges, we introduce a variational Bayesian last-layer (VBLL) objective that jointly trains the encoder and an approximate last-layer posterior by maximizing an evidence lower bound with a Monte Carlo expected log-likelihood. At test time, we freeze the encoder and apply an online Laplace update to the last-layer posterior. This update corresponds to a power-prior Bayesian model with exponential forgetting and a Kullback-Leibler anchor to the training posterior. Across five node-classification benchmarks under distribution shift, online GVBLL is the only method to achieve the best accuracy and negative log-likelihood on every dataset. It improves accuracy by up to 17 percentage points on Cora and 14 percentage points on ogbn-arxiv over the strongest non-GVBLL baseline, while remaining competitive in calibration with MC Dropout, Deep Ensembles, Temperature Scaling, and Gaussian-process classifiers.
