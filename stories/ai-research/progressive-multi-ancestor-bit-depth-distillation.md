---
title: "Progressive Multi-Ancestor Bit-Depth Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04100"
authors: ["Adil Mubashir Chaudhry, Osama Ahmad, Zubair Khalid, Murtaza Taj"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2610.04100v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Model compression strategies are widely employed to reduce memory footprint and network complexity, particularly for devices with constrained computational, memory, and energy resources. Prior works that rely on simultaneous conversion from floating-point high-precision (FP32) to integer low-precision (INT4) representations and distillation into smaller models suffer from unstable training and drastic degradation of prediction performance. To address these limitations, we propose a unified framework, known as \textbf{P}rogressive \textbf{M}ulti-\textbf{A}ncestor \textbf{B}it-depth \textbf{D}istillation (PMABD), that progressively compresses the network while transferring knowledge through a growing pool of higher-precision ancestor teachers. PMABD generates a sequence of intermediate teachers that each learn from all higher-precision ancestors and jointly supervise the final target student. This multi-ancestor, multi-stage design stabilizes ultra-low-bit quantization by lowering quantization noise profiles across training and ensuring stable quantization. Experiments on CIFAR-10/100 with ResNet-20/32/18, and Tiny-ImageNet with MobileNetV2 show that PMABD outperforms state-of-the-art compression frameworks, results in 1.06$\%$ increase in performance of W2A2 (ResNet-18/CIFAR-100) student model. We show that a saturation-based stopping criterion contributes to improve the performance of our final student.
