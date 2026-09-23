---
title: "When Riemann flows with Wasserstein: Generative Modeling of Probability Distributions on Manifolds"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25659"
authors: ["Doron Haviv, Edward De Brouwer, Rishabh Anand, Rex Ying, A\\\"icha Bentaieb, Gabriele Scalia, Hector Corrada Bravo"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.25659v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25659v1 Announce Type: new Abstract: Many scientific datasets, such as molecular conformational ensembles or single-cell tissue measurements, are naturally modeled as meta-distributions: distributions over probability measures on non-Euclidean domains. Existing generative methods largely assume Euclidean geometry and fail to capture this structure. We introduce Riemannian Wasserstein Entropic Flow Matching (RWEFM), a generative framework on the Wasserstein space $\mathcal{P}_2(\mathcal{M})$ of a Riemannian manifold $(\mathcal{M},g)$. RWEFM is trained by regressing a neural vector field onto Riemannian optimal transport velocities, using McCann displacement interpolations as conditional paths. We confirm theoretically that this construction leads to a valid flow matching approach on $\mathcal{P}_2(\mathcal{M})$ and introduce the Riemannian Entropic Map, a GPU-efficient approximation of the optimal transport map on manifolds. Our experiments show that by respecting the intrinsic geometry of the data, RWEFM can generate whole single-cell samples in hyperspherical latent spaces and protein conformational ensembles on the torus. As RWEFM requires only a geodesic distance and a projection operator, it is not restricted to manifolds with closed-form geometry, which we demonstrate by generating distributions on a general triangulated mesh.
