---
title: "Digital Twin-Driven Adaptive Sim-to-Real Alignment via Reinforcement Learning for Vibration-Based Bearing Health Monitoring Under Data Scarcity"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24954"
authors: ["Jinghan Wang, Yanjun Chen, Wei Zhang, Wentao Wu, Tianchen Liu, Gaoliang Peng"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24954v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24954v1 Announce Type: new Abstract: Vibration-based health monitoring of rotating machinery requires reliable fault diagnosis under operational data constraints, yet condition assessment remains challenged by structural scarcity of fault events and heterogeneous sim-to-real gaps in digital twin-generated signals. Each fault type generates impulses with distinct periodicity, amplitude modulation, and spectral character, making feature-space discrepancies fundamentally heterogeneous across fault classes. Existing domain adaptation methods apply a class-agnostic global transformation that cannot close all fault-specific gaps without distorting inter-class separability, while uniform source-target mixing introduces distributional noise into the data-abundant Normal class. These limitations stem from treating a sequential, state-dependent alignment problem as a one-shot optimization. Each corrective transformation simultaneously reshapes all class distributions, creating state dependencies that static gradient descent cannot resolve. We formulate feature alignment as a continuous-action Markov decision process solved via Proximal Policy Optimization, where the learned policy issues fault-type-specific affine corrections responsive to the current feature-space configuration, with a dual-objective reward balancing gap minimization against separability preservation. An asymmetry-aware strategy reserves real data for the Normal class while augmenting fault classes with policy-aligned simulated samples. Validation across XJTU-SY, CWRU, and a self-built slewing bearing testbed confirms the dominant gain from reinforcement learning-driven alignment, and cross-equipment linear probing achieves 92.8% without encoder retraining, demonstrating transferable monitoring capability.
