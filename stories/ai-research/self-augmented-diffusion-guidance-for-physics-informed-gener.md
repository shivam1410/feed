---
title: "Self-Augmented Diffusion Guidance for Physics-Informed Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26748"
authors: ["Akira Osaka, Naoya Takeishi, Takehisa Yairi"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26748v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26748v1 Announce Type: new Abstract: Diffusion models can be used to generate spatiotemporal signals of physical phenomena, such as time-series images of fluid dynamics. However, a major limitation of standard diffusion models is that they do not incorporate constraints derived from the underlying physical laws. Consequently, generated samples may appear visually plausible while deviating substantially from the true dynamics. In this study, we propose a simple yet effective physics-informed approach based on diffusion guidance with self-generated data augmentation. The proposed method learns the data distribution conditioned on the degree of deviation from the physically correct dynamics and generates samples by explicitly setting the deviation condition to be zero. The method decouples the evaluation of the governing equations from the diffusion model training and sampling processes, avoiding the need to solve the governing equations at every iteration of the denoising process. This design makes the method applicable to problems requiring computationally expensive numerical simulations and enables faster sample generation. Experimental results demonstrate that the proposed model not only significantly reduces the deviations compared with standard diffusion models but also achieves further reductions when combined with existing physics-constrained diffusion methods.
