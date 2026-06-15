---
title: "Efficient On-Device Diffusion LLM Inference with Mobile NPU"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13740"
authors: ["Tuowei Wang, Yanfan Sun, Ju Ren"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.13740v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13740v1 Announce Type: new Abstract: Diffusion large language models (dLLMs) accelerate generation by denoising multiple tokens in parallel, making them attractive for latency-sensitive mobile inference. However, repeated denoising introduces substantial computation on smartphones. Mobile neural processing units (NPUs) offer high-throughput dense matrix computation, but efficiently exploiting them remains challenging: token commitment shrinks per-block effective workloads, token revision complicates KV cache reuse, and limited NPU-visible address space incurs costly remapping and data transfer overheads. In this paper, we propose llada.cpp, the first NPU-aware inference framework for accelerating dLLMs on smartphones. llada.cpp aligns block-wise dLLM inference with the execution characteristics of mobile NPUs through three techniques. (1) Multi-Block Speculative Decoding fills the shrinking workload in late-stage current-block decoding with speculative future-block tokens. (2) Dual-Path Progressive Revision keeps committed tokens revisable until stable and refreshes unstable tokens through a CPU-side path without stalling dense NPU execution. (3) Swap-Optimized Memory Runtime compacts NPU-visible address layouts and overlaps data staging with NPU computation to reduce remapping and transfer overheads. We implement llada.cpp as an end-to-end framework and evaluate it across diverse hardware platforms and dLLM workloads. llada.cpp reduces LLaDA-8B generation latency by 17x-42x over the CPU baseline with prefix KV cache reuse, while preserving generation quality.
