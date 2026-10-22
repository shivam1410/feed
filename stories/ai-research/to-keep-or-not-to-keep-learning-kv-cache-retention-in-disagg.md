---
title: "To Keep or Not to Keep: Learning KV Cache Retention in Disaggregated LLM Serving Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28637"
authors: ["Dong Liu, Yanxuan Yu, Eric Jiang, Shu Wang, Ying Nian Wu"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.28637v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Disaggregated \textsc{LLM} serving separates prefill and decode across node pools, placing a network fabric between \textsc{KV}-cache computation and consumption. This breaks a key assumption of classical cache policies: a miss no longer incurs only local recomputation, but also network transfer to the decode node. Likewise, admitting a block to the global cache requires an additional transfer, so poor retention decisions waste both memory and bandwidth. We present \textbf{KVLearn}, a learning-based framework for cost-aware \textsc{KV}-cache retention in disaggregated serving. KVLearn includes: (i) a lightweight Prefix Reuse Predictor (\textsc{PRP}) that estimates reuse probability from structural and temporal prefix features without modifying model weights; (ii) a Cost-Aware Retention Score (\textsc{CARS}) that converts reuse probability into keep/admit decisions using recomputation, transfer, and storage costs; and (iii) an Adaptive Threshold Controller (\textsc{ATC}) that adjusts admission thresholds online from observed hit rates and memory pressure. We integrate KVLearn into a globally disaggregated serving topology and evaluate it on text and multimodal workloads, including large image/video-derived \textsc{KV} blocks with heterogeneous reuse patterns. KVLearn reduces end-to-end time-to-first-token by up to 56% versus No-Cache, 38% versus LRU-Pool, and 33% versus Mooncake-style baselines, while cutting inter-node \textsc{KV} transfer volume by up to 53% versus LRU-Pool. On MM-Session, throughput remains within ${\sim}5%$ of oracle. Code is available at https://github.com/FastLM/KVLearn.
