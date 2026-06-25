---
title: "Convex--Concave Quadratic Spectral Filtering for Graph Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24956"
authors: ["Ranhui Yan, Jia Cai, Mengzhu Chen, Haodong Yang"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.24956v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24956v1 Announce Type: new Abstract: Spectral graph neural networks (GNNs) interpret message passing as frequency-selective filtering. While low-order spectral filters are efficient, their limited selectivity often leads to weak attenuation outside the passband, whereas high-order alternatives introduce optimization challenges. We propose DCQ-GNN, a spectral GNN based on a compact bank of adaptive convex--concave quadratic filters. By restricting the filter order to two while explicitly exploiting complementary curvature, DCQ-GNN improves spectral selectivity as quantified by Dirichlet energy and entropy measures without resorting to high-order polynomial expansions. The model fuses filter outputs through a node-adaptive gating mechanism to enable node-wise structure-aware spectral selection. We provide a formal spectral analysis grounded in Dirichlet energy attenuation, von Neumann entropy, and curvature polarity, and derive explicit characterizations of filter behavior across varying levels of homophily and structural perturbations. Extensive benchmarks on 10 datasets show that DCQ-GNN ties for the top average rank (3.0) on heterophilic graphs and obtains the second-best rank (4.2) on homophilic graphs, remaining competitive with representative high-order polynomial spectral filters. Furthermore, under strong structural perturbations, DCQ-GNN exhibits substantially smaller performance degradation compared to both first-order and high-order baselines. These results demonstrate that curvature-aware quadratic banks provide a robust and efficient alternative to high-order spectral models while preserving optimization stability and computational efficiency.
