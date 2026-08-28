---
title: "Shared Actors Need Not Share Critics: Effects of Value Mismatch in Parallel Reinforcement Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26481"
authors: ["Zhenya Liu, Yang Meng, Zhuokai Zhao, Xuefeng Liu, Yuxin Chen"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2608.26481v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26481v1 Announce Type: new Abstract: When a single policy is trained in parallel across multiple environments of the same task, such as procedurally generated levels, randomized dynamics, or curricula, implementations commonly use one critic across all sampled environments. Yet different environments can assign different expected returns to the same input visible to the critic. A critic without environment information must then reconcile distinct value targets, systematically shifting the sampled advantages within individual environments. Using illustrative bandit models with multiple environments and a common optimal arm, we characterize how this value mismatch redistributes sampled policy updates, reinforcing unhelpful actions while attenuating or even reversing useful ones. The oracle processes using no baseline, the shared value, or the value specific to the sampled environment have the same mean logit update at a fixed policy and converge to the same optimal policy, yet their realized learning paths can differ sharply. The analysis motivates a minimal intervention: give only a logged environment index to the critic so that it can separate the value targets. Controlled CartPole and MuJoCo experiments expose the predicted shifted values, advantages, and performance gaps. In the more complex BipedalWalker and Procgen settings, the same intervention yields more stable learning and higher returns. Across all $16$ Procgen games, the multihead conditional critic improves aggregate normalized return on $600$ unseen levels per game by $40.8\%$. In conclusion, the theory identifies value mismatch as a direct mechanism through which critic sharing can degrade stochastic learning dynamics, not captured by scalar estimator variance alone, and the experiments show that conditioning on an index is broadly effective in parallel reinforcement learning.
