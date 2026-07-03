---
title: "X-LogSMask: Expand Transformer for Graph-Structured Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01553"
authors: ["Leyan Li, Rennong Yang, Zhenxing Zhang, Liping Hu"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.01553v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01553v1 Announce Type: new Abstract: Transformers have become general-purpose architectures, but their all-to-all self-attention is poorly matched to graph data, whose interactions are sparse, structured and multi-scale. Existing Graph Transformers address this mismatch through structural encodings, hybrid message-passing modules or learned attention constraints, often introducing additional complexity and limited interpretability. Here we introduce X-LogSMask, an explainable multi-head logarithmic structural mask that injects symmetrically normalized graph topology directly into attention logits. The logarithmic transform converts structural connectivity into a topology-aware gating signal, suppressing unsupported node interactions while preserving feature-dependent attention. By assigning different powers of the normalized adjacency matrix to different attention heads, X-LogSMask gives each head a defined structural radius and supports multi-hop information propagation within a single layer. We further show that a standard Transformer encoder can be interpreted as one-step message passing on a complete graph, motivating X-LogSMask as a topology-constrained alternative to unrestricted self-attention. Across 20 node-, edge- and graph-level benchmarks, Transformers equipped with X-LogSMask achieve state-of-the-art performance on 13 datasets and remain competitive in a lightweight one-layer configuration. These results show that simple, interpretable structural masks can make self-attention an effective graph-learning operator without changing the Transformer architecture. The code is available at https://github.com/LiLeyan-0120/X-LogSMask.
