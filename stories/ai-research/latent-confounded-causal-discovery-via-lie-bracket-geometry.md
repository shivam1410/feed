---
title: "Latent Confounded Causal Discovery via Lie Bracket Geometry"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19610"
authors: ["Sridhar Mahadevan"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19610v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19610v1 Announce Type: new Abstract: Recent work on Kan-Do-Calculus (KDC) has established that the boundary between passive observation and active intervention in causal inference is a category-theoretic bi-adjunction, with interventions modeled by left Kan extensions and conditioning by right Kan extensions. This paper introduces two causal discovery algorithms under latent confounding, building on the information-geometric and categorical consequences of KDC. In smooth statistical settings, Radon-Nikodym derivatives between observational and interventional measures induce local causal vector fields; failures of these fields to close under Lie brackets become computable Frobenius residuals, which we interpret as witnesses of failed visible integrability and possible latent or unmodeled structure. Our first algorithm, BRIDGE (Bracket Residuals for Interventional Discovery and Geometric Estimation), combines an interventional density or Radon-Nikodym-ratio engine with a geometric screen that proposes a high-recall family of admissible arrows, identifies non-closing visible pairs as latent-obstruction candidates, and passes the reduced family to downstream score-based or differentiable discovery routines. The second algorithmic contribution, Spectral Kan-Do Flow Matching (SKFM), learns amortized intervention fields and factors latent curvature spectrally, exposing the direct Lie-space endpoint toward which BRIDGE points. A detailed set of experiments show that both algorithms are capable of discovering causal models with latent confounders while collapsing the super-exponential space of possible DAGs by many orders of magnitude. This paper introduces a new paradigm in causal discovery, where latent structure is inferred directly from the geometry of intervention-induced flows.
