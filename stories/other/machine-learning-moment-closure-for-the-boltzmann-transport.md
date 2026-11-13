---
title: "Machine Learning Moment Closure for the Boltzmann Transport Equation: Enforcing Hyperbolicity"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.14894"
authors: ["Bongseok Kim, Jiahao Zhang, Guang Lin"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.14894v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

The Boltzmann transport equation describes particle transport across collisional regimes, but resolving its velocity dependence is expensive. Moment methods reduce this cost by evolving finitely many velocity moments, requiring a closure for unresolved higher-order moments. Data-driven closures can represent these moments accurately, yet without structural constraints they may produce complex characteristic speeds and unstable simulations. Learned Boltzmann closures with guaranteed hyperbolicity have so far been formulated in one spatial dimension; in multiple dimensions, hyperbolicity must hold in every direction simultaneously. We develop, to the best of our knowledge, the first data-driven closure for multidimensional Hermite moment systems of the linear Boltzmann equation that is hyperbolic by construction. The network learns a symmetric positive-definite symmetrizer shared by all spatial directions and restricted to a subspace that preserves the known lower-order transport equations; the unresolved rows follow from a symmetric completion. Every directional Jacobian thus has real eigenvalues and a complete set of eigenvectors for every network output and at any truncation order. The closure is trained only on spatial derivatives of unresolved moments from kinetic reference solutions, with no solver in the training loop, and evolved by a partially conservative discontinuous Galerkin method. In two-dimensional experiments in the transition and scattering-dominated regimes, a single learned third-order system with ten moments remains stable in all cases. Averaged over time, it is more accurate than the classical P7 and P15 truncations with 36 and 136 moments in every experiment, and its density error is about two orders of magnitude smaller than that of the P3 truncation with the same moments.
