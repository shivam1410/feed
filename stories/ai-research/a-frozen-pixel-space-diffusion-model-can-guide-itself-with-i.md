---
title: "A Frozen Pixel-Space Diffusion Model Can Guide Itself with Its Own Samples"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.29122"
authors: ["Zixuan Fu", "Chong Wang", "Lanqing Guo", "Kailai Zhou", "Jiahao Nie", "Bihan Wen"]
date: "2026-07-30T20:00:00.000Z"
score: 72
guid: "2607.29122"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.29122.png"
generated: "2026-08-05T20:00:21+05:30"
---

Pixel-space diffusion models aim to learn an end-to-end generator directly over raw pixels. This is challenging because a single model must capture both global structure and local texture in the same high-dimensional space. While recent work improves pixel diffusion through alternative prediction targets, training objectives, and architectures, these advances typically require training a new model from scratch. We show there is a cheaper, complementary strategy: a frozen, pretrained pixel diffusion model can guide itself. Our key observation is that intermediate layers of a pretrained pixel diffusion transformer can be decoded into coarse predictions that capture the main low-frequency structure, while the final layers progressively refine local, high-frequency details. We therefore attach a lightweight prediction head to an intermediate layer, keep the backbone frozen, and use the discrepancy between the intermediate and final predictions as a self-guidance direction during sampling. To train this head, we further find that real images are not necessary. Instead, model-generated samples suffice and even outperform real images for training the head, especially in enhancing the high-frequency components that pixel diffusion tends to underfit. Across multiple pixel diffusion models on ImageNet, our Synthetic Self-Guidance (SSG) consistently improves generation while adapter training requires less than 1% of full-model training compute: it reduces FID by over 50% across the evaluated JiT variants without classifier-free guidance (CFG) and further improves strong baselines with CFG, e.g., JiT-H/16 from 1.86 to 1.67 and PixelREPA-H/16 from 1.81 to 1.59. Our code is available at https://github.com/zfu006/SSG.
