---
title: "DASH-OPD: Discrepancy-Aware Switching with Hysteresis for On-Policy Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.29078"
authors: ["Yuchen Xia, Qianguo Sun, Chao Song, Junlong Wu, Yiyan Qi, Yunjian Xu"]
date: "Mon, 03 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.29078v1"
image: ""
generated: "2026-08-03T19:06:42+05:30"
---

arXiv:2607.29078v1 Announce Type: new Abstract: On-policy distillation (OPD) trains student models on their own rollouts to reduce exposure bias. However, in multi-turn agent scenarios, early student errors can lead a trajectory away from the teacher's familiar domain. Existing curriculum learning methods regulate how much teacher support is used according to training progress, but cannot determine when it is needed. In light of this, we propose DASH-OPD, Discrepancy-Aware Switching with Hysteresis for OPD, a new agentic OPD method that can switch executors adaptively and bidirectionally. On each turn, DASH-OPD calculates a mean log-probability ratio between the two executors over action tokens as their discrepancy. Student-to-teacher ratios on student turns form drift signals, while teacher-to-student ratios on teacher turns form recovery signals. These signals are normalized and accumulated over multiple turns into drift and recovery evidence. DASH-OPD switches executors when the evidence exceeds its corresponding switching threshold. This multi turn accumulation makes the switching hysteretic, preventing high-frequency switches caused by transient fluctuations. On ALFWorld, DASH-OPD outperforms all the baselines and demonstrates superior training and deployment efficiency. This paper is a work in progress. Code, training logs, and model checkpoints will be released later.
