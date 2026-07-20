---
title: "Stochastic Reset Pathfinding: Path-Level Regret for Cascading Bandits over Graph Paths"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15440"
authors: ["Guni Sharon, Wei Zhang"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.15440v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15440v1 Announce Type: new Abstract: We introduce Stochastic Reset Pathfinding (SRP), an episodic learning problem on a known directed graph with unknown stationary edge success probabilities. In each episode, the agent commits to a source-to-goal path, and any edge failure during execution resets it to the source. SRP captures settings such as entanglement distribution in quantum repeater networks, payment routing on the Lightning Network, and delivery in unreliable mesh networks. We show that the global-reset structure makes the optimal policy open-loop, placing SRP within the combinatorial cascading bandit (CCB) framework. We propose a Log-Dijkstra meta-algorithm with UCB (PathUCB) and Thompson Sampling (PathTS) instantiations. Our main technical result is a path-level regret bound for PathUCB that decomposes regret over suboptimal paths via a per-path complexity C(pi) combining each edge's prefix and suffix reliability. The bound is complementary to the edge-level CCB bound and more informative on structured graphs with polynomially many source-to-goal paths. Experiments on quantum-network, layered-DAG, grid-world, and Erdos-Renyi domains support the theory and show that PathTS typically achieves the best empirical performance among the algorithms tested. We then exhibit an adversarial instance on which PathTS fails to converge, consistent with a known exponential obstruction for combinatorial Thompson Sampling on multiplicative-reward problems. We recommend PathTS as the practical default while cautioning that adversarial instances exist.
