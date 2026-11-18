---
title: "Adaptive Memory for Online Reinforcement Learning under Sparse Model Changes"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21879"
authors: ["Sreejeet Maity, Sukanya Modak, Leonardo F. Toso"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21879v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

We study the discounted reinforcement learning (RL) problem in a setting where the underlying environment changes between deployments. Each deployment provides $H$ observations from a fixed MDP. The reward function and transition kernel are fixed within each deployment. Across deployments, at most an $\epsilon >0$ fraction of the reward and transition kernel entries may change. In this setting, learning each model to deploy from scratch may discard useful observations from past deployments, whereas pooling all past observations can bias the estimates of entries that have already changed. We then propose an algorithm that for each state and action pair, selects how much history to reuse to estimate the reward and probabilities of the next state. We start with observations from the current deployment and add earlier deployment observations one at a time, the most recent first. After each addition, we check whether a single average reward agrees with the estimates from all histories considered until that point. We apply the same check to the distribution of next states. For each estimate, we leverage the last history that passes these aforementioned checks. The optimal control policy is then computed on top of the fitted MDP. We characterize the average gap between the optimal return and the return of the learner's policies over a finite number of deployments. We demonstrate that when $0< |S|\epsilon \leq 2$, with $|S|$ being the cardinality of the state space, our algorithm needs only the observations from the most recent $O(1/\epsilon)$ deployments, and achieves a long-run average gap of at most $\widetilde{O}(\sqrt{\epsilon/H})$.
