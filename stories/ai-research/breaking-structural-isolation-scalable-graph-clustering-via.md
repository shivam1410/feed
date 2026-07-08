---
title: "Breaking Structural Isolation: Scalable Graph Clustering via Community-Aware Sampling and Structural Entropy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05469"
authors: ["Jingyun Zhang, Hao Peng, Jianxin Li, Angsheng Li, Philip S. Yu"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2607.05469v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05469v1 Announce Type: new Abstract: Unsupervised graph clustering is a fundamental technique for uncovering underlying semantic patterns in large-scale networks. Although Graph Contrastive Learning has demonstrated promising performance, existing methods often suffer from the "structural isolation" issue during mini-batch training, making it challenging to capture cohesive community structures that characterize the global topological distribution. To address these challenges, we propose SCISE, a Scalable unsupervised graph Clustering framework that preserves structural Integrity by synergizing community-aware sampling with constrained Structural Entropy. Specifically, we first introduce the Structural Entropy Community Constraint operator (SECC), which optimizes structural information within a constrained solution space to mitigate community fragmentation and enhance partition cohesion. Second, to prevent global information loss during batch training, we design a Community-Aware Sampling Expansion (CSampE) mechanism that incorporates the community context of target nodes into sampling batches, effectively breaking structural barriers and preserving topological integrity. Finally, we devise a Structural Contrastive Learning (StructCL) module that refines edge weights based on intra-batch structural similarity, guiding the encoder to learn representations in a higher-order structural space. Extensive experiments on six mainstream benchmark datasets demonstrate that SCISE significantly outperforms state-of-the-art algorithms, with ablation studies and robustness analyses further validating its effectiveness and reliability for real-world large-scale graphs.
