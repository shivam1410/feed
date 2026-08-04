---
title: "Nonlinear Laplacians Improve Signed-Directed Graph Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00836"
authors: ["Ali Parviz, Yuichi Yoshida"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2608.00836v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00836v1 Announce Type: new Abstract: While signed-directed graphs have been studied using linear Laplacians in the design of graph neural networks, relatively little research has focused on developing non-linear Laplacian operators for such networks. We introduce a non-linear Laplacian operator specific to signed and directed networks (NLSD). This non-linear operator extends the concepts of the signed Laplacian for signed graphs and the Laplacian for directed graphs. The NLSD calculates node-specific potentials based on features More precisely, if the potential discrepancy is not aligned with the edge direction, we ignore it (and vice versa) leveraging message-passing techniques only across edges where potential discrepancies align with the edge's direction. Utilizing this novel operator, we propose an efficient spectral GNN framework (NLSD-GNN). We conducted comprehensive evaluations focusing on node classification and link prediction, examining scenarios involving signed, directional, or both types of information. Our findings reveal that this spectral GNN framework not only integrates signed and directional data effectively but also achieves superior performance across diverse datasets.
