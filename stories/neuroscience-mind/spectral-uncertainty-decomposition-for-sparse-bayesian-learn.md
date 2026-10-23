---
title: "Spectral Uncertainty Decomposition for Sparse Bayesian Learning"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30207"
authors: ["Ismail Huseynov, Stefan Haufe"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.30207v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

Estimating distributed neural sources from M/EEG measurements is an ill-posed inverse problem where principled uncertainty quantification remains challenging. The usual conditional Gaussian posterior covariance does not explicitly distinguish uncertainty along likelihood-visible source directions from uncertainty that is invisible to the measurements. We propose a spectral framework based on the singular value structure of the prior-preconditioned forward operator, which provides an exact, interpretable decomposition of the posterior covariance into data-informed and indeterminacy epistemic components. This formulation identifies uncertainty contributions that are reducible by better measurements from those that are fundamentally irreducible by sensing geometry. We further derive an equivalent subtractive decomposition that expresses the prior covariance as the sum of posterior and data-driven reduction terms, enabling precise accounting of uncertainty reduction through Bayesian learning. Together, these complementary representations offer both theoretical insight and practical tools for interpretable uncertainty quantification in M/EEG source imaging for linear-Gaussian Bayesian inverse solvers where the posterior covariance is available in closed form.
