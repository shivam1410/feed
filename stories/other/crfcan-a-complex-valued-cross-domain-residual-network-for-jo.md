---
title: "CRFCAN: A Complex-Valued Cross-Domain Residual Network for Joint Channel and Phase Noise Estimation in Sub-THz OFDM Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12244"
authors: ["Ruilin Wang, Xiaodai Dong"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12244v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12244v1 Announce Type: new Abstract: In sub-terahertz (sub-THz) communications, the coupling of ultra-wide bandwidth and severe phase noise (PN) impairments renders conventional joint channel and PN estimation highly complex and computationally prohibitive. To address this, we propose CRFCAN, a complex-valued residual FFT convolutional attention network designed for joint channel and PN estimation. Unlike existing deep learning schemes that rely on cascaded networks or hybrid frameworks combining neural networks with conventional iterative estimators, CRFCAN performs joint recovery in a truly end-to-end fashion through a physics-inspired cross-domain structure. Specifically, Fast Fourier Transform (FFT) and inverse FFT modules are embedded within residual groups to enable iterative feature interaction across the time and frequency domains, thereby capturing both frequency-selective fading and time-varying phase distortions. In addition, two dedicated residual blocks are introduced for complex feature extraction and multiplicative phase-distortion modeling, respectively. A physics-aware PN output tail with soft normalization is further employed to improve estimation stability while preserving the physical characteristics of the effective PN process. Simulation results demonstrate that CRFCAN significantly outperforms conventional algorithms and state-of-the-art deep learning models in terms of normalized mean square error (NMSE) and bit error rate (BER). Notably, CRFCAN achieves superior performance with single-shot, fixed-complexity inference and generalizes well to unseen PN models without fine-tuning, highlighting its robustness and practicality for sub-THz receivers.
