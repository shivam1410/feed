---
title: "Nested Inductive Bias Framework for SPD Manifold Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04466"
authors: ["Tushar Das"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.04466v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04466v1 Announce Type: new Abstract: In Geometric Deep Learning, inductive biases serve two primary functions: enforcing manifold constraints and embedding relational priors. Currently, representation learning on SPD manifolds frequently relies on pullback Euclidean metrics, such as the Log-Euclidean Metric, to satisfy the former. While computationally efficient in avoiding domain boundary violations, these metrics induce a flat geometry that may fail to capture the intrinsic relational priors of datasets. While metrics such as the Poincar\'e metric are widely utilized to induce domain-aligned relational priors, generalizing them from standard vector representations to the SPD manifold has remained a challenge. To bridge this gap, we introduce a Nested Inductive Bias framework that utilizes a two-stage diffeomorphic composition to formally pull back non-Euclidean target geometries onto the SPD manifold. This framework enables the construction of curvature-aligned Riemannian classifiers that simultaneously respect matrix constraints and the latent relational geometry of the data. Empirical evaluations on kinematic and signal processing benchmarks, together with synthetic experiments, demonstrate that deep manifold networks experience degradation in class separability unless the metric curvature aligns with the intrinsic data distribution. Furthermore, for standard vectorized architectures, we propose the Rational Conformal Metric (RCM), designed to establish state-of-the-art geometric robustness against outliers by bounding the representation space.
