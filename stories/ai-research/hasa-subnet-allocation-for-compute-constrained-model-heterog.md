---
title: "HASA: Subnet Allocation for Compute-Constrained Model-Heterogeneous Federated Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07621"
authors: ["Amir Hossein Shahdadian, Ahmed M. Abdelmoniem, Mahdi Taheri, Samira Nazari, Christian Herglotz"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.07621v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07621v1 Announce Type: new Abstract: Edge services increasingly use federated learning to personalize on-device models while keeping sensitive data local. In practice, deployments must handle heterogeneity in both client resources and local data distributions. Model-heterogeneous federated learning lowers client cost by allowing each client to train a subnet of a shared supernet, but most subnet-allocation policies are driven by device constraints and do not explicitly account for statistical heterogeneity. This paper proposes Heterogeneity-Aware Subnet Allocation (HASA), a train-only rule that assigns subnet widths based on client heterogeneity scores computed from local training data while enforcing a fixed size-weighted compute budget. This design enables budget-matched comparisons with alternative allocation policies. On an article-title next-word prediction benchmark with seven clients, HASA improves unweighted mean client test accuracy over uniform allocation across 10 matched seeds, increasing mean client test accuracy from 13.82 percent to 14.32 percent, and improves worst-client accuracy on average. In a matched-budget comparison with representative partial-training baselines, HASA achieves the strongest worst-client and tail-client accuracy on this benchmark. A directionality ablation shows that assigning smaller subnets to more heterogeneous clients degrades both mean and tail performance. A cross-domain image-classification study further shows that the effectiveness of heterogeneity-aware allocation depends on how well the heterogeneity score reflects clients' need for additional model width.
