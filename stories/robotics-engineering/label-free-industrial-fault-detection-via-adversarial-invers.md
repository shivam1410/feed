---
title: "Label-free Industrial Fault Detection via Adversarial Inverse Reinforcement Learning: A System for Run-to-Failure Prognostics"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22987"
authors: ["Dhiraj Neupane, Mohamed Reda Bouadjenek, Richard Dazeley, Sunil Aryal"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 59
guid: "oai:arXiv.org:2607.22987v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22987v1 Announce Type: new Abstract: Machinery fault detection (MFD) remains heavily reliant on supervised learning, which struggles with the scarcity of fault labels in real-world settings. While reinforcement learning (RL) offers a framework to model the sequential nature of degradation, current ``RL-based'' MFD methods reduce the problem to a static contextual bandit (CB) formulation: by ignoring state transitions and discarding the temporal discount factor, they collapse to standard supervised classification. We propose an adversarial inverse reinforcement learning (AIRL) framework that treats MFD as an offline IRL problem. Unlike reconstruction-based approaches that rely on static error margins, or CBs that ignore dynamics, our method recovers an intrinsic "health" reward directly from observational state transitions, requiring neither manual reward engineering nor fault labels. On three run-to-failure benchmarks (HUMS2023, IMS, XJTU-SY), AIRL is the only method achieving non-saturated post-detection consistency across all datasets, while CB baselines fail to detect gradual degradation and reconstruction models collapse into always-anomalous states. Code and data: https://github.com/dhirajneupane/AIRL-MFD-DN.
