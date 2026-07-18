---
title: "Registers Matter for Pixel-Space Diffusion Transformers"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2605.16147"
authors: ["Nikita Starodubcev", "Ilia Sudakov", "Ilya Drobyshevskiy", "Artem Babenko", "Dmitry Baranchuk"]
date: "2026-07-05T20:00:00.000Z"
score: ""
guid: "2605.16147"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2605.16147.png"
generated: "2026-07-18T21:58:10+05:30"
---

Vision Transformers (ViTs) are known to exhibit high-norm patch-token outliers that degrade feature map quality, a problem effectively mitigated by register tokens. As diffusion models increasingly adopt transformer architectures and move toward pixel-space training, they become closer in form to ViTs, raising the question of whether register tokens are also useful for Diffusion Transformers (DiTs). In this work, we show that DiTs differ from ViTs in a key respect: they do not exhibit patch-token outliers but still benefit from registers. Interestingly, registers are more effective in pixel-space DiTs than in latent-space DiTs. By analyzing intermediate representations, we find that register tokens produce cleaner feature maps at high noise levels, which may contribute to their effectiveness in pixel-space generation. We further observe that recent pixel-space DiT architectures implicitly incorporate register-like mechanisms, which may partially account for their strong empirical performance. Motivated by these observations, we propose Register Guidance, a technique that amplifies the contribution of register tokens responsible for improving visual structure and coherence.
