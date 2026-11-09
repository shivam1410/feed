---
title: "SSF-Net: A Spatial-Spectral Fusion Network for Accurate PDE Operator Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08912"
authors: ["Siqi Zhao, Flora D. Salim"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08912v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Machine learning methods for solving partial differential equations (PDEs) significantly improve computational efficiency over traditional numerical solvers such as finite element method (FEM). However, PDE dynamics inherently span both local and global dynamics: disturbances propagate and decay gradually through the domain, while global coupling effects can influence the whole system simultaneously. Capturing both types of dynamics with a low complexity model remains a key challenge. To address this, we propose the Spatial-Spectral Fusion Network (SSF-Net), built around a dual-branch Spatial-Spectral Fusion (SSF) block comprising a spatial branch and a spectral branch. The spatial branch employs a multi-directional Mamba, which mitigates its inherent causal, single-direction scanning bias and capture local interactions with reduced directional bias at linear complexity. The spectral branch leverages a Fourier transform with a block-diagonal MLP to efficiently capture global spectral features with reduced parameter count and complexity. The SSF block is embedded in a multiresolution convolutional encoder-decoder, which extracts multi-scale features. We evaluate SSF-Net on a comprehensive PDE benchmark spanning multiple task types and assess its long-horizon stability. Compared with attention-based and convolution-based baselines, SSF-Net achieves lower prediction error with fewer parameters while retaining near-linear asymptotic complexity in the number of spatial tokens.
