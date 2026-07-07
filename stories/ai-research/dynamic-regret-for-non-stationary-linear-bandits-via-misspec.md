---
title: "Dynamic Regret for Non-Stationary Linear Bandits via Misspecification Reductions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02891"
authors: ["Zihao Hu, Yuan Yao, Jiheng Zhang, Zhengyuan Zhou"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.02891v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02891v1 Announce Type: new Abstract: Many online decision-making problems involve both round-specific feasible actions and drifting reward models: eligible ad impressions, feasible prices, and available treatments can change over time, while user preferences, demand curves, and patient responses may evolve. Motivated by these applications, we study non-stationary linear bandits with round-specific feasible decision sets. Existing methods that obtain the optimal \(\widetilde O(T^{2/3}P_T^{1/3})\) dependence, where \(P_T\) is the path length of the reward-parameter sequence, impose an orthogonal-structure assumption on round-specific decision sets, which can be restrictive in contextual applications. We address this gap through a unified misspecification-reduction viewpoint: after partitioning the horizon into blocks, we relate each block's dynamic regret to regret against a fixed-parameter linear bandit benchmark, with the within-block parameter drift entering as bounded misspecification. Restarting algorithms with misspecification-dependent regret guarantees then yields the optimal \(T^{2/3}P_T^{1/3}\) dynamic-regret dependence for both linear bandits with general compact decision sets and \(K\)-armed contextual linear bandits.
