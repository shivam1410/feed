---
title: "Smoothing Dark Areas in Molecular Latent Diffusion"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13955"
authors: ["Xi Wang, Jiahan Li, Yuxuan Xia, Yingcheng Wu, Shaoyi Zheng, Shengjie Wang"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 76
guid: "oai:arXiv.org:2606.13955v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

TopVAE addresses a critical problem in molecular latent diffusion: "dark areas" where generated molecules are structurally or chemically invalid despite being sampled from the latent space. Existing VAEs optimize only for reconstruction accuracy and don't guarantee smooth, navigable latent spaces. TopVAE internalizes molecular constraints directly during training rather than applying corrections at test time. Results show 77% lower FCD-3D error on QM9, 52% lower on GEOM-Drugs, and 1.29× more stable and connected molecules in zero-shot scaffold inpainting. This matters critically because molecular design requires strict precision: unlike images, small latent perturbations cascade into complete structural failure, making traditional approaches insufficient.
