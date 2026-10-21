---
title: "miniTE: Diagnosing and Bridging the Execution Gap in Native NVFP4 Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23928"
authors: ["Zhen Li, Mingfa Feng, Yiming Zhang, Yang Yu, Changhai Zhou, Pengxiang Li, Dongkuan Wu, Congkai Xie, Hongxia Yang"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2610.23928v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Native NVFP4 promises to accelerate reinforcement learning (RL) for large language models (LLMs), but achieving stable learning across separate training and sampling engines remains challenging. We show that matching model weights and numerical formats is insufficient to ensure consistent policy evaluation, highlighting the importance of cross-engine numerical execution. We introduce miniTE, a lightweight framework that combines execution diagnostics, cross-engine numerical alignment, and efficient native W4A4 (4-bit weights and activations) GEMM computation for LLM RL. It improves numerical execution consistency without modifying the RL objective, while reducing implementation overhead to realize the benefits of native low-bit computation. Long-horizon RL experiments on Qwen3-30B-A3B demonstrate stable training and benchmark performance close to BF16, outperforming naive Transformer Engine (TE) NVFP4 in evaluation quality. On single NVIDIA B300 GPU node, the optimized learner reaches 33,540 tokens/s, yielding 1.39x and 1.47x the throughput of BF16 and TE NVFP4, respectively, for complete learner updates. We released the framework, kernels, diagnostics, and training configurations to make native low-bit RL easier.
