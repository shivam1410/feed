---
title: "Folded Transport MCMC: Certifiable Quotient Posterior Computation for Symmetric Bayesian Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04307"
authors: ["Jun Hu"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.04307v1"
image: ""
generated: "2026-06-04T19:29:25+05:30"
---

arXiv:2606.04307v1 Announce Type: new Abstract: Bayesian models with finite symmetry - mixture models with exchangeable components, structural identification with closely-spaced modes - define posteriors that are invariant under a group of label permutations, creating redundant multimodality that degrades MCMC convergence diagnostics. We introduce Folded Transport MCMC (FolT-MCMC), which performs inference directly on the quotient posterior by constructing an independence sampler on the fundamental domain of the symmetry group. The quotient proposal is formed by symmetrising a learned normalising flow over the group orbits. We prove that the LCNF oscillation-based certification framework transfers to the quotient metric with a stabiliser-corrected ball-mass bound and improved covering radius, and that the quantile-core certified lower bound improves whenever the unfolded flow exhibits cross-mode proposal deficiency. On Gaussian mixtures (d = 2 - 20), label-switching targets (up to 24 equivalent modes), and a standard Bayesian three-component mixture posterior, the quantile-core certified improvement ratio ranges from 2x to 145x, with the folded certificate empirically nearly dimension-free. On real accelerometer data from a supertall building during Typhoon Mangkhut, FolT-MCMC yields a non-vacuous quantile-core certificate where the unfolded certificate is vacuous.
