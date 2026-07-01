---
title: "Sequential sparse Gaussian process quantile regression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31284"
authors: ["Hugo Nicolas (PLATON, CMAP), Olivier Le Ma\\^itre (PLATON, CMAP)"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.31284v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31284v1 Announce Type: new Abstract: Quantile regression aims to estimate the conditional quantiles of a response variable from observed data. In a Bayesian setting, Gaussian process quantile regression provides uncertainty quantification but faces significant computational challenges due to the nonconjugacy of the asymmetric Laplace likelihood and the cost of posterior inference. We develop a sparse Gaussian process framework in which the quantile function is represented through a reduced set of inducing variables and posterior inference is performed using a Laplace approximation. A decomposition of the predictive uncertainty into conditional-prior and posterior-induced variance components is then exploited to drive two complementary adaptive mechanisms: inducing-input infilling and data acquisition. These mechanisms are combined within a sequential algorithm that allocates computational effort toward the dominant source of predictive uncertainty and adaptively controls model complexity. Numerical experiments on benchmark problems demonstrate the accuracy of the Laplace approximation, the benefits of variance-based inducing-input placement, and the effectiveness of the proposed sequential enrichment strategy compared with predefined data-acquisition strategies.
