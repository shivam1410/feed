---
title: "Anticipatory Reinforcement Learning for Trajectory Tracking"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03132"
authors: ["Georg Sch\\\"afer, Jakob Rehrl, Stefan Huber, Simon Hirlaender"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.03132v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03132v1 Announce Type: new Abstract: Deep reinforcement learning (DRL) in industrial control often suffers from lag and overshoot due to purely reactive control based on the current tracking error. To achieve anticipatory control without high computational overhead, we introduce a predictive formulation that augments the DRL state space with target velocities and future reference horizons. Evaluating eight configurations using proximal policy optimization (PPO) on a 1-degree-of-freedom (1-DoF) helicopter testbed, simulation results showed a 9-fold error reduction, lowering the mean absolute deviation from 2.73{\deg} to 0.31{\deg}. However, zero-shot transfer to physical hardware revealed a sim-to-real gap. Interestingly, a simpler configuration using a single, further look-ahead horizon matched the real-world top performance of the most complex model (1.11{\deg}). Overall, evaluating various combinations of prediction horizons and target velocities demonstrated that highly granular predictive data is not necessarily required for physical transfer.
