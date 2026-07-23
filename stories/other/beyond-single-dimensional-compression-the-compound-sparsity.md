---
title: "Beyond Single-Dimensional Compression: The Compound Sparsity Frontier of Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18280"
authors: ["Chao Han, Haozhe Hu, Xiaoyu Shen"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18280v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18280v1 Announce Type: new Abstract: Large language models (LLMs) are often compressed through static parameter pruning or dynamic token-level computation, yet aggressive sparsification can trigger rapid performance degradation beyond an essential sparsity boundary. This work asks \emph{whether combining these two mechanisms can delay such degradation by distributing the compression burden}. We study a minimalist compound sparsity framework that first applies low-rank approximation and channel pruning to obtain a statically compressed backbone, and then introduces lightweight routers for per-token dynamic layer skipping. This design enables independent control of parameter sparsity and token-level computation sparsity. Experiments across language understanding and modeling benchmarks show that compound sparsity consistently outperforms single-mechanism compression under the same total sparsity, delaying the decay point on understanding tasks and preserving stronger modeling performance. Further analysis reveals cross-dimensional interference between parameter pruning and token skipping, and shows that near-balanced allocation is most effective under a fixed sparsity budget. These results demonstrate that compound compression provides a practical way to improve LLM compression, while revealing a broader cross-dimensional sparsity boundary that ultimately limits further compression. Code will be available at https://github.com/EIT-NLP/LLM-Pruning.
