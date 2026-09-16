---
title: "Certified Uncertainty Propagation in One-Shot Federated Bayesian Models via Posterior Event Transport"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16373"
authors: ["Mahyar Mohammadi, Mohammad Hossein Badiei, Abolfazl Yaghmaei, Hamed Kebriaei"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16373v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16373v1 Announce Type: new Abstract: Probabilistic certification of Bayesian neural networks lower-bounds the posterior probability that a model satisfies a verifier-defined safety property. In one-shot federated Bayesian learning, however, the deployed model is obtained by aggregating parameters drawn from client-specific posterior distributions, so local certificates do not directly guarantee safety of the aggregated model. This paper develops a deployment-consistent certification framework by propagating local posterior events through the deployment aggregation rule, with an exact geometric characterization for Federated Averaging (FedAvg). Each client constructs disjoint hyper-rectangular regions in parameter space and computes their probability masses. The server forms Cartesian products of these regions, maps them through the deployment rule, and retains a product event only when its aggregation image is verified to satisfy the safety property. Under independent client posteriors, each product-event probability factorizes into local masses, and summing verified disjoint events yields a lower bound on safety probability of the deployed model. For FedAvg with nonnegative aggregation coefficients, the image of a Cartesian product of axis-aligned hyper-rectangles is exactly a weighted hyper-rectangle, introducing no set over-approximation. We distinguish the proposed transported-event certificate from direct certification under posterior distributions induced by FedAvg and Product-of-Gaussians aggregation. Experiments on MNIST and Fashion-MNIST under label-Dirichlet heterogeneity show that the transported FedAvg certificate ranges from 22.51% to 46.89%, while direct global certificates range from 72.05% to 91.39%. Results show that predictive accuracy and certifiable safety do not necessarily follow the same trend, and that global posterior constructions can exhibit distinct certification behavior across architectures.
