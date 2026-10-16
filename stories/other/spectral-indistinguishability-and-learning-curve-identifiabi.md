---
title: "Spectral Indistinguishability and Learning-Curve Identifiability in Quadratic Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20678"
authors: ["Dekun Yang"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20678v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

We study what spectral summaries and scalar learning curves reveal about centered quadratic networks. We construct analytic positive input densities with exactly Gaussian one- and two-coordinate marginals. Their complete fourth-moment operators are intertwined by an orthogonal map fixing the entire diagonal teacher algebra, so the corresponding anchored spectral measures agree. For selected common teachers with a nonzero cycle invariant, their factorized loss curves differ because the map does not preserve matrix multiplication. Cycle length $r$, which can be arbitrarily large, gives $O(\varepsilon^r)$ contrast uniformly in training time for each fixed construction. For a supplied pair, noisy scalar loss queries require order $\varepsilon^{-2r}$ observations, while bounded initialization interventions with scalar gradient readouts require order $\varepsilon^{-2}$. A shared-input score, equal to a paired-gradient difference, attains the optimal input-sample exponent without knowing the teacher. An explicit family of diverging auxiliary teacher scales instead admits a nonzero finite limiting contrast at coupling $1/\log L$. Conversely, for Gaussian inputs and a rationally independent teacher spectrum, one exact scalar loss curve identifies the initial predictor up to sign conjugation. Within this rationally independent class, with nonzero diagonal inverse-state error in every coordinate and calibrated time and loss scales, it also identifies the unknown teacher spectrum and active dimension, modulo simultaneous rotations. For fixed dimension and distinct unordered teacher sums, dimension-minimal exact observations give generic joint local recovery. Finite exact global bounds hold for a known teacher and, on the active class, under a blind dimension cap. Exact certificates and full-weight replay verify the construction; numerical inverse checks reveal severe ill-conditioning.
