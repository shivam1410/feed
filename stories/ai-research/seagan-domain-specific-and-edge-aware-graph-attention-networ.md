---
title: "SEAGAN: domain-Specific and Edge-Aware Graph Attention Network for Dynamic Plant Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19623"
authors: ["Antriksh Srivastava, Soumyashree Kar"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.19623v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19623v1 Announce Type: new Abstract: Graph neural networks (GNNs) provide a flexible framework for learning from scientific data linked through physical, biological, or functional relationships. One promising domain is plant physiology, where measured responses often arise from multiple interacting processes whose exact separation remains difficult even with manual intervention. In plant physiology, a key example is the A-Ci curve, which relates net CO2 assimilation rate (Anet) to leaf intercellular CO2 concentration (Ci) and is used to estimate photosynthetic parameters in leaf and crop-canopy models. However, reliable estimation requires identifying the active biochemical limitation state at each curve point, which remains a major source of uncertainty. Here, we formulate limitation-state identification along A-Ci curves as a graph-based node classification problem, with curve points as nodes. Domain-specific graph representations are created using distance-based k-nearest-neighbor (kNN) and auxiliary-signal-guided (ASG) connectivity, with edge attributes encoding pairwise relations. The framework was evaluated against conventional learning baselines, graph-based architectures, and an automated fitting-based benchmark. Results on a large synthetic dataset with known ground-truth limitation states show that graph-based models improve classification, particularly near biochemical transition regions. The best-performing configuration, SEAGAN (domain-Specific and Edge-Aware Graph Attention Network for Dynamic Plant Processes), integrates process-aware node features, edge attributes, kNN connectivity, and graph attention with weighted cross-entropy loss, achieving an F1-score of 0.857 and an accuracy of 0.882. The results show that representing A-Ci curves as graphs improves biochemical limitation-state analysis, with edge-aware attention over local kNN neighborhoods providing the most effective strategy.
