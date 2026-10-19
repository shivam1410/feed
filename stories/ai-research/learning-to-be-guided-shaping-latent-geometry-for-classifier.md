---
title: "Learning to Be Guided: Shaping Latent Geometry for Classifier-Free Guidance"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22885"
authors: ["Haoming Liu, Junhao Zhu, Shaoyi Zheng, Yuanhe Guo, Jinnuo Liu, Shenji Wan, Hongyi Wen"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.22885v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Classifier-free guidance (CFG) is a standard component of conditional diffusion models, and guided generation performance has become the \textit{de facto} measure of state-of-the-art models. Recent work on latent diffusion models seeks to learn latent spaces that are easier to model with diffusion. However, under CFG, generation additionally depends on how conditions are arranged in the latent space. We study this arrangement under discrete class conditions, termed \emph{class geometry}, and investigate what class geometry allows a latent space to work well with CFG. Under a Gaussian class model, we show that shifting variance from intra- to inter-class at fixed total variance makes classes more distinguishable under noise, and derive a noisy posterior objective whose per-sample descent direction is proportional to the oracle CFG correction. Based on the analysis, we propose Prototype Regularization (PR), a lightweight surrogate for the intractable noisy posterior objective, which applies a cosine prototype classifier to spatially pooled latents. With a controlled training budget (20 epochs for VAE, 80 epochs for DiT), adding PR to an LDM baseline reduces guided gFID on ImageNet from 3.31 to 2.28, surpassing a DINOv3-aligned VA-VAE (2.44) with negligible overhead. We further demonstrate that PR generalizes to pseudo-labels derived from clustering, continuous text-embedding conditions, and video latents. Together, our findings highlight class geometry as a critical factor in guided generation and take a first step toward CFG-compatible representation learning. Our project page is available at: https://maps-research.github.io/cfg-geometry/.
