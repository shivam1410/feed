---
title: "NGN: Learning Neural Network Size as a Differentiable Count"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27291"
authors: ["Lixing Li"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.27291v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27291v1 Announce Type: new Abstract: Neural network size is usually chosen before training, separating architecture selection from weight optimization. We introduce the Neurogenesis Network (NGN), a differentiable parameterization for learning how many ordered structural components a model should use. For each ordered component group, one learnable boundary selects an active prefix while the model parameters are trained. The boundary can grow from a compact initialization and can be deployed by discarding components beyond the learned boundary. Controlled experiments examine convergence of the learned boundary, the performance of deployed prefixes, and comparisons with fixed-size models and alternative approaches to learning capacity. We then apply the same mechanism to MLPs, convolutional and graph networks, Transformers, state-space models, LoRA, and adapters. Across these settings, deploying only the learned prefix usually changes performance little, and the selected architectures perform similarly to fixed models trained at the same size. These results show that structural capacity can be optimized directly as a count.
