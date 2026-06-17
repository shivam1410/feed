---
title: "Rethinking Groups in Critic-Free RLVR"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17250"
authors: ["Yihong Wu, Liheng Ma, Lingfeng Xiao, Muzhi Li, Xinyu Wang, Yingxue Zhang, Jian-Yun Nie"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.17250v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17250v1 Announce Type: new Abstract: Reinforcement learning (RL) has become a central paradigm for post-training large language models. Existing critic-free RL methods typically generate a group of rollouts for the same question to estimate value baselines for advantage computation. However, this design suffers from data inefficiency, group synchronization barriers, and inflexibility with structured rollouts. In this work, we revisit the role of the ``group'' and show that its underlying function is not merely to estimate baselines but to prevent false penalties on negative samples. Building on this insight, we propose negative token filtering, a simple and effective strategy that enables stable single-rollout training. We apply it to two batch-level advantage methods, achieving comparable performance on reasoning tasks and stronger performance on agentic tasks relative to group-based RL techniques.
