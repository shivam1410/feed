---
title: "Unlearning on Spatio-Temporal Graphs through Subgraph Virtual Edge Reconstruction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29369"
authors: ["Qiming Guo, Wenbo Sun, Chen Pan, Ye Wang, Wenlu Wang"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.29369v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29369v1 Announce Type: new Abstract: Spatio-temporal graphs are widely used in modeling complex dynamic processes such as temporal forecasting, molecular dynamics, and healthcare monitoring. Recently, stringent privacy regulations such as GDPR and CCPA have introduced significant new challenges for existing spatio-temporal graph models, requiring complete unlearning of unauthorized data. Since each node in a spatio-temporal graph diffuses information globally across both spatial and temporal dimensions, existing unlearning methods primarily designed for static graphs and localized data removal cannot efficiently erase a single node without incurring costs nearly equivalent to full model retraining. To address this, we propose CallosumNet, a spatio-temporal graph unlearning framework biologically inspired by the corpus callosum structure. CallosumNet makes two key technical contributions: (1) it reconstructs subgraphs using biologically-inspired virtual edges; and (2) it restores interlinked spatio-temporal dependencies among subgraphs via a lightweight meta-graph integration layer. Empirical results on four diverse real-world datasets show that CallosumNet achieves complete unlearning while maintaining accuracy very close to the gold model. The code is publicly available at https://github.com/wenlu-lab/STGraphUnlearning.
