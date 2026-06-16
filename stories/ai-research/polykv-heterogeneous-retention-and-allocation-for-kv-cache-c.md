---
title: "PolyKV: Heterogeneous Retention and Allocation for KV Cache Compression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15157"
authors: ["Chao Fei, Panos Kalnis"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.15157v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15157v1 Announce Type: new Abstract: KV cache compression is essential for reducing the memory cost of long-context large language model inference. Existing approaches, however, typically apply a single compression policy and a uniform cache budget across all transformer layers. This uniform design ignores the fact that different layers can play different roles during prefill and decoding, and may therefore require different eviction strategies and cache capacities. We present PolyKV, a layer-wise KV cache optimization framework that considers design space with method selection and budget allocation. PolyKV routes each layer to a suitable KV compression policy based on layer-level signals, while assigning non-uniform budgets under a fixed total budget. This formulation enables heterogeneous compositions of existing KV cache methods. Experiments on LLaMA-3.1-8B and Qwen3-8B show that, under the same 512-token average KV budget, PolyKV recovers 54.5% and 25.7% of the LongBench performance gap between the strongest single-policy baseline and FullKV, respectively. Across 128-1024 budget sweep, PolyKV consistently improves over the strongest baseline by 1.7%-6.4%, corresponding to 40.0%-54.5% recovery of the FullKV gap.
