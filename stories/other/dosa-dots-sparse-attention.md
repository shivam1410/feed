---
title: "DoSA: Dots Sparse Attention"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.13990"
authors: ["Fanxu Meng, Taosong Fang"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.13990v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Sparse attention visits few keys, yet finding them can still require scoring every key with every indexer head. We introduce DoSA (Dots Sparse Attention), a lossless method for making this computation conditional while preserving exact token selection. Its central observation is that Top-K selection requires sufficient evidence to reject a candidate, not necessarily its full score. A seed set supplies a lower bound on the winning threshold. Nonnegative head projections and joint residual bounds upper-bound positive contributions, while activation-informed aggregation bounds the magnitude subtracted by negative heads. The certificate directs full scoring toward candidates that remain eligible; exact-score filtering further reduces writeback and selection work. We establish the certificate and its exact-selection conditions, and analyze how geometry and selection margins govern its effectiveness. Our GPU implementation accelerates the complete Indexer by up to 2.74 times over SGLang and 1.69 times over LiteTopK across English, Chinese, and code workloads. End-to-end evaluation on GLM-5.2 and DeepSeek-V3.2 achieves up to 1.94 times and 1.50 times time-to-first-token speedups over the two baselines, respectively.
