---
title: "APEX: Asynchronous Prefix Denoising for Extreme Compression"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2610.12843"
authors: ["David Dinkevich", "Nisan Chiprut", "Yoav HaCohen", "Dani Lischinski"]
date: "2026-10-08T20:00:00.000Z"
score: ""
guid: "2610.12843"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2610.12843.png"
generated: "2026-10-14T19:00:21+05:30"
---

Fewer latent tokens promise cheaper diffusion. Yet aggressive latent compression creates a reconstruction-generation dilemma: adding channels improves reconstruction but makes generation harder. We introduce APEX, short for Asynchronous Prefix denoising for EXtreme compression, which pairs a hierarchical latent space with asynchronous denoising over channel groups. Our autoencoder orders channel prefixes from structure to detail, while one shared denoiser generates them at staggered local times without adding tokens. On ImageNet-512, APEX outperforms existing methods at every evaluated channel count under 64x and 128x compression. At matched training and guided sampling compute, it also outperforms a 256-token model at every evaluated budget, with larger gains at lower compute. Code is available at https://daviddinkevich.github.io/APEX.
