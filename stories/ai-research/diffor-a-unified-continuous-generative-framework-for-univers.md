---
title: "DiffoR: A Unified Continuous Generative Framework for Universal Ordinal Regression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07599"
authors: ["Hongxu Ma, Lin Wang, Chenghou Jin, Han Zhou, Jie Zhang, Xiaoyu Yang, Chunjie Chen, Jihong Guan, Shuigeng Zhou"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.07599v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07599v1 Announce Type: new Abstract: Ordinal Regression (OR) aims to predict target values with inherent order, underpinning critical applications across diverse domains, from recommender systems to computer vision. Though having evolved from naive regression to discretization-based classification and generation, existing paradigms remain fundamentally constrained by quantization artifacts and the lack of global ordinal topological perception. These methods typically enforce rigid boundary delineations, failing to capture the non-stationary semantic transitions inherent to ordinal data. In this paper, we propose a novel paradigm where OR is formulated as a Continuous Generative Ordinal Regression task. Under the novel paradigm, we introduce DiffOR, a unified framework that leverages diffusion models to recover continuous ordinal values via iterative denoising, thereby enabling the dynamic learning of soft semantic transitions. To explicitly preserve ordinal topology, we devise a Dual-Decoupling Strategy: Spatially, Multi-scale Increment Aggregation decomposes targets into hierarchical continuous increments; Temporally, Dynamic Denoising Perception synchronizes denoising steps with feature frequencies, ensuring robust coarse-to-fine refinement. Theoretically, we show that the proposed method can significantly enhance both representation capability and mechanistic interpretability. Extensive experiments on 12 benchmarks across four domains validate DiffOR's consistent superiority over state-of-the-art methods, establishing a new standard that demonstrates strong potential as a general-purpose solution for universal ordinal regression.
