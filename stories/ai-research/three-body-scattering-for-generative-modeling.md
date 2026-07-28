---
title: "Three-Body Scattering for Generative Modeling"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.18198"
authors: ["Peng Sun", "Zhenglin Cheng", "Deyuan Liu", "Jun Xie", "Xinyi Shang", "Tao Lin"]
date: "2026-07-19T20:00:00.000Z"
score: 75
guid: "2607.18198"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.18198.png"
generated: "2026-07-28T19:07:22+05:30"
---

Modern generative models typically rely on an adversarial critic, a prescribed noise-to-data path, or an autoregressive factorization. Instead, we show that a proper distributional energy can induce sample-level motion and provide direct regression supervision for a one-step generator. Three-Body Scattering Modeling (TBSM) for generation turns the energy distance into a constant-size per-projectile interaction: each projectile is attracted toward one real source and repelled from one independently generated source. Conditioned on the projectile and its condition, its expectation equals the 2-Wasserstein gradient-flow velocity of frac12D_E^2(P_θ,Q). A batch of B frozen-target events yields O(B) sample-level losses, each using one reference for its condition instead of the minibatch-wide all-pairs field used by methods such as Drifting Models. Tracking this conditional expectation online can reduce field noise. Using scattering in frozen image features, TBSM trains one-step generators on ImageNet-256, achieving FID{}=2.23 with pixel-space PixelDiT-XL and FID{}=1.63 with latent-space DiT-XL at NFE{}=1. We provide a design map relating diffusion-related supervision, Drift-like dynamics, and GAN-like objectives. These results establish tracked scattering as a route to high-dimensional one-step generation. Code: https://github.com/sp12138/TBSM.
