---
title: "Gradient Smoothing: Coupling Layer-wise Updates for Improved Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30813"
authors: ["Haoming Meng, Anton Sugolov, Vardan Papyan"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.30813v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30813v1 Announce Type: new Abstract: Deep neural networks with repeated architectural blocks, such as transformers, often exhibit structured relationships across layers that emerge during training. Motivated by this observation, we introduce \emph{Depth-wise Gradient Augmentation}, a general optimization paradigm in which the update applied to each layer is obtained by transforming the collection of block-wise optimizer updates along the depth dimension. Within this framework, we study \emph{Gradient Smoothing}, a family of depth-wise smoothing methods, and instantiate it with a simple local \emph{Window Smoothing} operator. The resulting method operates directly on block-wise updates produced by arbitrary base optimizers (e.g., SGD, Adam, Muon), incurs minimal computational overhead, and is compatible with existing optimization pipelines. We evaluate Gradient Smoothing across a diverse set of architectures and training regimes, including language model pretraining, RL post-training of LLMs for reasoning, diffusion modeling, and image classification with Vision Transformers. Across these settings, Gradient Smoothing consistently improves optimization and generalization performance without modifying model architectures or training objectives. We further show that it promotes more structured representation evolution across depth, consistent with its interpretation as a structured depth-wise preconditioning method. Together, these results establish Depth-wise Gradient Augmentation as a promising framework for exploiting cross-depth structure in optimization and demonstrate Gradient Smoothing as a simple and broadly applicable instantiation.
