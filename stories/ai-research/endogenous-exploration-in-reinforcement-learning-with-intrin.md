---
title: "Endogenous Exploration in Reinforcement Learning with Intrinsic Curiosity"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05650"
authors: ["Armando Vieira"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.05650v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05650v1 Announce Type: new Abstract: We propose a reinforcement learning framework in which exploration is driven by intrinsic curiosity, designed for scenarios where environments are non-stationary and rewards are sparse, delayed, uninformative, or absent. In our model, action selection is guided by a combination of external rewards and an epistemic motivation mechanism that biases the agent toward structured exploratory directions. The central hypothesis is that effective exploration emerges at intermediate levels of incoherence, while performance degrades under both overly rigid and overly disordered dynamics. To test this idea, we implement the framework on top of a Liquid State Machine (LSM) substrate and evaluate it on two standard benchmarks: the discrete-action LunarLanderv2 and the continuous-control BipedalWalkerv3. The proposed method achieves competitive performance on both tasks relative to established deep RL algorithms, including Proximal Policy Optimization (PPO) and Intrinsic Curiosity Module (ICM). We further show that the curiosity window is not recovered in Active Inference agents under the same analysis, suggesting that the proposed dynamics capture a distinct exploration regime
