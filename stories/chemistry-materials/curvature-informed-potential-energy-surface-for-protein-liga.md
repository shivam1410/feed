---
title: "Curvature-Informed Potential Energy Surface for Protein-Ligand Binding Affinity Prediction"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14217"
authors: ["Peng-Fei Sun, Chuan-Xian Ren, Hong Yan"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 76
guid: "oai:arXiv.org:2606.14217v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14217v1 Announce Type: new Abstract: Accurate prediction of protein-ligand binding affinity is essential for structure-based drug discovery. Recent geometric deep learning methods have achieved promising performance by representing protein-ligand complexes as three-dimensional graphs. However, most existing approaches mainly rely on static interaction geometry from a single bound conformation, while neglecting molecular flexibility and binding-induced conformational changes. To address this limitation, we propose a curvature-informed potential energy surface (CPES) graph neural network for protein-ligand binding affinity prediction, which incorporates physics-informed curvature representations to model conformational flexibility. CPES first derives curvature spectral descriptors from the Hessian of the potential energy surface evaluated at equilibrium configurations, whose eigenvalues define the local principal curvatures of the potential energy surface. It then uses spectral cross-attention to compare the unbound ligand and protein with the bound complex, thereby capturing binding-induced changes in conformational dynamics. In parallel, hierarchical protein-ligand interaction representations are learned from static structural features through geometry-aware message passing, soft clustering, and bidirectional cross-attention. Finally, CPES fuses the curvature-informed dynamic representations with static interaction representations for affinity regression. Extensive evaluations on multiple benchmark datasets demonstrate that CPES achieves improved predictive performance and offers physical interpretability.
