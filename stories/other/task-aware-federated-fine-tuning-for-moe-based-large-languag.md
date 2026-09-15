---
title: "Task-Aware Federated Fine-Tuning for MoE-based Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13395"
authors: ["Tingqi Wang, Hongyu Ke, Haoxin Wang, Rafal Angryk, Zhipeng Cai"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13395v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13395v1 Announce Type: new Abstract: Mixture-of-Experts (MoE) has become a widely adopted architecture for Large Language Models (LLMs), as it improves model capacity while limiting computational overhead through sparse expert activation. This property makes MoE-based LLMs particularly attractive for resource-constrained distributed environments. However, federated fine-tuning of MoE-based LLMs remains challenging under heterogeneous client data. Since clients often correspond to different task preferences, directly aggregating their local updates may weaken expert specialization and introduce conflicting update directions on shared experts. To address these challenges, we propose FedTAR, a task-aware federated fine-tuning method for MoE-based LLMs. FedTAR establishes the association between local updates and task preference via routing outputs. Specifically, we apply Singular Value Decomposition (SVD) to both routing features and local updates to extract low-dimensional task coordinates and update directions. Based on the task coordinates, FedTAR performs intra-cluster aggregation among clients with similar task preferences and inter-cluster aggregation across different task groups. The aggregated update is then reconstructed through the learned task-to-update mapping, ensuring that the final update remains aligned with task-specific optimization directions. In this way, FedTAR preserves expert specialization and mitigates destructive interference among heterogeneous clients. We evaluate FedTAR on four benchmark tasks under different non-IID settings. Experimental results demonstrate that FedTAR consistently outperforms strong federated fine-tuning baselines and achieves state-of-the-art performance.
