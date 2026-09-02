---
title: "Geometry-aware Latent Autoregressive Generative Model for PDEs in Complex Domains"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.00297"
authors: ["Zi Wang, Minghui Xu, Tapan Mukerji"]
date: "Wed, 02 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.00297v1"
image: ""
generated: "2026-09-02T19:06:18+05:30"
---

arXiv:2609.00297v1 Announce Type: new Abstract: Solving multiphysics partial differential equations (PDEs) remains a major challenge in scientific computing, especially for highly complex $\mu$m-scale tortuous geometries critical to energy and chemical engineering. We address this challenge by proposing a Geometry-aware Latent Autoregressive generative Model for PDEs (GeoLAMP) for solving physics within highly irregular and tortuous structures. GeoLAMP introduces a dual-encoder architecture on graph representations to jointly capture global topology and fine-scale geometric features, enabling an effective transition from real-space fields to compact latent representations. In the latent space, we propose a causal self-attention transformer with flow matching to model temporal dynamics, allowing stable and scalable block-wise autoregressive prediction. A flexible decoder reconstructs high-resolution physical fields on arbitrary points. We establish three multiphysics benchmark datasets in complex geometries, covering reactive flow, heat convection, and elasticity. GeoLAMP consistently achieves the most stable autoregression performance on these datasets, maintaining low errors throughout the entire rollout horizon. Our results provide a systematic study of geometry-aware learning for PDEs in $\mu$m-scale complex geometries and offer new insights into block-wise time marching of latent autoregressive PDE modeling via a flow matching framework.
