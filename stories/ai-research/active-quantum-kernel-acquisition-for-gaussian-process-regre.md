---
title: "Active Quantum Kernel Acquisition for Gaussian Process Regression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28833"
authors: ["Jian Xu, Delu Zeng, Qibin Zhao"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 51
guid: "oai:arXiv.org:2606.28833v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28833v1 Announce Type: new Abstract: Quantum kernel estimation on near-term hardware is shot-budgeted: every entry of the kernel Gram matrix is a Bernoulli expectation that must be sampled with a finite number of circuit executions. Recent work on quantum kernel classification has shown that allocating shots non-uniformly across kernel entries, weighted by their downstream task sensitivity, can reduce the shot budget required to reach a target accuracy. We extend this idea to Gaussian process (GP) regression, a setting whose downstream quantities (full-spectrum posterior variance, log-determinant, marginal likelihood) couple to kernel error more tightly than the sign-only outputs of classification. We derive three closed-form pair-level sensitivities predictive coupling $|\alpha_i\alpha_j|$, leave-one-out residual, and marginal-likelihood gradient and plug them into a Neyman-style minimum-variance allocation rule. To prevent catastrophic over-concentration when the warm-up sensitivity estimate is itself noisy, we add a high uniform coverage floor justified by a Frobenius lower bound on the missing-entry perturbation. On four UCI benchmarks and two synthetic RBF + Bernoulli controlled studies, the resulting allocator delivers $10$--$21\%$ test-RMSE improvement over uniform allocation across the moderate-budget regime. The gain transfers (i) to genuine ZZ and Pauli-Z quantum kernels on quantum-natural data ($-13$--$15\%$ at low budget, $p<0.05$ paired) and (ii) to four downstream tasks (Bayesian quadrature, heteroscedastic regression, hyperparameter learning, multi-output Cokriging). On UCI features embedded into a ZZ kernel the gain disappears, consistent with the exponential-concentration regime where shot allocation has nothing to exploit.
