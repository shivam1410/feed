---
title: "Skill-Latent Rewards: LLM-Guided Reward Formulation for Hierarchical Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18597"
authors: ["Maryam Shoaeinaeini, Brent Harrison"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18597v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Long-horizon reinforcement learning under sparse and delayed feedback remains an open challenge. Existing return-decomposition methods redistribute episodic rewards to ease credit assignment, but they operate on raw state--action transitions and disregard the subgoal structure that governs meaningful progress in complex tasks. We propose Skill-LR, a hierarchical reinforcement learning framework in which a vision--language model identifies the agent's active subgoal at each timestep and a large language model generates a matching latent reward formulation through a two-stage prompting process. By conditioning reward signals on the currently active subgoal, Skill-LR produces stage-specific credit that evolves with the hierarchical plan, reducing temporal variance and improving sample efficiency. On multi-stage MiniGrid and BabyAI benchmarks, including DoorKey and Unlock-to-Unlock, Skill-LR converges faster and more reliably than sparse environmental rewards and strong credit-assignment baselines such as RUDDER and LaRe, demonstrating that subgoal-aligned latent rewards offer a principled path toward stable, interpretable credit assignment in long-horizon tasks.
