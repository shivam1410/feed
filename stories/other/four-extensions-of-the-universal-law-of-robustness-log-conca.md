---
title: "Four Extensions of the Universal Law of Robustness: Log-Concave Covariates, Heterogeneous Mixtures, Vector-Valued Predictors, and Markovian Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03653"
authors: ["Tobias J. Peter (ZHAW Zurich University of Applied Sciences)"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03653v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Bubeck and Sellke's universal law of robustness says that fitting $n$ noisy samples below the noise level with a class of $p$ real parameters forces a Lipschitz constant of order $\sqrt{nd/p}$, when the covariate distribution on $\mathbb{R}^d$ is isoperimetric: smooth interpolation costs a factor $d$ of overparametrization. Its hypotheses are Gaussian-type concentration, a homogeneous covariate law, scalar outputs, and independent samples; we relax each one. Exponential concentration suffices, at the unchanged rate and absolute constant and at the price of a capacity burn-in, some form of which we show is necessary; this gives the law for normalized log-concave covariates, with a $\log d$ loss from the current KLS bound. For heterogeneous mixtures the worst component constant is replaced by the weighted average of the component constants, under a typicality condition on the mixture composition. For vector-valued predictors the bound at the Frobenius Lipschitz scale is free of the output dimension $K$, and the Euclidean bound loses only $K^{-1/2}$, a loss that covariate-independent noise removes. Stationary Markov covariates retain the i.i.d. rate, the pseudo-spectral gap entering only the sample-size conditions. One master theorem carries the shared argument, and constants are explicit throughout.
