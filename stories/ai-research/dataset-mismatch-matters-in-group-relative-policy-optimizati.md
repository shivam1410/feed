---
title: "Dataset Mismatch Matters in Group Relative Policy Optimization for Reinforcement Learning from Verifiable Rewards"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00586"
authors: ["Zhen-Yu Zhang, Jiandong Zhang, Huaxiu Yao, Gang Niu, Masashi Sugiyama"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 50
guid: "oai:arXiv.org:2611.00586v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Recently, reinforcement learning from verifiable rewards (RLVR) is practically very important, where the leading approach is group relative policy optimization (GRPO) that typically faces a trade-off between rollout efficiency and downstream performance. To improve efficiency while preserving performance, existing selective rollout methods mainly exploit only source-side training dynamics to optimize the discrete distribution over source prompts. However, in practice, the source training dataset is rarely identically distributed to the target test dataset. When such a mismatch exists, due to legal or privacy constraints, it is usually not acceptable to share target prompts themselves with the RLVR trainer. Nevertheless, it is still possible for the target data owner to provide limited aggregated feedback from a small held-out target set without revealing target prompts or rollout traces. In this paper, we propose learning-to-reweight rollout (L2RR) that explicitly incorporates target-side performance feedback into GRPO. Specifically, L2RR learns a discrete sampling distribution over source prompts by optimizing a bi-level objective that maximizes accuracy on a held-out target dataset, while simultaneously penalizing rollouts that provide little incremental learning information. Empirical studies on six math reasoning benchmarks and three model scales show that L2RR improves target-domain performance and increases rollout efficiency.
