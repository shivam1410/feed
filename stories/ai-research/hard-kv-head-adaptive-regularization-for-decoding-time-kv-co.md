---
title: "HARD-KV: Head-Adaptive Regularization for Decoding-time KV Compression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28831"
authors: ["Yuxuan Yang, Feiyang Ren, Bowen Zeng, Dalin Zhang, Jinpeng Chen, Gang Chen, Huan Li"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2606.28831v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28831v1 Announce Type: new Abstract: Long-context LLM inference faces a fundamental conflict: head-adaptive compression algorithms (e.g., Top-$p$ nucleus sampling) offer superior accuracy by dynamically fluctuating memory budgets, yet modern inference engines (e.g., vLLM) demand rigid, static memory patterns to leverage CUDA Graphs and PagedAttention. We resolve this ``Static-Dynamic'' mismatch with HARD-KV, a unified framework that that bridges dynamic selection with rigid system constraints. HARD-KV introduces a Cascade Cache hierarchy, managing the token lifecycle across dense, sparse, and condensed tiers. Crucially, we propose a Logits Calibration mechanism that normalizes diverse importance metrics into a unified probability space, enabling consistent Top-$p$ budgeting across heterogeneous heads. To bridge the efficiency gap, we offer a system-level solution, which rewrites fragmented, dynamic indices into contiguous physical layouts compatible with high-performance inference engine. Extensive experiments on math-reasoning benchmarks (AIME, U-Math) verify that HARD-KV achieves up to 2$\times$ throughput improvement over static baselines while maintaining high-fidelity generation in 10k+ token scenarios. Code is available at https://github.com/SuDIS-ZJU/HARDInfer.
