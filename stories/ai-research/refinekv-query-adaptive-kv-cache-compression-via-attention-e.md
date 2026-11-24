---
title: "RefineKV: Query-Adaptive KV Cache Compression via Attention-Error Bounds"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28171"
authors: ["Kewei Lian, Jiayi Zhai, Anji Liu"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 45
guid: "oai:arXiv.org:2611.28171v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Repeatedly accessing the full key--value (KV) cache is a major bottleneck in long-context language model decoding. We find that small query-specific subsets can accurately approximate full attention, yet their union covers nearly the entire cache, motivating query-adaptive access for the KV cache. A natural approach is to split the KV cache into clusters, using compact representatives for clusters that incur negligible error while expanding the rest to their original KV entries. We derive a selection criterion from an upper bound on attention-output error, which reveals two complementary factors governing the error: importance measures the impact of a cluster, while distortion measures how faithfully the cluster can be represented. Based on this criterion, we propose RefineKV, a decoding-time query-adaptive KV compression method. Experiments on two models and three benchmarks demonstrate that RefineKV retains near-full-attention quality while achieving up to 7.6x speedup in the attention phase and 1.66x faster decoding, establishing a new quality-latency Pareto frontier.
