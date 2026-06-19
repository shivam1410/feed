---
title: "Zero-Inflated Gaussian Distributions Enable Parameter-Space Sparsity in Estimation-of-Distribution Algorithms"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19369"
authors: ["Andreas Faust, Sven Nitzsche, Juergen Becker"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.19369v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19369v1 Announce Type: new Abstract: Estimation-of-distribution algorithms (EDAs) are a powerful class of evolutionary methods for black-box optimization, especially when little is known about the structure of the objective. Whereas classical evolutionary algorithms rely on hand-designed mutation and crossover operators, hard to devise for unknown problem structures, and a source of bias, EDAs sidestep operator design entirely: they fit a probability distribution to the best individuals and sample the next generation from it. EDAs are well established on continuous parameter spaces, but they have not previously been generalized to sparse ones, in which most coefficients of a good solution are exactly zero. Existing sparse black-box optimizers therefore reintroduce exactly what EDAs were designed to avoid: hand-crafted sparsity operators, bi-level schemes alternating between support set and active values, zeroing thresholds, and other baked-in assumptions. We close this gap by proposing multivariate zero-inflated Gaussian (ZIG) distributions as EDA sampling laws. A latent Gaussian model with separate indicator and value dimensions represents sparsity patterns, correlations among active parameters, and the interactions between the two, so sparsity patterns and active values are optimized jointly, hierarchy-free. We show that the latent parameters of this model are identifiable from observed samples, unlike in the missing-data settings where related constructions originate, and introduce practical amortized inversion-based estimators for them. The estimators accurately recover latent correlation structures, and on the Lunar Lander benchmark the resulting ZIG-EDA converges faster and reaches higher final returns than a dense Gaussian EDA, a hand-crafted sparse evolutionary algorithm, and an ad-hoc sparse EDA, while finding controllers with only a small fraction of parameters active.
