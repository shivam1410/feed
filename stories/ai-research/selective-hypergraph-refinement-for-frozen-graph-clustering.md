---
title: "Selective Hypergraph Refinement for Frozen Graph Clustering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03265"
authors: ["Zimo Si"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.03265v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03265v1 Announce Type: new Abstract: Existing graph-clustering methods typically improve clustering performance by optimizing model parameters and node representations. Effective means of further improving the clustering results of an already trained and frozen model, however, remain limited. We study post-processing for frozen graph clustering. After checkpoint fixation, the procedure uses no labels and updates neither model parameters, node representations, nor the original graph structure. Instead, it exploits an attribute hypergraph to supplement higher-order relations that ordinary graphs cannot readily express, thereby refining existing cluster assignments. Because global hypergraph refinement can yield both performance gains and erroneous updates, we propose Selective Hypergraph Refinement (SHR). The method generates candidate residual directions from the hypergraph and evaluates their reliability using graph structure, node attributes, and matched-null evidence. It updates only nodes with sufficient support and otherwise retains their original assignments. Further analysis shows that whether a node changes cluster is jointly governed by its native assignment gap and the directional strength of the refinement. In a controlled common-suite evaluation, 13 of 15 backbone-dataset cells had a positive mean macro gain, one produced exact no-action, and one was negative. The cell-equal macro gain was 0.066 pp (95% bootstrap CI, [0.030, 0.107] pp), while only 0.209% of hard assignments changed on average. A broader 15-combination native-interface evaluation yielded a macro gain of 0.137 pp at a mean change ratio of 0.375%. These results indicate that frozen clustering outputs retain a limited but measurable refinement space after training. The effect is heterogeneous across backbone-dataset pairs, and broader coverage also increases exposure to negative transfer.
