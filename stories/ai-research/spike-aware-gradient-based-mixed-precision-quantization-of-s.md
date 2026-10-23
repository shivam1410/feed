---
title: "Spike-Aware Gradient-Based Mixed-Precision Quantization of Spiking Neural Networks for Vision Applications"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30339"
authors: ["Rajshekhar Rakshit, Devgokul B. V, Rakshitha Kalkura, Gopalakrishnan Srinivasan"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.30339v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

In recent years, Spiking Neural Networks (SNNs) have gained massive attention as an energy-efficient neural computing paradigm due to their event-driven and sparse computing capability. However, maintaining accuracy under low-precision constraints, necessary for practical deployment, has been largely unexplored for SNN models. In addition, existing Hessian-based approaches for quantization, such as HAWQ-V2, incur significant memory and computational overhead due to temporal unrolling across multiple SNN timesteps. We propose a spike-aware gradient-based mixed-precision quantization framework for SNNs that adaptively assigns bit-widths using first-order gradient information, avoiding costly second-order Hessian computations. We evaluate our method across various SNN-based architectures, including VGG, ResNet, and Vision Transformer models obtained from both ANN-to-SNN conversion and direct training frameworks, on CIFAR10/100, ImageNet, and DVS-CIFAR-10 datasets. Notably, on ResNet-34 evaluated on ImageNet, our method achieves 73.30% accuracy at 4.78$\times$ compression, which is comparable to that provided by HAWQ-V2, while reducing memory consumption by 2.31$\times$ and bit-allocation runtime by 100$\times$. We also present an energy analysis for mixed-precision SNNs showing that the proposed quantization strategy enables energy-efficient deployment without compromising performance.
