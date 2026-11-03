---
title: "FB-MOAC: A Reinforcement Learning Algorithm for Forward-Backward Markov Decision Processes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00130"
authors: ["Mohsen Amidzadeh, Mario Di Francesco"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00130v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Reinforcement learning (RL) algorithms are effective in solving problems that can be modeled as Markov decision processes (MDPs). These algorithms primarily target forward MDPs whose dynamics evolve over time from an initial state. However, several important problems in different scenarios including stochastic control and network systems exhibit both a forward and a backward dynamics. As a consequence, they cannot be expressed as a standard MDP, thereby calling for a novel theory for RL in this context. Accordingly, this work introduces the concept of Forward-Backward Markov Decision Processes (FB-MDPs) for multi-objective problems, develops a novel theoretical framework to characterize their optimal solutions, and proposes a general forward-backward step-wise template that allows to adapt RL algorithms for FB-MDP problems. A Forward Backward Multi Objective Actor Critic (FB-MOAC) algorithm is introduced accordingly to obtain optimal policies with guaranteed convergence and a competitive rate with respect to standard approaches in RL. FB-MOAC is evaluated on diverse use cases in the context of mathematical finance and mobile resource management. The obtained results show that FB-MOAC outperforms the state of the art across different metrics, highlighting its ability to learn and maximize rewards.
