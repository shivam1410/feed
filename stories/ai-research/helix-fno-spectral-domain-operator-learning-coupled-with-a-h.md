---
title: "Helix-FNO: Spectral-Domain Operator Learning Coupled with a High-Fidelity Mechanistic Model for Fast Surrogate Simulation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22129"
authors: ["Jiabao Zhao, Chuwei Wang, Jinxi Yang"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.22129v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22129v1 Announce Type: new Abstract: Mechanistic simulation models of full-scale treatment processes remain the only trustworthy, extrapolative description of the underlying physico-chemical dynamics, yet their runtime is far too slow to support the thousands of forward evaluations that a modern decision engine requires at a 5-minute decision cadence. The standard remedy-surrogate modelling-often produces a network that learns a single solution for a single configuration, so it generalises poorly to new influent profiles, control settings or plant layouts. This paper presents Helix-FNO, a teacher-student architecture that couples a thirty-two-state mechanistic teacher with a Fourier neural operator (FNO) student. The teacher supplies a high-fidelity dataset of input-field-to-solution pairs, curated by Latin-hypercube and uncertainty-based active learning to cover the boundary and overload regimes that matter in practice; the student learns, in the spectral domain, the solution operator itself rather than any single solution, thereby moving from learning one instance to learning an entire family of equations. We give the operator formulation, the spectral convolution definition, the weighted distillation loss and the active-learning criterion, and we analyse the approximation error of a truncated Fourier expansion with respect to the smoothness of the parametric solution manifold. An illustrative study compares Helix-FNO against a physics-informed network and a data-driven recurrent surrogate on accuracy, dataset efficiency and inference latency, and places the methods on a speed-accuracy Pareto front. The resulting operator is three orders of magnitude faster than the mechanistic teacher at millisecond inference, which is precisely the capability required for massive candidate screening and online decision support.
