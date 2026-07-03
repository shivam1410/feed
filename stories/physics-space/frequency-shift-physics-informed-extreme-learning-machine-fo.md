---
title: "Frequency Shift Physics-Informed Extreme Learning Machine for Solving High-Frequency Partial Differential Equations"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01694"
authors: ["Xiong Xiong, Ruonan Zhai, Zheng Zeng, Sheng Zhou, Rongchun Hu, Zichen Deng"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.01694v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01694v1 Announce Type: new Abstract: Solving partial differential equations (PDEs) with high-frequency solutions remains a central challenge in physics-informed machine learning due to spectral bias -- the tendency of neural networks to learn low-frequency components preferentially. This paper proposes a Frequency Shift Physics-Informed Extreme Learning Machine (FS-PIELM) framework that addresses this limitation through an additive mechanism for weight initialization. Rather than multiplying random weights by a scaling factor, the method translates the mean of the Gaussian weight distribution while keeping the variance fixed at unity, thereby avoiding the variance amplification inherent in scaling-based methods. Two variants are developed: FS-PIELM-L assigns independent frequency magnitudes to individual neurons, while FS-PIELM-G groups neurons for improved robustness. Theoretical analysis shows that the frequency variance under the proposed framework remains bounded and approaches unity regardless of target frequency, in contrast to the quadratic growth of conventional approaches. The method preserves the computational efficiency of extreme learning machines, requiring only a single linear solve. Experiments on seven benchmark problems spanning six equation types -- Helmholtz, wave, Poisson, Klein-Gordon, heat, and advection-diffusion -- on both regular and complex geometries show that the linear variant achieves the best accuracy in six of seven cases, with improvements of one to nearly five orders of magnitude over existing PIELM variants. The code and data accompanying this manuscript will be made publicly available at https://github.com/xgxgnpu/Physics-informed-vibe-coding/tree/main/FS-PIELM.
