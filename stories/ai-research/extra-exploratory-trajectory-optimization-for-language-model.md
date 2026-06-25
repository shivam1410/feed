---
title: "ExTra: Exploratory Trajectory Optimization for Language Model Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24994"
authors: ["Wenyang Hu, Junxiang Jia, Zhen Shu, Daniel Dahlmeier, See-Kiong Ng, Bryan Kian Hsiang Low"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.24994v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24994v1 Announce Type: new Abstract: Reinforcement Learning with Verifiable Rewards (RLVR) for language-model reasoning can fail at both extremes of task difficulty: easy prompts often produce all-correct, low-diversity rollout groups with little gradient signal, while hard prompts can produce all-incorrect groups with no positive reward. We introduce ExTra (Exploratory Trajectory Optimization), a GRPO-compatible framework that extracts exploration signals from the model's own rollouts. ExTra combines two mechanisms: (i) a novelty reward that adds embedding-based diversity bonuses after GRPO normalization, rewarding diverse correct solutions; and (ii) entropy-guided prefix regeneration, which scores partial trajectories using entropy signals and continues exploration from promising intermediate steps. Across six mathematical reasoning benchmarks, ExTra improves Qwen3-1.7B over GRPO by about +5 points on pass@1 and +7 points on pass@16, showing that trajectory-level exploration signals can improve both single-sample accuracy and inference-time coverage.
