---
title: "Denser $\\neq$ Better: Limits of On-Policy Self-Distillation for Continual Post-Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01763"
authors: ["Meng Wang, Haohan Zhao, Wenzhuo Liu, Lu Yang, Geng Liu, Haiyang Guo, Guo-Sen Xie, Gaofeng Meng, Hongbin Liu, Fei Zhu"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.01763v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01763v1 Announce Type: new Abstract: Continual post-training enables foundation models to acquire new knowledge while preserving existing capabilities. Recent work suggests that on-policy learning can mitigate forgetting, with on-policy self-distillation emerging as a particularly attractive approach. In this work, we revisit this optimistic view through self-distillation policy optimization (SDPO). Our experiments show that SDPO can accelerate in-domain specialization when teacher signals are stable and well aligned, but it struggles to generalize to out-of-distribution scenarios. In continual post-training, SDPO exhibits stronger forgetting and can even collapse, whereas on-policy reinforcement learning methods such as GRPO adapt more conservatively and better preserve prior capabilities. Further analyses reveal that denser self-distillation induces larger drift in both parameter space and response space, and can amplify high-frequency formatting artifacts through a self-reinforcing teacher--student loop. These findings suggest that on-policy data alone is insufficient for continual learning. Dense self-distillation can accelerate specialization when teacher targets are stable and token-level supervision is reliable, but it should not be treated as a default stabilizer for continual post-training. Our code is available at https://github.com/Moenupa/SDPO-CL.
