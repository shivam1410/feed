---
title: "Improved Distributional Diffusion Models"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.37147"
authors: ["Tommaso Martorella", "Alexandre Galashov", "Felix Krause", "Stefan Andreas Baumann", "Valentin De Bortoli", "Arthur Gretton", "Björn Ommer"]
date: "2026-09-28T20:00:00.000Z"
score: 30
guid: "2609.37147"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.37147.png"
generated: "2026-09-30T19:08:55+05:30"
---

Distributional Diffusion Models (DDMs) replace the standard mean-prediction denoiser with a distributional denoiser trained via a scoring rule objective, learning a stochastic approximation to p(x_1 mid x_t) rather than its conditional mean. However, scaling DDMs to modern image-generation settings faces two obstacles: (i) multi-particle training incurs overhead that scales with the number of particles, (ii) DDMs use globally fixed scoring rule hyperparameters, forcing a single trade-off across sampling budgets. We mitigate these limitations by deferring particle expansion to late transformer layers, and the hyperparameter trade-off by introducing time-dependent scoring rule schedules informed by the dynamical regimes of~Biroli2024. Combined with a DiT-based latent setup, these changes make DDM training practical on class-conditional ImageNet-256^2, achieving 4.48 FID at 4 steps and 2.38 at 50 steps with DiT-XL/2, from a single model trained from scratch in one stage, without a teacher, self-distillation or JVPs. The result is a stochastic few-step generator whose FID does not degrade as the sampling budget grows from 4 to 50 NFE, and the same recipe transfers to text-to-image generation. Code and pre-trained models available at https://github.com/CompVis/iDDM.
