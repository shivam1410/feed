---
title: "Learning-Based Reconstruction of Optical Properties in Bilayered Media from Single-distance Time-Resolved Reflectance Measurements"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19786"
authors: ["Caterina Amendola, Giulia Maffeis, Lorenzo Buffoni, Lorenzo Chicchi, Francesco Coghi, Duccio Fanelli, Raffaele Marino, Fabrizio Martelli, Riccardo Paoli, Lorenzo Pattelli, Lorenzo Spinelli"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19786v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19786v1 Announce Type: new Abstract: The inverse problem of reconstructing optical properties, specifically absorption and scattering coefficients, in layered biological media from time-domain reflectance measurements remains a significant challenge for traditional analytical models. Inverse solvers based on the diffusion equation often struggle with structural heterogeneity, frequently yielding poor accuracy for superficial absorption and deep-layers scattering. In this work, we propose a machine learning framework as an alternative approach to reconstruct the optical properties of a bilayered medium, benchmarking its efficiency and accuracy against model-based algorithms. To overcome the intrinsic approximations of diffusion theory and inverse reconstruction, we generated a robust synthetic dataset of forward DTOF using exact Monte Carlo simulations at multiple source-detector distances. A machine learning pipeline was then trained on this dataset and validated against state-of-the-art model-based reconstruction methods. Besides the significant reconstruction speed-up, the machine learning approach achieves higher accuracy than model-based inverse solvers, further providing an estimate of the parameter space dimensionality without requiring any a priori information about the number of layers in the investigated geometry. Further enhancements in the reconstruction accuracy can be expected in future extensions of this work, by training the pipeline over multiple DTOF curves from the same medium, in a joint multi-distance reconstruction approach.
