---
title: "Byzantine-Robust Muon: Resilient Momentum Orthogonalization for Distributed Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13137"
authors: ["Grigory Malinovsky, Yury Demidovich, Peter Richt\\'arik"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13137v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Optimization methods, including the Muon optimizer based on the Linear Minimization Oracle (LMO) and momentum orthogonalization, have shown strong empirical performance in large-scale and distributed learning, yet their robustness to adversarial behavior and data heterogeneity is not well understood. We study these methods within a unified first-order trust-region framework and analyze Muon-based updates with robust aggregation for Byzantine-robust distributed and federated learning. Our analysis does not rely on the i.i.d. assumption and introduces a non-Euclidean notion of heterogeneity consistent with the trust-region geometry. Under this framework, we establish convergence guarantees for both general non-convex and star-convex objectives. Our results provide a theoretical characterization of Byzantine-robust Muon-based optimization, with an additive heterogeneity error floor consistent with known impossibility results, under explicit aggregation assumptions. Under an explicit additive oracle-error condition, the guarantees also cover inexact orthogonalization, with the non-convex Byzantine terms in the bound's numerator unchanged but a smaller progress denominator. In simulated federated training with ResNet-18 and ViT-Tiny on CIFAR-10, additional image benchmarks, and a 38M-parameter byte-level language model on TinyStories, the tested Muon configuration attains higher attacked accuracy (lower perplexity) than the tested SGD and normalized-SGD configurations, and than sign updates on CIFAR-10. Fixed-honest controls further show a substantial RFA advantage over averaging under a bounded RFA-query attack, higher attacked accuracy for Muon-NS than tensorwise Euclidean normalization from shared checkpoints, and lower held-out TinyStories perplexity than a tuned AdamW baseline.
