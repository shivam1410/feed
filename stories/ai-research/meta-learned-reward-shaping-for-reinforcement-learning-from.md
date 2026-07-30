---
title: "Meta-Learned Reward Shaping for Reinforcement Learning from Human Feedback"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26094"
authors: ["Yunpeng Chu"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 76
guid: "oai:arXiv.org:2607.26094v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

MeRLa introduces a framework for RLHF addressing static, task-agnostic reward models limiting alignment quality. The system meta-learns a task-aware shaping function across auxiliary tasks before RLHF training, producing composite rewards that preserve policy optimality while providing task-specific learning signals. Experiments on LLaMA-3-8B across four benchmarks show: 90.8% length-controlled win rate on AlpacaEval 2.0, 9.14 on MT-Bench, and 41% less training instability compared to PPO, DPO, GRPO, and DAPO. Theoretical guarantees address policy invariance and incentive misalignment.
