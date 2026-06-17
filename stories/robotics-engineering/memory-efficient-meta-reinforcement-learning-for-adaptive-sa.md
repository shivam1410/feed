---
title: "Memory-Efficient Meta-Reinforcement Learning for Adaptive Safety-Critical Control in Adversarial Spacecraft Proximity Operations"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17414"
authors: ["Alejandro Posadas-Nava, Richard Linares, Minduli Wijayatunga"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.17414v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17414v1 Announce Type: new Abstract: Autonomous spacecraft rendezvous and proximity operations (RPO) require controllers that guarantee safety under thrust constraints while minimizing fuel expenditure. Input-constrained control barrier functions (ICCBFs) provide a control method for nonlinear systems with actuation constraints that construct a forward-invariant safe set. Previous work has shown that learning class-$\mathcal{K}$ functions defining the ICCBF recursion via meta reinforcement learning (meta-RL) yields a robust, non-greedy approach to safety-critical control in RPO. This paper extends that framework further by investigating the performance of three recurrent network architectures (Long Short Term Memory (LSTM), Gated Recurrent Unit (GRU), Selective State Space Model (Mamba)) and two training algorithms (Proximal Policy Optimization (PPO) and Soft Actor Critic (SAC)) to identify the best setup for tuning ICCBF class-K functions via meta-RL. In addition to cooperative test cases, performance is evaluated in the presence of adversarial behavior where the target spacecraft behaves in a way that worsens the safety of the chaser spacecraft. Results indicate that state space models such as Mamba when used with PPO achieve superior task completion, safety, and fuel-savings compared to other architectures, across all cooperative and uncooperative scenarios tested.
