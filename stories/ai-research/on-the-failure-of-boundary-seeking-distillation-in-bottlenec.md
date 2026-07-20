---
title: "On the Failure of Boundary-Seeking Distillation in Bottlenecked Generative Architectures"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15919"
authors: ["Mohamed Amine Kina"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.15919v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15919v1 Announce Type: new Abstract: Data-free knowledge distillation transfers the knowledge encoded in a teacher model to a student model without access to the original training data. Prior work such as Contrastive Abductive Knowledge Extraction (CAKE) achieves this for classifiers by synthesizing samples near the teacher's decision boundary. In this work, we investigate whether this boundary-seeking principle extends to autoencoder distillation through experiments on the MNIST dataset . To enable a direct comparison, we reformulate continuous reconstruction as a dense, per-feature classification task, allowing the decoder to output categorical logits. We show that boundary-seeking objectives are fundamentally ill-posed in bottlenecked generative architectures. CAKE operates on a single, instance-level objective, but a decoder acts as an array of tightly coupled, feature-level classifiers constrained by a shared low-dimensional bottleneck. Independently sampling contrastive targets for these coupled outputs violates the geometry of the learned latent manifold and produces severe gradient conflicts instead of informative boundary samples. Manifold-aware synthesis bypasses these conflicts entirely and establishes an effective baseline for data-free generative distillation.
