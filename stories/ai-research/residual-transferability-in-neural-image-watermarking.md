---
title: "Residual Transferability in Neural Image Watermarking"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.32241"
authors: ["Ziping Dong", "Qi Li", "Xinchao Wang"]
date: "2026-09-25T20:00:00.000Z"
score: 65
guid: "2609.32241"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.32241.png"
generated: "2026-09-29T19:09:35+05:30"
---

Neural image watermarks can be forged by extracting watermark-bearing residuals from released images and transferring them to unrelated content. While prior work has demonstrated this vulnerability, what makes these residuals transferable remains poorly understood. We formalize this vulnerability with residual transferability (RT), a metric that quantifies how well watermark evidence remains decodable after transfer across unrelated images. Through comparative analyses and controlled interventions, we find that common training-side variations do not account for the large RT differences across watermarking systems; instead, architectural design plays a central role. By contrasting high- and low-RT systems and validating their architectural differences through controlled interventions, we identify two mechanisms that strengthen the dependence of watermark evidence on the cover image, thereby suppressing the residual transferability. These findings provide concrete design guidance for developing more forgery-resistant watermarking architectures. Complementarily, for existing watermarking systems where architectural redesign is impractical, we introduce CoverLock, a plug-and-play strategy for existing watermarking systems that strengthens such image dependence without architectural redesign. Across representative watermarking systems exhibiting high residual transferability, CoverLock achieves a more favorable security--robustness trade-off than both traditional handcrafted defenses and learned classifier-based defenses.
