---
title: "IXPLORE: Bounded Ideal Point Estimation with Grid-Based Uncertainty Quantification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.06018"
authors: ["Fynn Bachmann"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.06018v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.06018v1 Announce Type: new Abstract: Ideal point estimation is widely used to analyze and visualize political data. However, selecting the corresponding spatial model involves various trade-offs: while model-based approaches such as Item Response Theory (IRT) are based on utility functions rather than optimized for predictive accuracy, most Machine Learning (ML) alternatives struggle to generalize beyond training data when embedding sparse test responses. We introduce IXPLORE, a bounded ideal point estimation algorithm that combines a predictive fit objective with a sparsity-aware likelihood function. On five benchmark datasets spanning surveys, roll calls, and deliberation, this approach surpasses model-based and ML-based algorithms on reconstruction and imputation error - especially for users with sparse responses. Furthermore, we show that non-linear feature transforms can further reduce the reconstruction error while remaining visually interpretable. To quantify uncertainty, IXPLORE applies grid-based posterior inference on a bounded 2D latent space. Available as a Python package on PyPI, IXPLORE offers a flexible framework for constructing bounded, interpretable political maps with fast inference and strong imputation performance.
