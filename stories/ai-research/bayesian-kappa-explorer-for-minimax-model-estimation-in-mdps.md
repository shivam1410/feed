---
title: "Bayesian $\\kappa$-Explorer for Minimax Model Estimation in MDPs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25160"
authors: ["Xihe Gu, Urbashi Mitra, Tara Javidi"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.25160v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

We study active exploration for minimax transition estimation in unknown Markov decision processes (MDPs). Frequentist $\kappa$-Explorer~\citep{gu2026kappa} addresses this problem through a parameterized family of exploration objectives, but requires confidence-bound constructions and joint optimization over plausible transition kernels and occupancy measures, introducing a computational burden that limits its practical applicability. We develop Bayesian $\kappa$-Explorer, which simplifies this procedure by placing Dirichlet priors on the transition distributions. Under the posterior mean estimator, the posterior expected squared $\ell_2$ error equals the total posterior variance, providing a closed-form exploration signal. The algorithm plans under the posterior mean model, eliminating confidence-set optimization. Under the stated assumptions, this simpler planning procedure retains the $\widetilde{O}(T^{-1/3})$ surrogate convergence rate of frequentist $\kappa$-Explorer. We further bound the maximum posterior variance relative to the optimal asymptotic minimax allocation benchmark. Experiments on Pendulum, Mountain Car, and Taxi demonstrate lower worst-case transition-estimation errors than the tested baselines.
