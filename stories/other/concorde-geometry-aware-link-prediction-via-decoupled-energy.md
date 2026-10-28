---
title: "Concorde: Geometry-Aware Link Prediction via Decoupled Energy Minimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36204"
authors: ["Ege Demirci, Ambuj Singh"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36204v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Link prediction remains difficult in sparse graphs, where diffusion heuristics lack connectivity and geometric methods suffer spectral instability when coupling learned representations with diffusion operators. We introduce Concorde, an energy-based framework that resolves this by decomposing link likelihood into three structurally decoupled branches: (i) a parameter-free spectral anchor that establishes permutation-invariant topological stability; (ii) a mixed-curvature residual on a learnable $\mathbb{H}^{d_h}_{c_h} \times \mathbb{S}^{d_s}_{c_s}$ product manifold, regularized by a feature-aware Ollivier-Ricci curvature proxy; and (iii) a continuous vector field on the tangent bundle of hyperbolic space for non-local structural alignment across topological gaps. The branches are fused via learned gating and trained with an N-pair ranking loss aligned with retrieval-style evaluation. Across five benchmarks spanning sparse, dense, featureless, and attributed regimes, Concorde establishes state-of-the-art early retrieval precision, nearly doubling P@10% over leading baselines in sparse settings.
