---
title: "Physics-conforming Latent Twins"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15053"
authors: ["Matthias Chung, Yutong Bu, Deepanshu Verma"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.15053v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15053v1 Announce Type: new Abstract: Surrogate models are central to scientific machine learning, where they enable fast prediction, simulation, inference, and control for complex physical systems. For time-dependent problems, however, accurate interpolation of training trajectories is not sufficient: reliable surrogates should also respect the conservation laws, invariants, admissibility conditions, and dissipative structures that give those trajectories physical meaning. We introduce Physics-conforming Latent Twins, a framework for learning latent surrogate solution operators whose dynamics satisfy selected physical principles by design. The method builds on the Latent Twin formulation by jointly learning an encoder, a decoder, and a latent flow map between arbitrary time-indexed states, while constraining the latent dynamics to preserve or dissipate prescribed structural quantities. We develop a constraint-transfer viewpoint that connects physical structure in the original state space with compatible constraints in latent space, and prove structure-preservation bounds showing how latent enforcement improves control of physical defects after decoding. We also derive algebraic conditions for latent flow maps that preserve linear and quadratic invariants or enforce dissipative inequalities. Numerical experiments on representative ODE and PDE benchmarks demonstrate improved constraint satisfaction, structural fidelity, and qualitative long-time behavior while maintaining accurate surrogate prediction.
