---
title: "Patch-PODiff-ViT: Structured Latent Diffusion with Patchwise POD for Super-Resolution and Uncertainty Quantification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31290"
authors: ["Onkar Jadhav, Tim French, Matthew Rayson, Nicole L. Jones"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.31290v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31290v1 Announce Type: new Abstract: Diffusion models enable probabilistic super-resolution and conditional generation, but pixel-space methods are computationally expensive and learned latent spaces often lack interpretable uncertainty quantification. We introduce Patch-PODiff-ViT, a structured latent diffusion framework in which the latent space is defined by patchwise Proper Orthogonal Decomposition (POD), a fixed linear orthonormal basis over local patches, rather than learned by a nonlinear autoencoder. This yields low-dimensional, variance-ordered tokens that preserve spatial structure and enable efficient diffusion in a structured low-dimensional latent space with a Vision Transformer. Because the decoder is fixed, linear, and orthonormal, latent coefficient uncertainty can be propagated directly to physical-space predictive variance, enabling analytic propagation of predictive variance through the linear decoder without Monte Carlo estimation in pixel space. Across sea surface temperature, medical imaging, and natural images, the method achieves strong reconstruction with fewer parameters and lower memory, while producing well-calibrated spatial uncertainty that closely matches empirical ensembles.
