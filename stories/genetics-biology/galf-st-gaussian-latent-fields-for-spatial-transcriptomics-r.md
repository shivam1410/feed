---
title: "GaLF-ST: Gaussian Latent Fields for Spatial Transcriptomics Reconstruction"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.27143"
authors: ["Baichuan Yang, Yifan Luo, Yong Liu, Bing Su"]
date: "Mon, 23 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.27143v1"
image: ""
generated: "2026-11-23T19:04:08+05:30"
---

Spatial transcriptomics (ST) measures gene expression at known tissue locations to reveal tissue organization and cellular function. Expression prediction requires modeling both local spatial relationships and associations among genes. Existing methods typically model expression using coordinate networks without explicit spatial parameterization. To address limited spatial sampling and sparse expression observations of ST, some methods firstly fit intermediate embeddings and then train expression predictors, but a latent representation suited to expression reconstruction may be difficult to predict from spatial coordinates. The two training stages can impose different demands on the latent representation. In this paper, we propose GaLF-ST, a Gaussian latent field method in which learnable Gaussian centers and anisotropic covariances determine the weights of latent vectors at each location. A shared nonlinear decoder maps their weighted average to multigene expression. In GaLF-ST, observed expression error jointly updates the Gaussian geometry, latent vectors, and decoder parameters. We further establish a unified benchmark across seven dataset groups and three held-out fractions, comparing GaLF-ST with four representative methods using the same locations, splits, gene panels, and scoring rules. Across tissues and observation densities, GaLF-ST achieves leading overall reconstruction performance, recovering spatial gene expression patterns and preserving tissue domains from limited observations while substantially reducing runtime and GPU memory usage.
