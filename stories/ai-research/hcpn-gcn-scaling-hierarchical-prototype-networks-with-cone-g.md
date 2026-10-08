---
title: "HCPN-GCN: Scaling Hierarchical Prototype Networks with Cone Geometry for Continual Graph Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08823"
authors: ["Sammuel R. Silva, Vander L. S. Freitas, Gladston Moreira, Eduardo J. S. Luz, Rodrigo Silva"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2610.08823v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

Continual Graph Learning (CGL) aims to incrementally learn from graph-structured data while preserving knowledge acquired from previous tasks. A major challenge in this setting is catastrophic forgetting, where learning new tasks degrades performance on previously learned ones. Hierarchical Prototype Networks (HPNs) address this problem through a prototype-based memory mechanism that avoids storing historical data, but their reliance on linear feature extractors limits their ability to exploit graph topology, while point-based prototypes often lead to inefficient prototype growth on structurally diverse graphs. In this work, we propose HCPN-GCN, a graph-aware extension of HPN that replaces the original linear feature extractors with Graph Convolutional Networks (GCNs) and introduces cone-based prototypes with a diversity regularization objective. The proposed design produces richer graph-aware representations while compactly modeling the embedding space, reducing prototype proliferation without sacrificing discriminability. Experimental results on six continual graph learning benchmarks demonstrate that HCPN-GCN consistently improves average classification accuracy over the original HPN and representative continual learning baselines while maintaining near-zero forgetting. Furthermore, our analysis shows that the proposed model learns substantially richer class-level prototype hierarchies using approximately $30\times$ fewer atomic prototypes than the original HPN, providing a more compact and effective memory representation for continual graph learning.
