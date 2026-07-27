---
title: "A Drift Stable Quantum Federated Learning for Intelligent Services"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21647"
authors: ["Shanika Iroshi Nanayakkara, Shiva Raj Pokhrel"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.21647v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21647v1 Announce Type: new Abstract: Quantum federated learning enables distributed clients to train quantum neural networks without sharing local data, making it promising for privacy-aware intelligent services. Intelligent services in this context refer to privacy-sensitive distributed decision systems, such as fraud detection and genomic classification, where reliable and fair client-level learning is as important as the accuracy of the aggregate model. However, heterogeneous client data and noisy quantum optimization often cause unstable local updates, client drift, and unfair performance between clients. This paper proposes DUQFL-Prox, a drift-stable quantum federated learning framework based on deep-unfolded local optimization. Instead of using a fixed local optimizer, each client performs adaptive unfolded SPSA updates, while a proximal term keeps the local model close to the global model. A lightweight controller learns step-specific optimization parameters to improve post-aggregation performance. Experiments on financial fraud and genomic classification tasks show that DUQFL-Prox improves stability, generalization, and client fairness compared with standard QFL baselines. The results suggest that deep-unfolded quantum federated learning can support more reliable and fair intelligent services in heterogeneous distributed environments.
