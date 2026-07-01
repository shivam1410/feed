---
title: "TDGT: A Tabular Data Generation Toolkit supporting adaptive GPU-accelerated Bayesian mixture models, diffusion-based models, and latent-space generative modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31268"
authors: ["Vasileios C. Pezoulas, Nikolaos S. Tachos, Eleni Georga, Kostas Marias, Manolis Tsiknakis, Dimitrios I. Fotiadis"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.31268v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31268v1 Announce Type: new Abstract: The growing demand for privacy-preserving data sharing has positioned synthetic data generation as a critical component of responsible AI workflows. Despite notable advances in generative modeling, existing solutions often lack integration of adaptive generation strategies, multi-metric evaluation, and accessible end-to-end generators within a unified web-based toolkit. In this work, we introduce TDGT (Tabular Data Generation Toolkit), a web-based toolkit for synthetic tabular data generation and fidelity assessment. TDGT introduces the Adaptive Bayesian Mixture Synthesizer (ABMS), a novel algorithm that autonomously determines the optimal number of mixture components through iterative cluster quality optimization, eliminating the need for manual hyperparameter configuration. Building upon ABMS, we further propose VAE-ABMS, a hybrid architecture that couples Variational Autoencoder-based latent space learning with adaptive Bayesian mixture synthesis, enabling high-fidelity generation of complex, nonlinear tabular distributions. For large-scale scenarios, TDGT provides a GPU-accelerated variant of ABMS leveraging CUDA-based k-means clustering and Gaussian mixture fitting. Synthetic data fidelity is assessed through eleven statistical fidelity metrics spanning distributional divergence, structural correlation, and sample-level similarity, complemented by privacy risk indicators including k-anonymity scoring and disclosure rate estimation. The web-based toolkit supports a real-time streaming interface with interactive Plotly-based visualizations. TDGT is assessed across datasets from healthcare, socioeconomic modeling, and cybersecurity domains, demonstrating consistent generation fidelity and statistical coherence across heterogeneous feature types and data scales.
