---
title: "SAGE: Surrogate-gradient Adaptation via Attention-Guided Entropy for Spiking Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13702"
authors: ["Kiran Nair, Rodrigue Rizk, KC Santosh"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.13702v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13702v1 Announce Type: new Abstract: Spiking neural networks (SNNs) offer an energy-efficient alternative to conventional deep neural networks by exploiting sparse event-driven computation, but their training remains challenging because the non-differentiable spike function requires surrogate gradients whose fixed shape may be suboptimal across layers and training stages. In this work, we introduce SAGE, an uncertainty-modulated surrogate-gradient mechanism for Transformer-based SNNs. SAGE estimates block-level uncertainty from normalized self-attention entropy and uses this signal to adapt the surrogate-gradient slope during training while leaving the inference model unchanged. By modulating only the training-time surrogate parameter, the proposed method preserves the original architecture and deployment cost while improving optimization flexibility. Experiments on CIFAR-10/100 demonstrate that SAGE achieves improved accuracy over fixed-surrogate baselines, with results up to 1-2\% consistent gains across multiple simulation time steps. These results highlight the potential of attention-derived uncertainty as a lightweight training signal for adaptive surrogate-gradient learning in transformer-based SNNs.
