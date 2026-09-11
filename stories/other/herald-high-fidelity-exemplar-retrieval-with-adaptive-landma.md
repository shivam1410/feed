---
title: "HERALD: High-Fidelity Exemplar Retrieval with Adaptive Landmark Distillation for Heterophily-Aware Graph Condensation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11123"
authors: ["Sujan Chakraborty, Priyanka Saha, Saptarshi Bej"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11123v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11123v1 Announce Type: new Abstract: Graph condensation aims to produce a small surrogate graph that preserves the downstream node-classification performance of a much larger original graph. Existing methods rely on Weisfeiler-Lehman neighbourhood aggregation or gradient-based distribution matching, both of which assume that adjacent nodes share the same label, an assumption that breaks down under heterophily. We propose HERALD (High-fidelity Exemplar Retrieval with Adaptive Landmark Distillation), a gradient-free graph condensation framework that adapts the node scoring and feature selection in the condensation pipeline to the graph's measured heterophily. HERALD selects features via a joint Fisher-discriminability and activation-density criterion that down-weights aggregated representations on heterophilic graphs, and scores nodes by a weighted combination of prototype representativeness, decision-boundary proximity, and Local Intrinsic Dimensionality (LID), where the weights are driven by a smooth sigmoid function of the heterophily ratio. Nodes are then assembled into a condensed subgraph through score-ordered BFS expansion, Personalised PageRank pruning, and class rebalancing, all at an identical storage budget to BONSAI, enabling direct comparison. Experiments on eight benchmark datasets spanning homophilic and heterophilic settings show that HERALD matches or outperforms state-of-the-art condensers on heterophilic graphs and remains competitive on homophilic ones across four GNN architectures.
