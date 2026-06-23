---
title: "Structure-Aware Graph Multi-Task Learning for Dynamic Sparse OD Demand Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21022"
authors: ["Ming Xu, Jiawei Cao"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21022v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21022v1 Announce Type: new Abstract: Origin-Destination (OD) demand prediction is fundamental to intelligent transportation systems, yet real-world OD flows are often dynamically sparse, long-tailed, and characterized by heterogeneous zero-flow patterns. These properties make it difficult to distinguish whether an OD connection is active from how much demand it generates once activated. Many existing methods primarily treat OD prediction as a single flow regression task, which limits their ability to model low-frequency, intermittent, and long-tailed OD interactions. To address these challenges, we propose SAGMTL, a Structure-Aware Graph Multi-Task Learning framework for dynamic sparse OD demand prediction. SAGMTL decomposes OD prediction into structural state modeling and flow intensity estimation, jointly learning regional activity states, OD connection activity, and edge-level flow intensity within a unified framework. Specifically, a node-edge collaborative representation module captures regional semantics, temporal dynamics, and spatial priors through interactive node-edge updates, producing structure-aware representations for dynamic OD interactions. Based on these representations, SAGMTL estimates OD flows by jointly modeling stable demand patterns and short-term fluctuations. A multi-constraint objective further improves sparsity awareness and structural consistency. Experiments on three real-world urban mobility datasets from Beijing, Chengdu, and Nanjing show that SAGMTL achieves superior overall performance compared with state-of-the-art baselines. Further analysis demonstrates that explicitly modeling regional activity, connection states, and flow intensity improves the robustness of dynamic sparse OD demand prediction.
