---
title: "MaD-RL: Matching Distributions for Calibrating LLMs with Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31644"
authors: ["Sourabh Kulkarni, Ksheeraj Sai Vepuri, Basar Demir, Jason Bohrer, Emily Shen, Jianfa Chen, Nan Jiang, Ankit Jain, Harihar Subramanyam, Mannat Singh, Chirag Nagpal"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.31644v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Reinforcement learning (RL) is widely used in language-model post-training to maximize rewards assigned to individual model outputs, such as scores from binary verifiers or reward models trained on human feedback. However, applications such as synthetic-data generation, fairness-related constraint satisfaction, and policy exploration require controlling the distribution of outputs across model generations rather than only maximizing expected reward. We propose a general RL-based framework for \textit{Distribution Matching} allowing matching the distribution of a latent categorical attribute of model outputs to a specified target distribution. Empirically, we demonstrate that dominant post-training recipes such as Group Relative Policy Optimization (GRPO) reduce output diversity by concentrating policy probability towards a single mode. Entropy regularization and sampling temperature can improve the spread of the distribution but have constrained effectiveness, limited to apply only in token space and toward uniform distributions. We show that prior work in this area is a specific case of Distribution Matching involving the $L_2$ divergence. We then propose reward functions for other divergences such as KL and Jensen-Shannon and motivate them with theoretical justification. Finally, we demonstrate the effectiveness of our approach on a set of experiments involving mathematical reasoning and programming.
