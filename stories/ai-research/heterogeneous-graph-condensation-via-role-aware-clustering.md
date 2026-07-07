---
title: "Heterogeneous Graph Condensation via Role-Aware Clustering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03097"
authors: ["Fuyan Ou, Yulin Hu, Ye Yuan"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.03097v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03097v1 Announce Type: new Abstract: Heterogeneous Graph Neural Networks (HGNNs) have exhibited remarkable efficacy in modeling complex systems with multiple types of nodes and relations, yet their training on large-scale heterogeneous graphs remains computationally prohibitive. Although graph condensation methods can effectively improve learning efficiency on large-scale graphs, existing condensation processes are mainly designed for homogeneous graphs and typically rely on computationally expensive gradient matching or bilevel optimization paradigms, rendering them impractical for heterogeneous settings. To address these limitations, we propose HGC-RC, a simple yet effective role-aware heterogeneous graph condensation framework. Specifically, HGC-RC first extracts semantically enhanced node embeddings via lightweight propagation. It then introduces a role-aware hybrid clustering strategy consisting of class-partitioned clustering for labeled target nodes to preserve class distributions and unsupervised type-wise clustering for non-target nodes to retain critical cross-type connectivity. Finally, a compact heterogeneous graph is efficiently reconstructed based on the resulting cluster assignments. Extensive experiments demonstrate that HGC-RC outperforms state-of-the-art baselines, offering a practical pathway to accelerate HGNN training on large-scale heterogeneous graphs without sacrificing task performance
