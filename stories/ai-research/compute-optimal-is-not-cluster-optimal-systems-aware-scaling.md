---
title: "Compute-Optimal Is Not Cluster-Optimal: Systems-Aware Scaling for Sparse Mixture-of-Experts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.10605"
authors: ["Soumajyoti Sarkar, Yuxin Tang, Sheng Zha"]
date: "Wed, 12 Aug 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2608.10605v1"
image: ""
generated: "2026-08-12T19:06:41+05:30"
---

MOSAIC reveals that optimizing models for compute efficiency and hardware efficiency yield different solutions in sparse Mixture-of-Experts scaling. The framework couples predictive scaling laws with performance models estimating MFU, communication cost, memory, and parallel layouts. Testing sparse MoE from 104 million to 2.7 billion active parameters shows compute-optimal scaling produces no interior optimal sparsity—loss decreases monotonically with sparsity, pushing optima to boundary. This contradicts conventional separate optimization of algorithm and systems. The finding matters because it demonstrates architecture-systems co-design, not staged optimization, correctly balances training efficiency and deployment hardware utilization.
