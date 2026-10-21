---
title: "Client-Aware Security Adaptive Early Exit Vision Transformers for Heterogeneous Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24036"
authors: ["Sahar Refaei Ghalibafan, Samira Nazari, Christian Herglotz, Maksim Jenihhin, Mahdi Taheri"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.24036v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Federated learning (FL) trains a shared model across data-owning clients without centralizing raw data, but client data difficulty and compute budgets can differ. We study local early-exit Vision Transformer (ViT) inference, where an intermediate classifier may return a prediction before the final Transformer stage. The proposed method replaces one global acceptance threshold with a client-specific base threshold from label entropy and shallow-exit confidence, then adjusts each input using predictive entropy, confidence, top-two class margin, and exit depth. Aggregation uses only clients that updated a parameter. Security-aware routing reaches 88.70% CIFAR-10 accuracy with 32.0% depth saving and 73.7% ImageNet-1K top-1 accuracy with 30\% saving. On matched six-client non-IID CIFAR-100, full-depth accuracy is 72.28% versus 68.20--71.80% for four heterogeneous-FL baselines; robustness-aware routing reaches 70.01% with 32.55% saving.
