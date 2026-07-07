---
title: "Integrating Physics-Informed Neural Networks for Safe Reinforcement Learning in a 1-DoF Helicopter System"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03125"
authors: ["Georg Sch\\\"afer, Jakob Rehrl, Stefan Huber"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.03125v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03125v1 Announce Type: new Abstract: Deep reinforcement learning (DRL) offers powerful control for industrial cyber-physical systems (ICPSs), but its "black-box" exploration risks violating strict hardware safety limits. Typically, these constraints are managed through complex reward shaping. In this work-in-progress paper, we embed a differentiable physics model directly into the proximal policy optimization (PPO) actor loss function. By simulating short-horizon future trajectories during training, the policy is penalized for anticipated safety violations independent of the task-reward signal. Evaluated on a simulated 1-degree-of-freedom helicopter testbed with strict pitch constraints, our physics-informed soft regularizations substantially reduce constraint violations while maintaining reliable target tracking.
