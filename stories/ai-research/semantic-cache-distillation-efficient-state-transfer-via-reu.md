---
title: "Semantic Cache Distillation: Efficient State Transfer via Reuse and Selective Patching"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07684"
authors: ["Qianli Ma, Zhiqing Tang, Hanshuai Cui, Zhi Yao, Weijia Jia"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.07684v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07684v1 Announce Type: new Abstract: Disaggregated serving alleviates memory bottlenecks in Large Language Model (LLM) inference but creates a severe communication bottleneck: transmitting high-dimensional Key-Value (KV) caches often dominates time-to-first-token (TTFT). Moreover, reusing caches across heterogeneous models (e.g., base and fine-tuned variants) causes semantic misalignment that accumulates over layers, degrading generation quality. We propose Semantic Cache Distillation (SCD), a loss-constrained framework that replaces raw KV transmission with compact semantic codes. SCD addresses these challenges via two mechanisms: (1) Reuse, which reconstructs most layers from low-rank subspaces to minimize transfer cost, and (2) Patch, which predicts normalized inputs at sparse transition layers to truncate error propagation. Empirically, SCD delivers up to 2.65 $\times$ TTFT speedup over the oracle consumer prefill and dominates quantization and selective recomputation baselines on the quality--latency Pareto frontier in bandwidth-constrained regimes, while keeping generation quality within 5\% F1 of the oracle.
