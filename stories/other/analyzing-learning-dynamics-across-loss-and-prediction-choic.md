---
title: "Analyzing Learning-Dynamics Across Loss and Prediction Choices for Diffusion Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17967"
authors: ["Dongwoo Kim"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17967v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Denoising generative models predict clean data ($x$), noise ($\epsilon$), or velocity ($v$), while training losses can be measured in any of these spaces. Although the resulting nine combinations are algebraically related, they can yield substantially different denoising accuracy and sample quality. We disentangle the effects of prediction and loss spaces. For a fixed prediction target, we show that changing the loss space is exactly equivalent to timestep reweighting and provide a heuristic analysis of how this reweighting affects generation quality. We then show that a rank-$m$ linear bottleneck compressing a $D$-dimensional noisy input imposes an irreducible squared-error floor of $D-m$ on noise and velocity prediction, whereas clean-data prediction can exploit low-dimensional data structure. Combining this bound with prediction-dependent error conversion yields distinct necessary conditions on bottleneck capacity. Experiments with U-Net and JiT across CIFAR-10, Imagenette, and ImageNet-256 support these theoretical predictions. Under compression, prediction choice strongly affects both denoising accuracy and sample quality, with noise-prediction errors closely matching the theoretical lower bound. Our results provide a quantitative understanding of how architectural bottlenecks interact with prediction and loss choices in denoising generative models.
