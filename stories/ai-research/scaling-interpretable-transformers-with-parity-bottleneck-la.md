---
title: "Scaling Interpretable Transformers with Parity Bottleneck Layers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20652"
authors: ["Andrew Mack, Kraig Yuheng Tou, Mark Henry, Zhengxun Wu, Lauren Greenspan"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.20652v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20652v1 Announce Type: new Abstract: Language models are thought to exhibit the phenomenon of superposition, representing many more features than dimensions in their residual streams. Sparse autoencoders (SAEs) are designed to recover such features post-hoc, but training models that are interpretable by construction has remained impractical, as a per-layer over-complete bottleneck is prohibitively expensive in both memory and compute. To overcome this issue, we introduce the ParityTransformer, a GPT-2-scale architecture whose intermediate representations are efficient and wide / sparse by design. At each layer, a Deep Parity Bottleneck (DPB) replaces a learned over-complete basis with a parameter-free algebraic dictionary, providing a deterministic incoherence guarantee and eliminating the memory requirements that have prevented per-layer interpretable bottlenecks at scale. A DPB is a hierarchically structured sparse bottleneck which efficiently enforces sparsity using a multi-level mixture-of-experts approach: a hardware-aware implementation that closes the cost gap between activation sparse and dense training to a manageable interpretability tax. Empirically, ParityTransformers perform at least as well as post-hoc SAEs on sparse probing tasks, while out-performing on measures of feature absorption, steering effectiveness, and fine-grained causal interventions. Because subsequent computation acts only on features that survive the sparse bottleneck, the ParityTransformer's features are native to the model's forwards pass by construction, addressing the question of whether SAEs probe features the model actually uses during computation. We see this as a step toward training models whose internal representations are interpretable by design rather than recovered post hoc.
