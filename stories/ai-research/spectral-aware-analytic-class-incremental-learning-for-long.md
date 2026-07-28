---
title: "Spectral-Aware Analytic Class-Incremental Learning for Long-Tailed Distributions"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22931"
authors: ["Quyen Tran, Hai Nguyen, Quan Dao, Zhuowei Li, Nam Le, Trung Le, Dimitris Metaxas"]
date: "Tue, 28 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.22931v1"
image: ""
generated: "2026-07-28T19:07:22+05:30"
---

arXiv:2607.22931v1 Announce Type: new Abstract: Analytic Continual Learning (ACL) offers a computationally efficient alternative to gradient-based approaches. Recent ACL methods are based on Recursive Least Squares (RLS) and have achieved the state-of-the-art results compared to other alternatives. However, they falter significantly in Class-Incremental Learning scenarios characterized by Long-Tailed distributions. While the ill-conditioning of the autocorrelation (Gram) matrix is a known limitation of RLS, we demonstrate that class imbalance exacerbates this issue into a distinct spectral pathology: "tail" classes suffer from severe spectral collapse, rendering their subspaces numerically indistinguishable from noise. Standard Ridge Regression ($L_2$) fails to address this effectively as it applies isotropic regularization - a uniform penalty that is insufficient to stabilize the tail without over-shrinking the head. To address this, we propose Geometry-Spectral Rectification (GSR), a theoretically grounded framework that treats long-tailed learning as a spectral regularization problem. Unlike standard isotropic regularization (Ridge) which uniformly penalizes all eigenvalues, GSR acts as an anisotropic spectral filter, selectively inflating the collapsed eigenvalues of tail classes. We construct a structured, data-dependent spectral perturbation matrix $\Delta$ that selectively inflates collapsed tail eigen-directions of the Gram matrix. Theoretical analysis proves that GSR guarantees an improved stable rank for the Gram matrix, ensuring numerical stability. Extensive experiments show that GSR establishes a new state-of-the-art for analytic CIL, offering a superior trade-off between computational efficiency and robust generalization in long-tailed settings.
