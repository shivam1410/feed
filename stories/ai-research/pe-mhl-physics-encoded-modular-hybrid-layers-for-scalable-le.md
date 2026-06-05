---
title: "PE-MHL: Physics-Encoded Modular Hybrid Layers for Scalable Learning of Complex Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04290"
authors: ["Ismail Hassaballa, Mircea Lazar"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2606.04290v1"
image: ""
generated: "2026-06-06T01:41:01+05:30"
---

arXiv:2606.04290v1 Announce Type: new Abstract: Hybrid models that combine physics-based and data-driven components have shown strong potential for achieving accuracy and interpretability in control applications. While recent methods have made progress in incorporating physical consistency, challenges remain in scalability, robustness to noise, and control of model complexity. This paper proposes a Physics-Encoded Modular Hybrid Layer (PE-MHL) framework, in which a baseline physics-based model is incrementally refined through the addition of new sub-models, where each new component adds complexity while preserving what previous components have already learned. We establish a theoretical guarantee for this construction: with a least-squares initialization of each new sub-model, the training error is monotonically non-increasing in the number of sub-models and provably converges. Empirical evaluations on a nonlinear NARX benchmark and the Quanser Aero 2 platform demonstrate that PE-MHL outperforms equivalently sized monolithic networks in both accuracy and generalization, while also providing more stable training dynamics and better preservation of underlying data structures.
