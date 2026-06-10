---
title: "Operator Fusion for LLM Inference on the Tensix Architecture"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09879"
authors: ["Qingbo Wu, Ke Li, Wenzhu Wang, Jie Yu, Ruian Zhang, Lili Liu"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.09879v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09879v1 Announce Type: new Abstract: This study addresses on-device inference bottlenecks of Transformer models on Tenstorrent's Tensix architecture and proposes an operator fusion strategy that enhances data locality. RMSNorm is fused with matrix multiplication in self-attention and in the FFN, enabling back-to-back execution of memory-bound and compute-bound operators in on-chip SRAM to significantly reduce DRAM reads/writes of intermediate results and scheduling overhead. To support multi-core parallelism, a NoC-based multicast mechanism is leveraged in which row/column master nodes efficiently distribute inputs and weights across the core mesh, alleviating DRAM bandwidth contention. Experiments on the Wormhole platform with Qwen2.5-0.5B, Qwen3-0.6B, and Qwen3-4B show up to 37.44% latency reduction for attention and 15.89% for MLP, with up to 7.91% reduction per decoder layer, while Pearson Correlation Coefficient (PCC) remains above 98.75%, confirming significant end-to-end efficiency gains under numerical consistency.
