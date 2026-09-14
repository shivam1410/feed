---
title: "Granularity-Adaptive Credit Assignment for Long-Horizon LLM Agent Reinforcement Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12424"
authors: ["Taoran Liang, Yang Liu, Shang Luo, Yingguang Yang, Rongrong Zhang, Yingzong Min, Yulin Huang, Jianshen Zhang, Yongzhi Qi, Kefu Xu, Congjing Ran, Bin Chong"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12424v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12424v1 Announce Type: new Abstract: Reinforcement learning is now the standard way to train large language model agents on long-horizon tasks, where dozens of interdependent actions precede a single sparse reward. Critic-free, group-relative methods such as GRPO suit this regime, but they broadcast one trajectory-level scalar to every step and cannot say which decision drove the outcome. GiGPO recovers a step-level signal by grouping time steps that share an anchor state, yet it merges the step- and episode-level estimates under one fixed weight, spending the same resolution on a pivotal branching decision as on a routine, near-deterministic transition. We argue that the right resolution is state-dependent, and propose GACA, a critic-free estimator whose granularity follows an uncertainty-based criticality proxy. GACA scores every step by the negative log-likelihood its own rollout already records, then blends the two advantages with a per-step weight that grows with that score, so the gradient places more weight on the fine-grained signal at above-average NLL and on the episode-level signal below it. We derive an exact risk decomposition for the implemented mixture and show that sufficiently small modulation improves on fixed mixing under positive directional alignment. A separate conditional result bounds local action-value variation using expected NLL, while an error-projection analysis characterizes when mixing adds value beyond scalar uncertainty reweighting. On ALFWorld and WebShop, GACA improves task success over GRPO and GiGPO at both 1.5B and 7B scales.
