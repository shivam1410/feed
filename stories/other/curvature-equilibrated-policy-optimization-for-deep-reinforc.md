---
title: "Curvature-Equilibrated Policy Optimization for Deep Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31680"
authors: ["Gang Chen"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31680v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Gradient-based actor optimization is central to deep reinforcement learning. However, conventional first-order optimizers do not explicitly exploit the local curvature of neural actor losses. We propose EQUIP (Curvature-Equilibrated Gradients for Policy Search), a novel approach that seeks to balance local contraction and expansion of the actor parameter space by equilibrating positive and negative curvature. EQUIP constructs a trajectory-informed search subspace and uses the projected Hessian of actor loss to build a bounded local metric for curvature equilibration. First-order loss matching preserves the approximated first-order decrease in actor loss. Meanwhile, gradient mixing and curvature-based gradient selection adjust the gradient applied for actor optimization. We establish the geometric properties of curvature equilibration, derive bounds on gradient alignment and magnitude, and identify conditions for improved actor loss reduction and convergence toward stationarity under direct gradient updates. We integrate EQUIP into Soft Actor-Critic (SAC) without modifying its actor loss, critic learning, or replay mechanism. Experiments on 6 MuJoCo continuous control benchmarks show that the resulting EQUIP-SAC algorithm achieves higher mean sample efficiency than SAC and two second-order policy optimization baselines. Ablation studies further highlight the benefits of curvature equilibration and trajectory-informed geometry for policy training.
