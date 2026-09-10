---
title: "Forward-Free LLM Depth Pruning via Weight Redundancy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09883"
authors: ["Vincent-Daniel Yun, Woosang Lim"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.09883v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09883v1 Announce Type: new Abstract: Depth pruning reduces large language model (LLM) inference cost by removing complete Transformer blocks. Activation-based methods collect hidden states through forward passes on calibration data, while existing forward-free methods score each Transformer block separately without measuring similarity between blocks. We propose Weight-Redundancy Pruning (WRP), a forward-free depth-pruning method that estimates inter-layer redundancy from checkpoint weights to select blocks without calibration data or model forward passes. WRP compares attention output and MLP down-projection weights across layers and combines their pairwise similarities with relative projection-scale information. The resulting all-pairs similarity matrix guides layer grouping and block selection. Across multiple pruning settings, model families, and downstream tasks, WRP consistently outperforms existing forward-free magnitude pruning and approaches the performance of activation-based methods.
