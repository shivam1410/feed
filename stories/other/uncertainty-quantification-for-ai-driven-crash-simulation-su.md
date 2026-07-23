---
title: "Uncertainty Quantification for AI-Driven Crash Simulation Surrogates: A Comparative Study of Monte Carlo Dropout and Deep Ensemble on Open-Source Bumper Beam Benchmark"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18294"
authors: ["Sudeep Chavare"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18294v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18294v1 Announce Type: new Abstract: Machine learning surrogate models are increasingly being explored in engineering product development to augment simulation-driven design, offering near-instantaneous predictions that complement computationally expensive high-fidelity analyses. However, a critical gap limits their adoption in safety-critical workflows: a point prediction without an accompanying uncertainty estimate cannot tell an engineer when the model should not be trusted. This work presents a systematic, head-to-head comparison of two widely used uncertainty quantification approaches -- Monte Carlo Dropout and Deep Ensembles -- applied to an open-source surrogate pipeline built on NVIDIA PhysicsNeMo. A key contribution is the use of concrete dropout, a built-in PhysicsNeMo capability that eliminates the dropout rate as a manual hyperparameter by learning it end-to-end during training, directly addressing the most common criticism of Monte Carlo Dropout-based uncertainty quantification. Automotive crash simulation is used as the application domain, with a steel bumper beam impact problem serving as the benchmark. Both methods are evaluated on identical held-out simulations and compared on point accuracy, uncertainty band calibration, and computational cost. The results reveal a fundamental trade-off between accuracy and calibration that challenges the common assumption that deep ensembles are the default gold standard for surrogate uncertainty quantification. The findings demonstrate that well-calibrated, hyperparameter-free uncertainty estimates are achievable within a fully open-source engineering workflow at a fraction of the computational cost of ensemble approaches.
