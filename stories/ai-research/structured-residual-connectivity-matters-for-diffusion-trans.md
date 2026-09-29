---
title: "Structured Residual Connectivity Matters for Diffusion Transformers"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.33203"
authors: ["Yuhe Liu", "Xinyin Ma", "Gongfan Fang", "Songhua Liu", "Xinchao Wang"]
date: "2026-09-26T20:00:00.000Z"
score: 62
guid: "2609.33203"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.33203.png"
generated: "2026-09-29T19:09:35+05:30"
---

Diffusion Transformers (DiTs) have established themselves as a scalable backbone for high-fidelity image synthesis. However, unlike U-Net based diffusion models that rely on rigid, hand-crafted skip connections, DiTs predominantly use a uniform residual stream that integrates all preceding layers as a monolithic state. In this work, we rethink residual connections in diffusion transformers and propose to transform them from passive summation into an active retrieval mechanism optimized for image denoising. First, we conduct a systematic analysis of DiT's internal representation, revealing a latent preference for early-layer feature reuse and symmetric layer guidance. Motivated by this, we introduce a structured connectivity design that explicitly integrates local residual connections with long-range pathways. Instead of static skip connections or dense all-layer routing, our method enables each transformer block to selectively ``attend'' to critical earlier representations, dynamically retrieving spatial and semantic cues through direct, differentiable cross-depth paths. Experiments show that our adaptive connectivity leads to faster convergence, with up to 1.73times fewer training iterations, and significant gains in FID and visual quality with less than 0.1% additional parameters, further improving a strong REPA-XL/2 model from 5.9 to 4.34 FID without guidance and reaching 1.39 FID with classifier-free guidance. Our findings suggest that adaptive cross-layer connectivity is a critical yet underexplored factor in diffusion transformers, and that incorporating structured information pathways provides a simple and effective direction for improving scalable generative models.
