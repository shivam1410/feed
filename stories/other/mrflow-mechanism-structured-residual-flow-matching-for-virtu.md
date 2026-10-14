---
title: "MRFlow: Mechanism-Structured Residual Flow Matching for Virtual Cell Perturbation Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.13966"
authors: ["Haojie Yang, Ran Su"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.13966v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Predicting cellular responses to chemical and genetic perturbations is a central test for AI virtual cells, yet many single-cell models reduce each condition to an average expression shift. This target is misaligned with perturbation biology: rare states, resistant subpopulations, and context-dependent effect sizes may coexist under the same intervention. MRFlow treats virtual-cell prediction as conditional transport between empirical single-cell measures. Control and perturbed cells are embedded in a variational latent state space, greedy low-cost supervision is constructed over detached minibatch states, and a conditional flow-matching vector field transports control populations toward perturbed populations. The field decomposes into a mechanism-structured affine dictionary, which recombines shared latent response operators with a low-rank condition-specific correction, and a spectrally controlled residual field for nonlinear cell-level variation. Genetic perturbations are encoded through a regulatory-graph GCN, chemical perturbations through Morgan fingerprints, and both enter the same conditional dynamics interface. Across eight gene and drug perturbation benchmarks, MRFlow attains the highest composite score while preserving competitive raw performance on differential-expression and distributional metrics. The results support latent distribution transport as a principled and empirically effective formulation for perturbation-aware virtual cell modeling.
