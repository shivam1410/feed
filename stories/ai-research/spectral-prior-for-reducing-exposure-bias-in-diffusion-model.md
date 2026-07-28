---
title: "Spectral Prior for Reducing Exposure Bias in Diffusion Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.22091"
authors: ["Yuya Kobayashi", "Masato Ishii", "Yuhta Takida", "Takashi Shibuya", "Yuki Mitsufuji"]
date: "2026-07-23T20:00:00.000Z"
score: 70
guid: "2607.22091"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.22091.png"
generated: "2026-07-28T19:07:22+05:30"
---

Diffusion models typically suffer from error accumulation during iterative sampling, commonly referred to as exposure bias. We reveal systematic frequency-dependent discrepancies between training and inference, which can be interpreted as frequency-dependent SNR error. Crucially, the direction of this mismatch varies across models and timesteps, indicating that fixed correction rules do not generalize. We propose Spectral Alignment (SPA), a lightweight, guidance-based method that calibrates the power spectrum of intermediate predictions to a pre-computed prior. Our approach consists of two stages: (1) offline fitting of a parametric spectrum model from training data, and (2) inference-time guidance via efficient FFT-based gradient computation. SPA introduces minimal computational overhead (3-4\%) and is complementary to Classifier-Free Guidance (CFG). We demonstrate consistent improvements across diverse architectures, from pixel-space models (DDPM, ADM) to latent diffusion models (SD2.0, SDXL) and flow-matching models (SD3.5, FLUX). Our implementation is available at https://github.com/SonyResearch/SPA.
