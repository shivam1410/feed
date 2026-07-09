---
title: "UP: Unbounded Positive Asymmetric Optimization for Breaking the Exploration-Stability Dilemma"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06987"
authors: ["Chongyu Fan, Pengfei Liu, Jingjia Huang, Sijia Liu, Yi Lin"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.06987v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06987v1 Announce Type: new Abstract: Reinforcement learning (RL) has become the standard paradigm for enhancing the complex reasoning capabilities of large language models (LLMs). To achieve sample efficiency, modern RL frameworks rely on importance sampling (IS). However, these algorithms suffer from an exploration-stability dilemma. Pure IS often leads to catastrophic training instability, while standard clipping mechanisms used to mitigate this instability strictly constrain the policy update budget. By formalizing the concept of Probability Capacity (Cap), we reveal that conservative clipping structurally stifles exploration by prematurely truncating the update budget for correct but low-confidence reasoning paths. To break free from these constraints, we propose Unbounded Positive Asymmetric Optimization (UP), a universal and plug-and-play objective. UP theoretically restructures the optimization process by anchoring the policy to its current state via the stop-gradient operator. This asymmetric design unleashes unclipped, stable gradients for positive advantages to maximize exploration, while maintaining standard clipping safeguards for negative advantages to prevent training instability. Furthermore, our formulation readily extends across different optimization granularities, including token-level (GRPO, DAPO) and sequence-level (GSPO) frameworks. Extensive experiments demonstrate that UP enhances exploration capacity and achieves superior reasoning accuracy across diverse RL algorithms (DAPO, GSPO, and GRPO), model architectures (Dense, MoE, and vision-language), and training modalities (language and multimodal), validating UP as a truly universal plug-and-play enhancement for RL-based training.
