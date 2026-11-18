---
title: "When Does Discrete Ricci Curvature Help? An Edge-Level Analysis of Curvature-Enhanced GCNs for PPI Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.21849"
authors: ["Clara Joswig, Elham Gholamzadeh, Ghazal Mostofi, Nico Scherf"]
date: "Wed, 18 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.21849v1"
image: ""
generated: "2026-11-18T19:12:26+05:30"
---

Curvature-enhanced graph convolutional networks (CGCN) incorporate Ollivier-Ricci curvature (ORC), grounded in optimal transport theory, into message passing, motivated by the claim that curvature-weighted edges alleviate "over-squashing" at structural bottlenecks. But does CGCN's improvement actually come from mitigating over-squashing? We investigate this on four real-world protein-protein interaction (PPI) datasets, comparing CGCN against a standard GCN at the level of individual edges rather than aggregate metrics alone. While CGCN improves aggregate AUC, AUPR, and F1 across all four datasets, this gain is concentrated almost entirely on low-degree edges, while performance on low-curvature (bottleneck) edges systematically degrades in three of four datasets, the opposite of what the over-squashing motivation predicts. Examining the learned edge-weight function directly, together with clustering-validity metrics, edge-distance ratios, and a layer-depth ablation across four depths, we find evidence for an alternative account: curvature-weighting sharpens the separation between clusters, which improves intra-cluster predictions at the cost of inter-cluster (bottleneck) ones. We test this account against topologically defined communities rather than the classification labels used elsewhere. Additionally, we offer practical guidance on when to prefer CGCN over standard GCN, depending on whether intra- or inter-cluster predictions matter most.
