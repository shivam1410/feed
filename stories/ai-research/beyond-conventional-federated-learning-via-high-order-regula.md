---
title: "Beyond Conventional Federated Learning via High-Order Regularization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09904"
authors: ["Alireza Kabgani, Masoud Ahookhosh"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.09904v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09904v1 Announce Type: new Abstract: Federated clients that perform several local optimization steps can return parameter displacements with widely different magnitudes. The quadratic regularization of FedProx grows linearly with displacement and therefore offers limited control over the contrast between ordinary and unusually large client movements. We here introduce HiFedProx, which replaces the quadratic penalty with a scale-matched power-type regularizer indexed by $p\geq2$. All powers have the same regularization-gradient magnitude at a reference displacement $R$, while every $p>2$ gives a weaker response below $R$ and a stronger response above it. An exact affine reference calculation shows that increasing $p$ compresses relative displacement disparities, although very large powers approach fixed-radius behavior and increase local curvature. HiFedProx combines this geometry with finite-budget stochastic client optimization and same-minibatch Armijo backtracking. In paired five-seed experiments on a frozen 60-writer FEMNIST subset, a common-parameter study over $p\in\{2,3,4,5,6,7,8\}$ shows similar clean-training performance but substantial gains under composite stress. The lowest moderate- and severe-stress losses occur at $p=7$ and $p=6$, improving over $p=2$ by $11.44\%$ and $23.16\%$, respectively. Although displacement-tail ratios continue to decrease through $p=8$, predictive performance peaks in an intermediate range and Armijo trial cost increases with $p$. These results indicate that the exponent should be calibrated rather than maximized. In our experiments, $p=5$--$7$ provides the most useful range.
