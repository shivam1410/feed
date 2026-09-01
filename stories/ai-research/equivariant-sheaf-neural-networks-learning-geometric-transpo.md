---
title: "Equivariant Sheaf Neural Networks: Learning Geometric Transport on Graphs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.28853"
authors: ["Alessio Borgi, Mario Severino, Fabrizio Silvestri, Pietro Li\\`o"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.28853v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.28853v1 Announce Type: new Abstract: Equivariant graph neural networks provide a principled way to model geometric systems, but efficient first-order architectures remain limited in how vector information can be transformed as it moves across a graph. We introduce \textsc{ESNN}, an Equivariant Sheaf Neural Network that enriches this interaction by learning directed, matrix-valued transport between neighboring vector features while preserving exact Euclidean equivariance. Rather than increasing the order of the representation, ESNN keeps scalar and vector features first-order and places the additional geometric flexibility in the edge transport itself. We characterize this transport theoretically, showing that when relative displacement is the only covariant geometric input, every linear $O(n)$-equivariant map decomposes into independent radial and tangential components, while learned covariant features enable richer feature-conditioned transformations. We also introduce controlled symmetry relaxation for systems with a preferred ambient direction, which may be prescribed or inferred from data while recovering full $E(n)$-equivariance when the directional pathway is inactive. Across particle dynamics, mesh-based simulation, point-cloud classification, and molecular property prediction, ESNN improves dynamics prediction, recovers the gravity axis when symmetry is broken, yields substantial gains on selected mesh tasks and long-horizon rollouts, and remains robust to unseen rotations. These results show that learning how geometric information is transported across edges offers a complementary route to expressive equivariant message passing without requiring higher-order representations.
