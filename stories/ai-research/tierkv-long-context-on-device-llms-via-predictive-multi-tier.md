---
title: "TierKV: Long-Context On-Device LLMs via Predictive Multi-Tier KV Caching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21172"
authors: ["Zhihao Shu, Md Musfiqur Rahman Sanim, Jie Hu, Kun Yuan, Minghai Qin, Gagan Agrawal, Wei Niu"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.21172v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21172v1 Announce Type: new Abstract: Large language models (LLMs) are moving onto mobile devices for increasingly diverse workloads over text, images, video, and audio. These applications often require long contexts, making the Key-Value (KV) cache a dominant memory bottleneck because it grows linearly with sequence length and is accessed at every decoding step. Prior work reduces KV-cache footprint through low-rank compression, token eviction, or flash offloading, but the resulting reconstruction overhead, irreversible token loss, or I/O stalls can offset the benefit of saving memory. We present TierKV, a mobile LLM inference framework built on Predictive Multi-Tier Cache Optimization (PMCO). Before decoding starts, PMCO predicts future cache demand from prefill hidden states and jointly assigns tokens to exact, low-rank, and flash-offloaded tiers under the device memory and accuracy budgets. This formulation retains access to the full context, removes the circular dependency of reactive eviction, and admits a closed-form solver that selects tier boundaries and per-layer ranks at runtime. Across eight text, vision, and audio models on three mobile SoCs, TierKV improves prefill throughput by up to 17.6x over existing mobile LLM frameworks, reduces RAM-resident KV cache by 12.5-34%, thereby enabling substantially longer contexts under the same memory budget, while incurring only minor accuracy degradation.
