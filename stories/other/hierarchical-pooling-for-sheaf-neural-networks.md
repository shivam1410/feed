---
title: "Hierarchical Pooling for Sheaf Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20932"
authors: ["Dionisia Naddeo, Carlo Abate, Pietro Li\\`o, Nicola Toschi, Filippo Maria Bianchi"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20932v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20932v1 Announce Type: new Abstract: Sheaf Neural Networks (SNNs) generalize Graph Neural Networks (GNNs) by replacing scalar node signals with stalk-valued signals and by using restriction maps to measure compatibility across edges. Unlike standard graph diffusion, which encourages neighboring node features to become similar, sheaf diffusion promotes consistency through the restriction maps and can therefore model more general relationships between neighboring nodes. However, existing sheaf neural architectures mainly operate at a fixed graph resolution and do not provide a principled pooling mechanism for building hierarchical representations. In this paper, we introduce Hierarchical Sheaf Pool (HiSP), a sheaf-aware pooling framework based on local spectral coarsening. Given a partition of the graph, HiSP constructs each coarse stalk by projecting fine stalk-valued features onto the low-frequency eigenmodes of the cluster-internal sheaf Laplacian. These local modes define a cochain-level prolongation map, which allows the fine sheaf energy to be represented on the coarse space through a Galerkin operator. We further analyze the approximation induced by coarsening by separating truncation loss, due to discarded local modes, from realization loss, due to representing the projected operator as a coarse sheaf. Finally, we implement HiSP as a GNN pooling layer compatible with SNNs and provide a PyG implementation supporting batching, lifted sheaf Laplacians, and hierarchical architectures.
