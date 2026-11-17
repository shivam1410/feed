---
title: "Check Token: Real-Time Self-Verification and Precise Truncation in LLM Reasoning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18564"
authors: ["Fei Ding, Yongkang Zhang, Yuhao Liao, Zijian Zeng, Huiming Yang"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18564v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

ECC memory embeds 8 parity bits for every 64 data bits and automatically detects and corrects errors on each read. The parity bits carry no data and only safeguard integrity, at ~12.5% overhead. Yet the reasoning chains of large language models lack such built-in self-verification: once an error occurs it propagates along the chain, and existing methods can only verify externally after generation completes. We propose the check token, establishing built-in self-verification for language model generation streams for the first time: a functional marker is added to the vocabulary, and the model triggers self-checking (analysis, localization, truncation, rewriting) by outputting it at any position. The check token carries no reasoning content (discarded after triggering) and only safeguards reasoning correctness, directly corresponding to the role of ECC parity bits, also at only ~13% overhead. Speculative forking further eliminates false-positive latency, and segmented reward makes trigger timing end-to-end learnable. Experiments (Qwen3-32B / Qwen3-Next) show that the check token achieves +10.8 pp improvement on HMMT25 at 1.13x overhead, with token efficiency 88x that of Best-of-8, and the precise truncation advantage monotonically increases with chain length.
