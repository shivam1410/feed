---
title: "Fuse-All MoE Inference Kernel with Load Balancing on TPUs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17857"
authors: ["Rupeng Liu, Bangsheng Tang, Zongwei Zhou, Chengji Yao, Yejin Lee"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17857v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Mixture-of-Experts (MoE) architectures activate only a subset of experts for each token, allowing large language models (LLMs) to scale parameter capacity without a proportional increase in computation per token. However, intermediate data movement and uneven expert loads limit the efficiency of MoE inference on TPUs. To address these bottlenecks, we introduce Fuse-All MoE, a TPU kernel design that jointly optimizes expert computation, output communication, and load balancing. The kernel fuses token collection, expert projections, gated activation, and output writes, retaining expert computation intermediates on chip. Fixed token-slot destinations allow scheduling and expert placement to change while preserving routing semantics. In prefill-decode (PD) disaggregated serving, Fuse-All MoE balances EP16 prefill workloads through scheduling and expert redistribution, while symmetric EP8TP2 shares active expert computation between the two TensorCore devices within each chip during decode. Our experiments show that Fuse-All MoE reduces kernel runtime for a measured skewed EP16 prefill workload from 2.3x to 1.09x the same fixed reference time for a balanced workload. Across 32-512 decode tokens, symmetric EP8TP2 reduces kernel latency by up to 21.3% relative to fused EP16. With accompanying serving stack optimizations, the integrated system improves serving throughput by up to 34.5% over the Megablox EP16 baseline.
