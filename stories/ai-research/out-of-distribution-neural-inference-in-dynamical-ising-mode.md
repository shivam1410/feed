---
title: "Out-of-distribution Neural Inference in Dynamical Ising Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03039"
authors: ["Yuan-Bin Zhu, Shuang Qiao, Shi-Ju Ran"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.03039v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03039v1 Announce Type: new Abstract: Neural networks are increasingly used to infer hidden physical structure from dynamical observations, yet it remains unclear whether their out-of-distribution performance reflects transferable physical rule learning. We address this question in a controlled inverse problem: reconstructing interaction graphs of a kinetic Ising model from Glauber magnetization trajectories. Across convolutional, graph, Transformer, and hybrid architectures, we find that data-driven training produces distinct and reproducible statistical strategies under topology and temperature shifts. Edge-population diagnostics reveal that Transformer-based models tend to preserve the link density of the training ensemble, whereas convolutional models can collapse toward sparse- or no-link predictions that appear out-of-distribution stable by exploiting the majority no-link class. Thus, high in-distribution accuracy and apparent out-of-distribution robustness do not necessarily imply a learned dynamics-to-structure rule. Instead, neural reconstruction can be governed by architecture-dependent statistical priors. Our results identify a concrete failure mode of standard data-driven learning in physical inverse problems and motivate rule-guided principles for machine-learning-assisted scientific discovery.
