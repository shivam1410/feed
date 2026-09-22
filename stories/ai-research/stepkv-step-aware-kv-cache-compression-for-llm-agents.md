---
title: "StepKV: Step-Aware KV Cache Compression for LLM Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22158"
authors: ["Boyu Feng, Jiahong Liu, Yifan Li, Wenhao Yu, Zexuan Qiu, Yuliang Sun, Ming Shen, Xiang Li, Quanyu Dai, Irwin King"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.22158v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22158v1 Announce Type: new Abstract: Key-value (KV) caching is essential for efficient autoregressive large language model (LLM) inference, but the cache grows linearly with context length, increasing storage and decoding costs. KV cache compression mitigates this cost by retaining only a subset of cached tokens. This challenge is particularly important for multi-step LLM agents, where a query expands into trajectories of reasoning, tool interactions, and retrieved observations. Existing pruning methods typically treat the cache as a flat token stream and rank tokens by recency or attention saliency. This creates a mismatch between the unit of compression and the unit of reasoning: token-level pruning removes individual entries, whereas useful information in multi-step agents is often organized into reasoning steps with uneven and delayed importance. Consequently, an early observation or intermediate decision may receive little recent attention yet remain essential for later evidence synthesis. We term this failure mode Reasoning Continuity Disruption.These observations motivate KV cache compression that jointly considers token- and reasoning-step-level information. StepKV addresses this goal by treating reasoning steps as first-class retention units. It associates cache entries with their generating steps, estimates step utility from trajectory-derived signals, and combines this utility with token-level saliency. The resulting scores globally rank prunable tokens, from which StepKV retains the top-scoring entries under a target budget. StepKV thus provides a step-centric perspective for agent KV cache compression. Across multi-hop QA and long-horizon web reasoning tasks, StepKV sustains accuracy under low KV budgets where token-level baselines degrade sharply, offering a more robust efficiency-accuracy trade-off for multi-step agent inference.
