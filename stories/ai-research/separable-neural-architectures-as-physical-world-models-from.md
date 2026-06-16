---
title: "Separable Neural Architectures as Physical World Models: from Mathematical Theory to Applications"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14934"
authors: ["Reza T Batley, Andrew Kichline, Sourav Saha"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.14934v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14934v1 Announce Type: new Abstract: This work introduces the Separable Neural Architecture (SNA), a function representational class combining neural approximation with tensor decomposition. The SNA decouples localized coordinate functions (atoms) from global interactions governed by a sparse, low-rank interaction object. This architecture possesses a compact and smooth inductive bias well-suited for solving partial differential equations (PDEs). When viewed as a Galerkin trial space under the variational SNA (VSNA) framework, the formulation satisfies classical variational guarantees under Lax-Milgram: well-posedness, quasi-optimality, convergence, and stability. In high-dimensional spatiotemporal--parametric PDEs, the VSNA mitigates the curse of dimensionality by scaling algebraically rather than exponentially. Exploiting an entirely factorized, tensor-native alternating least squares (ALS) optimization framework reduces this cost to linear in dimension. The VSNA is validated across elliptic, hyperbolic, and parabolic systems, demonstrating close alignment with predicted algebraic and spectral scaling rates. We showcase the SNA as a "solve once, query anywhere" physical world model via two engineering case studies: a 7D parametric manufacturing simulation and an experimental thermal-to-property inversion pipeline for Inconel 718. The VSNA executes a 1,000,000-query Monte Carlo sweep in 102s on a standard laptop CPU, yielding a 150,000x speedup over a full-grid finite element baseline hosted on an NVIDIA A100 GPU. It further enables real-time generative inverse-mode reconstructions under 100ms. These results demonstrate that the SNA serves as a compact mathematical substrate for continuous parameter manifolds to enable real-time inversion, optimization loops, and rapid uncertainty propagation.
