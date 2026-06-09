---
title: "MST-Direct at Scale: Multivariate and Conditional Geostatistical Simulation via Sinkhorn Optimal Transport"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07578"
authors: ["Tcharlies Bachmann Schmitz"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 56
guid: "oai:arXiv.org:2606.07578v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07578v1 Announce Type: new Abstract: This paper extends MST-Direct, a Matching-via-Sinkhorn-Transport approach for multivariate geostatistical simulation, from the original bivariate, unconditional, small-grid formulation to multivariate, conditional, and large-grid settings. We address the three main limitations identified in the original work: (i) scalability beyond a few thousand nodes through a sparse, candidate-restricted Sinkhorn matcher with O(nC) memory complexity; (ii) extension to multiple variables by matching target value tuples onto an independent FFT-MA Gaussian backbone that reproduces a prescribed variogram; and (iii) hard-data conditioning by fixing observed data tuples at their spatial locations while conditioning the backbone through kriging. Because the transport plan remains a permutation of the target tuples, the multivariate joint distribution is preserved exactly. The method is validated using the same six-variate, heteroscedastic, strongly nonlinear reference distribution employed in Direct Multivariate Simulation (DMS), under both unconditional (200x200) and conditional (100x100, 200 hard-data samples) scenarios, and is benchmarked against the Projection Pursuit Multivariate Transform (PPMT). Results show that MST-Direct reproduces the joint distribution with zero histogram error, exactly honours hard data, and accurately reproduces the prescribed spatial correlation structure, whereas PPMT remains an approximation. Index Terms-Optimal transport, Sinkhorn algorithm, geostatistical simulation, multivariate simulation.
