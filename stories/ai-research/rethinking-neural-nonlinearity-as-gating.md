---
title: "Rethinking Neural Nonlinearity as Gating"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03148"
authors: ["Muhammad Sabih, Frank Hannig, J\\\"urgen Teich"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.03148v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03148v1 Announce Type: new Abstract: Activation functions are considered an essential primitive for neural nonlinearity, i.e., they enable neural networks to serve as universal approximators. In this paper, we show that this nonlinearity can also be achieved by input-conditioned threshold gating through branches as a universal primitive. We demonstrate that standard activations -- whether piecewise-linear (ReLU, PReLU, Hardtanh) or smooth (SiLU, Sigmoid, Tanh, GELU) -- are in fact instances of a single Threshold Gating (TG) primitive. For softmax, we show that it admits an exact TG conversion via its equivalent per-element Sigmoid form. We then validate these equivalences by converting pretrained networks across CNNs, transformer-based models, and recurrent architectures, preserving model performance without requiring retraining. Threshold Gating also enables training from scratch that goes beyond replacing existing activations, enabling gains in model compression, performance, and shorter training. We also propose a 'Minimal Branch Theorem' which relates the minimum number of required branches in our primitive to the trainability of general deep neural networks. In terms of hardware implementation, TG maps to a unified implementation in the case of analog in-memory systems, addressing the bottleneck of analog-to-digital and digital-to-analog converters (ADC/DAC) that is known to significantly impact power consumption and on-chip area.
