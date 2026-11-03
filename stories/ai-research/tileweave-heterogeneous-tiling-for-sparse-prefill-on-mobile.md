---
title: "TileWeave: Heterogeneous Tiling for Sparse Prefill on Mobile SoCs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00408"
authors: ["Wentao Ni, Hong Cai, Mingu Lee, Chihao Yu, Zhongming Yu, Hejia Zhang, Kangqi Zhang, Fatih Porikli, Zhijian Liu, Jishen Zhao"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00408v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Smartphone applications increasingly require large language models to process long contexts, whereas high prefill latency and memory demands constrain local inference. Block-sparse attention reduces computation and memory traffic, but its irregular selections conflict with mobile NPUs' preference for large, regular tiles. Efficient execution must exploit cross-query reuse while avoiding redundant computation and preserving selections needed for accuracy. In this paper, we present TileWeave, which partitions sparse attention by this cross-query reuse: highly shared key blocks run in coarse NPU tiles, while low-reuse blocks run on the GPU only for the query blocks that selected them. In addition, we design an NPU-native pooled-key selector that keeps selection inexpensive, and a runtime that publishes GPU partials in the order the NPU consumes them and merges them in its existing output store. On RULER, HeteroSparse matches XAttention's accuracy with Qwen3-1.7B and improves it with Llama-3.2-3B-Instruct; its mean LongBench scores match XAttention as well. On Snapdragon SM8750 and SM8850 phones, it achieves 1.35--3.23$\times$ faster full-model prefill than XAttention over 1k--16k tokens and up to 1.58$\times$ faster than dense attention.
