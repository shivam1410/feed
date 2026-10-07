---
title: "Learning from Unreliable Trajectories: Adversarially-Robust Federated Q-Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.06918"
authors: ["Sreejeet Maity, Aritra Mitra"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.06918v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

We study federated reinforcement learning in which multiple agents interact with a common Markov decision process and communicate through a central server to collaboratively learn the optimal state-action value function. Our goal is to understand whether the sample-efficiency benefits of collaboration can be retained when a fraction of the agents behave adversarially and transmit arbitrarily corrupted information. To address this problem, we introduce Robust Async-Fed-Q, an epoch-based federated learning algorithm that combines variance-reduced estimation of the Bellman optimality operator at the agents with robust aggregation at the server. We establish high-probability finite-time guarantees showing that the proposed method preserves the statistical gains of collaboration among the honest agents while tolerating adversarial corruption. In particular, the effect of the adversarial agents decreases as the amount of data collected by each honest agent grows and eventually vanishes in the infinite-sample limit. We complement these guarantees with information-theoretic lower bounds that characterize the unavoidable statistical cost of adversarial corruption, leading to the first nearly matching upper and lower bounds for adversarially robust federated reinforcement learning. We further extend our framework to accommodate single-trajectory Markovian sampling and heterogeneous partial coverage, where different agents may explore different regions of the state-action space and learning relies on their collective coverage. Finally, our epoch-based design substantially improves the best known communication complexity for federated Q-learning under asynchronous sampling.
