---
title: "FANS: Federated Adaptive Network Search Learning for Heterogeneous Devices"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06106"
authors: ["Jiaxin Zhang, Xingwei Wang, Bo Yi, Liang Zhao, Alireza Furutanpey, Ziyi Chen, Qiang He, Keqin Li, Schahram Dustdar"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.06106v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06106v1 Announce Type: new Abstract: Heterogeneous Federated Learning (HFL) aims to train models across devices with diverse resource budgets while preserving data privacy. Existing HFL methods typically bind training to a small predefined menu of model configurations, which limits architectural coverage. To address this bottleneck, we introduce Federated Adaptive Network Search (FANS), a hypernetwork-based framework that learns a shared architecture space rather than a fixed set of client models. To optimize this shared space efficiently, we propose the Federated Parallel Scaling (FPS) algorithm, which jointly trains multiple sampled subnetworks in parallel with self-distillation so that larger sampled subnetworks can supervise smaller ones during local updates. We evaluate FANS on CIFAR-10, CIFAR-100, and MNLI using ResNet-18, DenseNet-121, and BERT-base, respectively. Across all benchmarks, FANS expands the feasible subnetwork pool by orders of magnitude (e.g., 4,680 candidates for ResNet-18 vs. 4 in existing methods) and improves the average accuracy-efficiency trade-off relative to representative HFL baselines. Device heterogeneity is emulated through resource tiers, and evaluation covers accuracy, parameter count, and MACs.
