---
title: "ACPO: Adaptive Credit Policy Optimization via Fine-Grained Surrogate Entropy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03126"
authors: ["Zijun Xie, Yuyang You, Yongzhi Li, Enlei Gong, Zeyu Chen, Quan Chen, Yanhua Cheng, Peng Jiang, Yadong Mu"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.03126v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03126v1 Announce Type: new Abstract: Reinforcement Learning (RL) has substantially improved the reasoning ability of large language models (LLMs), but sparse outcome rewards still make token-level credit assignment difficult. Existing scalable RL methods typically assign trajectory-level rewards uniformly across tokens, while recent entropy-aware approaches either rely on coarse detached heuristics or directly optimize true entropy, which can introduce non-local gradient components misaligned with sampled-token policy updates. We propose Adaptive Credit Policy Optimization (ACPO), a token-level credit assignment framework based on a mode-local surrogate entropy. ACPO asymmetrically modulates policy updates by emphasizing uncertain decisions in successful rollouts and overconfident tokens in failed rollouts. We show that the surrogate admits deterministic entropy bounds and, under modal alignment and proximal updates, preserves the policy-gradient direction to leading order. Experiments on mathematical reasoning and coding benchmarks, including AIME 2025 and HumanEvalPro, show that ACPO consistently improves over strong RL baselines such as DAPO, GTPO, and SAPO.
