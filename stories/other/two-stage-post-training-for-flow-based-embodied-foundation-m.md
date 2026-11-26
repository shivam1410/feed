---
title: "Two-Stage Post-Training for Flow-Based Embodied Foundation Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31850"
authors: ["Jiaming Zhang, Yao Lyu, Haoning Wang, Yongjun Chen, Liping Zhang, Shengbo Eben Li"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31850v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Large-scale pretraining provides embodied models with general capabilities, but reliable task execution still requires post training. In multitask settings, supervised fine-tuning (SFT) faces distribution mismatch between training and deployment, whereas reinforcement learning (RL) is limited by sparse rewards and uneven learning progress across tasks. Multi-teacher on policy distillation (MOPD) consolidates expert capabilities through dense supervision on the model's own trajectories, but achieving performance beyond the teachers remains challenging. We propose a two-stage post training framework for flow-based embodied models, constructing distillation objectives from the velocity regression formulation of conditional flow matching. Stage 1 efficiently consolidates expert capabilities through MOPD. Stage 2 combines RL with teacher distillation that weights velocity errors according to the sampling noise, where distillation is restricted to failed trajectories to supplement sparse rewards with dense guidance without directly constraining successful behaviors. Experiments across multiple models and benchmarks show that the framework outperforms joint SFT and exceeds the corresponding teachers' aggregate success rates. Sample efficiency comparisons show higher success rates than direct RL with fewer environment interactions.
