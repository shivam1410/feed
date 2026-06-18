---
title: "Concept Modulation Models: A Unified Framework for Identifiability and Extrapolation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18509"
authors: ["Soheun Yi, Yizhou Lu, Chandler Squires, Pradeep Ravikumar"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.18509v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18509v1 Announce Type: new Abstract: Reliable generalization in conditional latent variable models requires understanding both identifiability and extrapolation: how observed variation across attributes determines latent structure, and how that structure determines distributions at unseen attributes. However, existing identifiability and extrapolation guarantees are largely model-specific, with separate analyses in nonlinear ICA, causal representation learning, perturbation modeling, and related conditional latent variable models. We introduce concept modulation models (CMMs), an attribute-indexed class of conditional generative models with structure $A\to \Lambda \to C\to X$, where attributes select modulators, modulators induce latent concept laws, and concepts generate observed features. CMMs lift transition-based identifiability to conditional settings by showing that feature agreement on observed attributes induces a latent concept transition constrained by the CMM class. We express these constraints through attribute potentials, log-density ratios between attribute-conditioned concept laws, separating the generic lifting step from model-specific rigidity arguments. The same potentials control extrapolation: agreement at unseen attributes holds exactly when the transported attribute-potential identities extend to those attributes. This yields algebraic extrapolation criteria, identifies the common potential-based proof objects behind several existing identifiability and extrapolation results, and, when combined with the model-specific rigidity arguments in those works, recovers their stated conclusions.
