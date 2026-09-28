---
title: "Why Clipping Matters in AdaGrad? Toward a High-Probability Theory under Generalized Smoothness"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30276"
authors: ["Alokendu Mazumder, Ayaan Mohd, Harshit Rawat, Arnab Roy, Mayank Baranwal, Punit Rathore"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2609.30276v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

We analyze the original same-step coordinate-wise AdaGrad under generalized smoothness and heavy-tailed noise with bounded variance. In this setting, local curvature may grow sub-quadratically with the gradient norm, and stochastic gradients are assumed to have only bounded conditional second moments. We show that unclipped AdaGrad can become \emph{anisotropically miscalibrated}: under heavy-tailed noise, the adaptive denominator can learn the geometry of rare noise shocks rather than the local curvature of the objective, leading to a persistent directional distortion that blocks finite-horizon Euclidean progress. We then prove that clipping repairs this failure mode. Our main result is a finite-horizon high-probability guarantee for the original non-lagged AdaGrad update, yielding $\frac1T\sum_{t=0}^{T-1}\|\nabla f(x_t)\|^2=\mathcal{O}\left(\frac{d\big(\sqrt{\log T} + \log \frac{1}{\delta}\big)}{\sqrt{T}}\right),$ and hence $\widetilde{\mathcal O}(\varepsilon^{-2})$ complexity. This shows that, for AdaGrad under heavy-tailed noise, clipping is a structural stabilizer of the adaptive geometry rather than merely a robustness heuristic.
