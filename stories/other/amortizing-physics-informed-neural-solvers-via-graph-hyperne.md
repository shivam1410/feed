---
title: "Amortizing Physics-Informed Neural Solvers via Graph Hypernetworks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19915"
authors: ["Cheng Jing, Abhishek Verma, Kallol Bera, Yixuan He, Kookjin Lee"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19915v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19915v1 Announce Type: new Abstract: Amortizing physics-informed neural networks (PINNs) across related PDEs requires describing each equation to a reusable solver. Coefficient vectors encode numerical parameters in predefined slots, leaving operator and cross-field assignments implicit. We make these relationships explicit in an operator graph, with nodes for fields, derivatives, terms, and residuals and coefficients retained as term attributes. A graph hypernetwork generates diagonal codes that initialize a meta-trained factorized PINN for each target equation. Meta-training and target-specific adaptation use governing equations and prescribed conditions without solution labels. We compare coefficient-vector, DeepSets-based term-set, and graph conditioning by solution accuracy within a fixed adaptation budget. In scalar convection-diffusion-reaction problems, both term-based descriptors improve high-reaction accuracy, with similar performance. In two-field Fisher-KPP, meta-training sees uncoupled and one-way systems; after 3,000 adaptation steps on unseen two-way coupling, the graph's mean final error is 35.7% below the term set and 67.7% below the coefficient vector. In a fixed-structure capacitively coupled plasma model, the coefficient vector performs best. These results support extending coefficient conditioning with explicit equation relationships for physics-based solver adaptation.
