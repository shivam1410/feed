---
title: "NAMVIS: Next-Scale Autoregressive Multi-View Image Synthesis"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.04722"
authors: ["Ramil Khafizov", "Ilya Statsenko", "Ruslan Rakhimov", "Artem Komarichev", "Peter Wonka", "Evgeny Burnaev"]
date: "2026-10-02T20:00:00.000Z"
score: 62
guid: "2610.04722"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.04722.png"
generated: "2026-10-08T19:08:02+05:30"
---

Sparse-view novel view synthesis is a central problem in 3D content creation, but diffusion-based approaches remain limited by iterative denoising, making multi-view generation expensive at inference time. We introduce NAMVIS, a diffusion-free framework that reformulates multi-view image synthesis as geometry-conditioned next-scale autoregression. Instead of generating target views through repeated denoising, NAMVIS predicts discrete visual tokens through a small number of coarse-to-fine scale steps, while sampling all tokens within each scale and across target views in parallel. To anchor this generation process to explicit camera geometry, we propose Multi-scale Projective Pose Encoding, which injects source and target camera transformations into both target-view self-attention and source-to-target cross-attention at every resolution. NAMVIS further combines global conditioning with dense geometry-aware cross-attention, enabling the model to preserve source-view appearance while maintaining target-view consistency. Across Objaverse, GSO, and OmniObject3D, NAMVIS outperforms diffusion-based baselines in PSNR, SSIM, and LPIPS, while running over 3 times faster than the evaluated diffusion baselines under the same evaluation setting. These results suggest that geometry-conditioned next-scale autoregression is a promising and efficient alternative to diffusion for sparse-view multi-view synthesis. Additional qualitative results, videos, and resources are available at https://corl-team.github.io/namvis/
