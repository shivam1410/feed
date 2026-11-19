---
title: "Biologically-Inspired Spike Encoding and Optimization for Spiking Neural Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23242"
authors: ["Ayaan Qayyum, Bruce Yi Bu, Zicong Li, Jingfeng Zhou"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23242v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

Spiking Neural Networks (SNNs) offer theoretical energy-efficiency advantages over conventional deep networks, but realizing these advantages on vision tasks requires sparse spike representations that naive rate-coding methods fail to provide. We combine biologically motivated spike-encoding schemes with two training improvements: Rouser adaptive-threshold surrogate gradients and Kronecker-Factored Approximate Curvature (K-FAC) second-order optimization. The spike encoding schemes experimented with are rate coding, latency coding, DVS-style delta modulation, and Difference-of-Gaussians (DoG) filtering. Experiments on MNIST and Fashion-MNIST demonstrate that biologically inspired encoders yield the largest accuracy gains in capacity-constrained regimes and serve as an effective parameter-efficiency lever. DoG and delta modulation encoders produce significantly sparser spike trains than rate coding. K-FAC yields modest but consistent accuracy improvements over Adam-trained baselines, and Rouser's learnable per-neuron thresholds improve Fashion-MNIST accuracy from 87.37% to 88.13% by enabling homeostatic firing-rate regulation. Biologically grounded pre-processing methods can help close the accuracy gap between SNNs and non-spiking baselines without increasing model size.
