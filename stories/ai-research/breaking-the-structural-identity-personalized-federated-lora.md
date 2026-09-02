---
title: "Breaking the Structural Identity: Personalized Federated LoRA Fine-tuning under Rank Heterogeneity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00632"
authors: ["Lei Wang, Jieming Bian, Letian Zhang, Jie Xu"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.00632v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00632v1 Announce Type: new Abstract: Large Language Models (LLMs) have achieved remarkable success across diverse domains, but their adaptation to privacy-sensitive, distributed datasets remains a challenge. While Federated Learning (FL) combined with Low-Rank Adaptation (LoRA) provides a resource-efficient paradigm for collaborative fine-tuning, practical deployments are hindered by the dual challenges of resource heterogeneity and data heterogeneity. Existing rank-heterogeneous methods primarily focus on bridging dimension mismatches for aggregation but typically provide a unified global model for all clients sharing the same rank, failing to capture client-specific features in non-IID scenarios. In this paper, we propose FedRoRA (Federated Rank-wise Personalized LoRA), a novel framework that enables fine-grained personalization within rank-heterogeneous federations. FedRoRA decouples adaptation into shared global directions and personalized rank-wise magnitudes governed by learnable diagonal scales. On the server side, it extracts a global subspace via singular value decomposition (SVD) and redistributes client-specific initializations through a personalized projection and top-$k$ selection mechanism. Extensive experiments on NLU and NLG benchmarks demonstrate that FedRoRA consistently outperforms state-of-the-art methods.
