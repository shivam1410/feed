---
title: "Constructive Universal Approximation by Infinite-Dimensional Neural Networks via Gaussian-Weighted Ridgelet Transform"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24293"
authors: ["Sho Sonoda, Luca Galimberti, Yuanchao Xu, Isao Ishikawa, Masahiro Ikeda"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 20
guid: "oai:arXiv.org:2610.24293v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Neural networks whose inputs are functions, as in operator learning, are usually shown to be universal by existence arguments, either by reduction to finite-dimensional networks or by Stone--Weierstrass-type density; these prove that approximants exist but say little about how the parameters depend on the target. We take a constructive route. We extend the ridgelet transform, an integral transform related to the Fourier, Radon, and wavelet transforms, to continuous maps on a separable infinite-dimensional Hilbert space, replacing the Lebesgue measure that is unavailable in infinite dimensions by Gaussian weights with a homogeneous mixture on the direction space. The resulting transform has a Plancherel identity and reconstruction formulas incorporating the frame operator, the correction induced by the weights, and it assigns to each target an explicit coefficient measure, one for every admissible analysis filter. From these representations we obtain uniform approximation on compact sets for all continuous non-polynomial activations of polynomial growth, including ReLU, and, by Monte Carlo sampling of the coefficient, finite-width networks with a dimension-free $O(N^{-1/2})$ error in the width $N$ for globally Lipschitz activations and coefficients with finite variation and second moments. Explicit examples include Gaussian targets and neural-operator layers. A companion Lean~4 formalization provides machine-checked proofs, with its correspondence to the manuscript documented at https://shosonoda.github.io/lean-operator-ridgelet/ .
