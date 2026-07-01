---
title: "A Stationary-Distribution Theory for Triplet-Based Plateau Search in Random Forest Ensemble-Size Selection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.30837"
authors: ["Andrey A. Dukhovny, Andrey M. Lange"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.30837v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.30837v1 Announce Type: new Abstract: The number of trees is a central computational parameter in Random Forests: increasing it reduces finite-ensemble variability but increases training and prediction cost. Plateau-based tuning adapts this parameter through local comparisons of out-of-bag scores at a geometric triplet of tree counts. After the remaining hyperparameters have stabilized, however, the central triplet point need not converge to a deterministic value; instead, it fluctuates around a stationary regime. This paper develops a stationary-distribution theory for this process. The central ensemble size $B_t$ is modeled as a birth-death Markov chain on a geometric grid, and its stationary distribution is derived through local balance. Under a leading centered folded-normal approximation, equilibrium equations are obtained for the original update rule and a symmetric modified variant, implying that the stationary center $B_*=O(\varepsilon^{-2})$ as $\varepsilon\downarrow 0$. The stationary spread is also characterized. A local Gaussian approximation and a Fokker-Planck interpretation give grid-level variance constants. After conversion to the ensemble-size scale, $\sigma_{B,*}=O(\varepsilon^{-2})$, while the variance is $O(\varepsilon^{-4})$. The leading relative spread is independent of $\varepsilon$ and controlled by the scale factor and update rule. These results interpret plateau-based Random Forest tuning as a stochastic process rather than a deterministic stopping rule.
