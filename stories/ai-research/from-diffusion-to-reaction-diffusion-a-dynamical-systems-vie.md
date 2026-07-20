---
title: "From Diffusion to Reaction-Diffusion: A Dynamical-Systems View of Oversmoothing in Hypergraph Neural Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15773"
authors: ["Zhiheng Zhou, Mengyao Zhou, Yancheng Chen, Dengyi Zhao, Xingqin Qi, Guiying Yan"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2607.15773v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15773v1 Announce Type: new Abstract: Higher-order couplings enhance the expressive power of hypergraph neural networks (HGNNs), but they also intensify representation collapse in deep propagation due to strong multi-way feature mixing. This work investigates hypergraph oversmoothing from a dynamical-systems perspective and develops a reaction--diffusion framework for depth-resistant hypergraph learning. By defining hypergraph gradient and divergence operators, we interpret message passing as an incidence-level diffusion process. The analysis of pure diffusion shows that its continuous semiflow exponentially contracts the null-mode-free component of node representations and drives the Dirichlet energy to zero, revealing hypergraph oversmoothing as an intrinsic transverse-energy dissipation phenomenon. Motivated by this analysis, we propose Hypergraph Neural Reaction--Diffusion (HNRD), which introduces a reaction mechanism acting on the transverse component to compensate diffusion-induced dissipation and stabilize discriminative variations. We establish global well-posedness of the proposed dynamics and prove that the null-mode-free Dirichlet energy remains bounded away from zero. A forward-Euler discretization provides a practical HNRD layer with a stability condition for deep propagation. Experiments on benchmark and synthetic heterophilic hypergraphs demonstrate that HNRD consistently improves over representative hypergraph baselines. Depth, robustness, and efficiency analyses further show that HNRD preserves stable performance and nonzero Dirichlet energy under deep propagation and perturbations. These results provide a principled dynamical framework for designing deep hypergraph architectures that maintain higher-order expressiveness without representation collapse.
