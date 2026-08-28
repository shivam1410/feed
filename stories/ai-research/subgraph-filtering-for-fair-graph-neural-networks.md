---
title: "Subgraph Filtering for Fair Graph Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26437"
authors: ["Haohui Lu, jiyuan Tian, Fangyu Zhou, Shahadat Uddin"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26437v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26437v1 Announce Type: new Abstract: Graph neural networks (GNNs) can exhibit unfair behavior even when sensitive attributes are excluded from node features, because graph topology and message passing propagate group-correlated signals under sensitive homophily. Existing fairness-aware GNN methods mainly constrain representations or prediction distributions at a global level, without explicitly controlling the local structural pathways through which biased information propagates during aggregation. We propose Subgraph Filtering for Fair Graph Neural Networks (SF-GNN), a lightweight and architecture-agnostic framework that mitigates structural bias at its source. SF-GNN identifies bias-prone edges by combining sensitive homophily with structural propagation amplifiers, including hub participation and triadic closure. It then incorporates stochastic edge filtering into each message-passing step to selectively downweight or remove these edges while preserving the remaining graph structure. Training further incorporates a statistical-parity regularizer with a warm-up schedule to stabilize optimization. Experiments on five benchmark datasets show that SF-GNN achieves consistent fairness improvements while maintaining competitive predictive performance, leading to a better fairness--accuracy trade-off than recent fairness-aware GNN baselines.
