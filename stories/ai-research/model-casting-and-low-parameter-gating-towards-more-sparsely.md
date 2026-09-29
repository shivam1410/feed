---
title: "Model Casting and Low-Parameter Gating: Towards More Sparsely Activated FFNs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31975"
authors: ["Maria Lomeli, Antoine Groudiev, Matthijs Douze, Lo\\\"ic Cabannes, Pierre Emmanuel Mazar\\'e, Fran\\c{c}ois Fleuret, Maximilian Beck, Gergely Szilvasy, Naila Murray, Herv\\'e J\\'egou"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.31975v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

This paper introduces model casting, a mid-training recipe that drastically sparsifies the activations within the Feed-Forward Network (FFN) layer. With this strategy, at inference time, we first compute the output of the gating matrix and, thanks to its high sparsity, we avoid computations with the two other matrices, reducing the FLOP count by up to 3x. While this theoretical speedup is an upper bound, model casting translates into significant speedups both on CPU and GPU. We then introduce LoPA Gating, a new FFN design that increases the maximum theoretical speedup. It is a low-FLOPs parameterization of the gating matrix that overcomes the 3x cap by allocating fewer FLOPs and parameters to the gating matrix, compared to the two other FFN matrices that are sparsely activated. We consider two cases: (i) we cast a pre-trained model with a sparsity inducing activation; (ii) we train with LoPA from scratch. In all settings, we significantly outperform existing pruning solutions and regular RELU-fication. For instance, at matched quality, we achieve a 3.2x FLOP speedup with LoPA Casting, against 1.6x at best for competing methods top-p and TEAL. Using dedicated kernels, we achieve an actual 3.31x speed-up on GPU at 90% sparsity, past the 3x ceiling of standard gating; RELU-fication, meanwhile, plateaus below 80% sparsity.
