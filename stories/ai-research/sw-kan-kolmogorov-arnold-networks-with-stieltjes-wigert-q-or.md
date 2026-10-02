---
title: "SW-KAN: Kolmogorov-Arnold Networks with Stieltjes-Wigert q-Orthogonal Polynomials"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00050"
authors: ["Amirhosein Azarpour, Seyyed Moein Kazemi"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2610.00050v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Kolmogorov-Arnold Networks (KANs) represent a paradigmatic shift in deep learning by replacing fixed node activations with learnable univariate functions on edges, offering enhanced interpretability and parameter efficiency. While recent polynomial-based KAN variants have addressed the computational overhead of original B-spline implementations, they introduce a fundamental yet underexplored challenge: the domain mismatch between unbounded real-valued inputs and the bounded or semi-infinite support of orthogonal polynomial bases. To address this limitation, we propose the Stieltjes-Wigert Kolmogorov-Arnold Network (SW-KAN), a novel architecture that employs Stieltjes-Wigert q-orthogonal polynomials defined on the semi-infinite domain (0, infinity). We introduce a smooth exponential-of-tanh mapping that stably bridges the domain gap while preserving well-conditioned gradients, and leverage a numerically stable three-term recurrence that evaluates polynomial expansions in O(N) operations without special-function calls. Through comprehensive experiments spanning image classification and continuous function approximation, we demonstrate that SW-KAN achieves superior accuracy-efficiency trade-offs across diverse tasks. The log-normal weight structure and learnable q-parameter of Stieltjes-Wigert polynomials provide a distinct inductive bias that enables robust performance under resource-constrained conditions, including reduced feature dimensionality and limited training data. The proposed architecture not only outperforms established polynomial KAN baselines on standard benchmarks but also exhibits strong representational capacity for approximating complex multivariate functions with remarkably few parameters, making it a compelling alternative for efficient function approximation and classification in resource-constrained settings.
