---
title: "Denoising Diffusion with Progressive Posterior Sampling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31558"
authors: ["Zeyu Luo, Shuai Huang"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31558v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Diffusion models provide effective generative priors for solving noisy linear inverse problems. However, existing posterior sampling methods may require singular value decomposition (SVD) of the measurement operator or prior knowledge of the measurement noise variance, while guidance based on local gradients provides only a limited view of posterior geometry. We propose progressive posterior sampling (PPS) with manifold projection, which automatically estimates the measurement noise variance and avoids SVD. During reverse diffusion, PPS constructs a Gaussian approximation to the posterior distribution in closed form and guides a sample drawn from the local prior toward the approximate posterior mean. We then project the guided sample onto a spherical level set that approximates the local noisy image manifold, promoting consistency with the local geometry of the diffusion prior. Experiments on FFHQ and ImageNet across four restoration tasks and three measurement noise levels demonstrate competitive reconstruction accuracy and perceptual quality by PPS.
