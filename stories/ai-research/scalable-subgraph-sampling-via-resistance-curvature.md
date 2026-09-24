---
title: "Scalable Subgraph Sampling via Resistance Curvature"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27209"
authors: ["Chaoqun Fei, Tinglve Zhou, Tianyong Hao, Yangyang Li"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2609.27209v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27209v1 Announce Type: new Abstract: Subgraph sampling reduces the training cost of large-scale graph neural networks, but sampling criteria may overlook the geometric roles of edges. We propose a resistance-curvature-guided sampling framework built on ERC-LG, a curvature approximation method for large-scale graphs. ERC-LG combines Johnson-Lindenstrauss projections with regularized multi-GPU batched conjugate gradient solvers, avoiding explicit Laplacian pseudoinverse computation and full embedding storage. The resulting curvature informs node- and edge-sampling probabilities for constructing GNN training subgraphs. Experiments show numerical agreement with pseudoinverse-based curvature and reduced runtime compared with CG-only computation. ERC-LG-based sampling variants achieve the highest mean accuracy on six of seven real-world datasets in downstream node classification.
