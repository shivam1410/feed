---
title: "Beyond Arbitrary Geometry: Topology Generalization In neural PDE Operators"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05860"
authors: ["Peiyao Chen, Zhouyuan Xu, Jianguo Nie, Jiansheng Fan, Chen Wang"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.05860v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05860v1 Announce Type: new Abstract: Neural operators that accept arbitrary meshes are often treated as geometry-general, but unseen domain topology changes both the invariant and decaying subspaces of a PDE operator. We use Hodge heat flow as a controlled lens on this distinction and introduce TopoBox-3D, where tunnels and cavities vary Betti support while the exact Hodge decomposition separates the harmonic kernel from the positive spectrum. Across six architectures, models that infer topology implicitly suffer excess matched degradation in 37 of 45 model--task topology-OOD cells, yet cases that change harmonic dimension are not more strongly penalized on average. The dominant difficulty is instead spectral: the initial Rayleigh quotient is the most stable predictor of error, and spectral broadening adds information for edge and face cochains. Most strikingly, controlled probes show that explicit incidence and harmonic coordinates do not yield the best kernel-identity accuracy; nevertheless, TNO ranks first in mixed-input nonharmonic accuracy on all six tasks with nontrivial harmonic support. Together, these results establish topology as a distinct generalization axis beyond arbitrary-geometry compatibility and show that its influence extends across the Hodge spectrum rather than remaining confined to the harmonic kernel. More broadly, they suggest that global, low-frequency structural priors may help organize predictions in the faster-decaying complementary component, offering a new perspective on how neural operators may generalize across topology as well as geometry.
