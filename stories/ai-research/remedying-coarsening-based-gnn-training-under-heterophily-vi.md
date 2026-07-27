---
title: "Remedying Coarsening-Based GNN Training under Heterophily via Adaptive Complementary Enhancement"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21885"
authors: ["Guoming Li, Jian Yang, Xukun Wang, Zixiao Wang, Shangsong Liang, Yifan Chen"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.21885v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21885v1 Announce Type: new Abstract: Coarsening-based training for graph neural networks (GNNs), i.e.\ training on coarsened graphs rather than the original large ones, has become a promising direction for scaling GNNs to massive graphs. However, prior work has been evaluated almost exclusively on \textit{homophilic} graphs, leaving the more challenging \textit{heterophilic} settings underexplored. We show, both empirically and theoretically, that existing coarsening-based training methods suffer significant performance degradation on heterophilic graphs due to inevitable loss of graph information during coarsening. To address this, we propose {\bf A}daptive {\bf C}omplementary {\bf E}nhancement, a plug-and-play, model-agnostic strategy that reintegrates the information discarded in coarsening: ACE learns a projector for re-constructing original node features and applies \textit{anisotropic structural regularization} to embed local heterophily. We further adopt \textit{homoscedastic uncertainty weighting} to adaptively balance the combined training objective of primary coarsened-graph training loss and full-graph auxiliary loss with augmented node features re-constructed by the heterophily-aware projector. Extensive experiments show that ACE drives consistent gains on heterophilic benchmarks while preserving competitive results on homophilic graphs with minimal computational overhead. Code is available at the GitHub repository: https://github.com/vasile-paskardlgm/ACE.
