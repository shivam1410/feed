---
title: "SPDM: Geometry-Modulated State Space Modeling with Manifold Constraints for Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09917"
authors: ["Xingsheng Chen, Siu-Ming Yiu"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.09917v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09917v1 Announce Type: new Abstract: Multivariate time series forecasting requires capturing the continuously evolving correlation structure among interacting variables. Existing state-space models process time series by scanning tokenized temporal or spatial sequences, discarding the evolutionary geometric structure. We address this limitation by introducing manifold constraints into state-space modeling: treating the cross-variable correlation structure as a continuous trajectory on the symmetric positive definite manifold, whose Riemannian geometric features, tangent space linearity, and Frechet mean centrality act as a principled geometric regularizer that guides and stabilizes the selective scanning dynamics of SSMs. We propose SPDM, a geometry-aware SSM architecture that realizes this principle through two cooperating mechanisms: a manifold trajectory path that projects dynamically evolving covariance matrices from the SPD manifold to a Euclidean tangent space, and a geometric gating scheme that directly modulates SSM's internal selective parameters based on geometric signals derived from the manifold trajectory. The parameterization preserves the linear-time complexity of the Mamba parallel scan while embedding rich structural constraints, making the architecture preserve prediction accuracy and computational efficiency simultaneously. Extensive experiments on eleven real-world benchmark datasets establish state-of-the-art forecasting performance, and further studies confirm that geometrically constrained state-space dynamics are the dominant architectural factor behind its performance gains.
