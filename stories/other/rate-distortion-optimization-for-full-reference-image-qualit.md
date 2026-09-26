---
title: "Rate-distortion optimization for full-reference image quality metrics via stochastic Hessian estimates"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.30077"
authors: ["Samuel Fernández-Menduiña", "Eduardo Pavez", "Antonio Ortega"]
date: "2026-09-23T20:00:00.000Z"
score: 38
guid: "2609.30077"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.30077.png"
generated: "2026-09-26T20:37:01+05:30"
---

Researchers adapted visual quality metrics used by humans (like MS-SSIM) to video compression by approximating them with Hessian estimates from automatic differentiation. Video encoding normally cannot use these metrics because they do not decompose block-by-block. The method achieved 14-37% better compression while optimizing for perceived quality. This aligns compression with human perception instead of just minimizing mathematical error.
