---
title: "DiFA: Inference-Time Forward-Process Alignment for Diffusion Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.17972"
authors: ["Shigui Li", "Delu Zeng"]
date: "2026-07-19T20:00:00.000Z"
score: 68
guid: "2607.17972"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.17972.png"
generated: "2026-07-21T19:05:01+05:30"
---

The prevailing inference framework for diffusion models formulates generation fundamentally as a problem of numerical integration. This perspective casts the model as an exact estimator, neglecting the inherent statistical uncertainty of the denoising process. In this work, we propose Forward-Process Aligned Diffusion prediction (DiFA), a training-free framework that reframes inference-time data prediction refinement as a sequential state estimation problem. Rather than reusing past outputs solely for numerical integration, DiFA treats iterative data predictions along the reverse trajectory as correlated observations to build a forward-aligned temporal consensus. Inspired by Kalman filtering, this consensus aggregates historical predictions according to structural consistency and noise-level compatibility. To counteract the over-smoothing tendency of temporal consensus, we introduce a deviation guidance mechanism to adaptively preserve residual details. Empirically, DiFA yields significant improvements on CIFAR-10 and ImageNet across the evaluated metrics, including FID, IS, and FD-DINOv2, demonstrating that aligning inference with the forward statistical structure substantially improves generative fidelity.
