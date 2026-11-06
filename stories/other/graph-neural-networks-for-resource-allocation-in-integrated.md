---
title: "Graph Neural Networks for Resource Allocation in Integrated Sensing and Communication"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07277"
authors: ["Junyu Liao, Lili Chen, Tian Han, Jamie Evans"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07277v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

In vehicular integrated sensing and communication (ISAC) networks, each service-provider vehicle uses a limited power budget to serve multiple sensing targets and communication receivers. Maximizing the communication sum-rate subject to sensing signal-to-interference-plus-noise ratio (SINR) constraints is nonconvex, and iterative optimization is costly to rerun for every network layout. This paper proposes a graph neural network (GNN)-based power allocation algorithm, termed GNN-ISAC. Concretely, GNN-ISAC addresses the aforementioned problem by considering two distinct edge types in the graph representation, one capturing the inter-provider interference, the other representing the intra-provider power-budget sharing. GNN-ISAC is trained without labels using a sensing-penalized sum-rate loss. We also adapt the weighted mean-square error minimization (WMMSE) algorithm to this problem by introducing a sensing-power reservation step. Simulation results show that GNN-ISAC achieves communication sum-rates close to WMMSE with low sensing-link violation rates and much less computation. It also outperforms an existing heterogeneous GNN and a channel-blind baseline, and generalizes to larger networks without retraining.
