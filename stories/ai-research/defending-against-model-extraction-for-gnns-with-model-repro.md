---
title: "Defending against Model Extraction for GNNs with Model Reprogramming"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11495"
authors: ["Yan Wen, Zhenyi Wang, Heng Huang"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.11495v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11495v1 Announce Type: new Abstract: Graph Neural Networks (GNNs) serve as the backbone for high-stakes applications in Machine-Learning-as-a-Service (MLaaS). Still, their black-box deployment exposes them to Model Extraction (ME) attacks, in which adversaries steal intellectual property by querying APIs. Existing defenses suffer from a critical ''Euclidean bias'': they transfer image-based strategies (e.g., random noise) to graphs, ignoring the complex topological dependencies between nodes, which often results in severe utility degradation. Passive methods like watermarking also fail to prevent theft in real time. To bridge this gap, we propose GraphRP (Graph Reprogramming Protection), a proactive defense framework that repurposes Model Reprogramming for security. Unlike static perturbations, GraphRP introduces a Structure-Aware Gating Mechanism driven by learnable topological prototypes. This creates a dynamic ''structural firewall'' that selectively modulates the model's decision boundary: it preserves fidelity for benign queries residing on the training manifold, while maximizing the Fisher Information along the perturbation direction for adversarial queries. Under standard assumptions (bounded loss, optimal attacker, and local second-order approximation), we prove a lower bound on the attacker's estimation error that increases with the structural sensitivity of the reprogramming noise. Extensive experiments on both hard-label and soft-label ME attacks demonstrate that GraphRP significantly degrades attack effectiveness while preserving benign utility.
