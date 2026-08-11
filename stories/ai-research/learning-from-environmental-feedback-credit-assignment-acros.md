---
title: "Learning from Environmental Feedback: Credit Assignment across Multiple Timescales for Agentic Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.08255"
authors: ["Yifu Huo, Shunjie Xing, Chenglong Wang, Peinan Feng, Qiaozhi He, Yan Ding, Anxiang Ma, Yuxin Gao, Tongran Liu, Tong Xiao, Jingbo Zhu"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.08255v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.08255v1 Announce Type: new Abstract: Agentic reinforcement learning (RL) often suffers from delayed and sparse rewards in real-world environments. A promising solution to this challenge is credit assignment, which aims to decompose trajectory-level rewards and provide more fine-grained supervision for intermediate decisions. However, existing credit assignment approaches ignore the rich process information naturally generated during environment interaction, e.g., interaction history. We argue that such information provides valuable supervision for identifying the contribution of individual actions. To this end, we propose Environmental Feedback-based Credit Assignment (EFCA), a multi-timescale credit assignment approach for long-horizon agentic RL. EFCA complements the long-term outcome signal with two environment-grounded process signals: a short-term feedback signal that captures the immediate effect of the current action and a medium-term state-history signal that identifies ineffective patterns from recent interactions. Both signals are directly extracted from environment feedback and integrated through a return reweighting mechanism. Experiments on ALFWorld and WebShop demonstrate that EFCA consistently improves both task success and task quality over strong baselines, highlighting the effectiveness of environment-grounded multi-timescale credit assignment for long-horizon agentic RL.
