---
title: "Operator Learning for Cubic Nonlinear Schr\\\"odinger Equation on Periodic Domains"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27459"
authors: ["Emmanuel E. Oguadimma, Victory C. Obieke, Xueying Yu"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27459v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27459v1 Announce Type: new Abstract: We consider the cubic nonlinear Schr\"odinger (NLS) equation on two-dimensional flat tori with varying aspect ratios. In this formulation, the choice of aspect ratio governs the Fourier resonance structure, so rational and irrational geometries can exhibit different high-frequency cascade behaviors. We present a geometry-conditioned Fourier neural operator (FNO) for the cubic defocusing NLS equation, where the input consists of the real and imaginary parts of the solution together with the aspect-ratio parameter \(\omega^2\). The model is trained to approximate the one-step solution operator and is evaluated on unseen trajectories generated from random-phase initial data using Fourier pseudospectral method. Our numerical experiments show that the learned operator captures the main solution dynamics on both tori and reproduces the distinct Sobolev norm behavior of the two geometries, with stronger \(H^2\)-growth on the rational torus and more constrained behavior on the irrational torus, consistent with the findings of \cite{hrabski2021energy}. We perform ablation studies to examine the roles of retained Fourier modes, activation functions, Fourier-layer depth, and explicit geometry conditioning. The results indicate that including $\omega^2$ improves long-time predictive accuracy, especially for the rational geometry, and supports the use of geometry-aware neural operators for learning spectral-transfer phenomena in nonlinear dispersive partial differential equations.
