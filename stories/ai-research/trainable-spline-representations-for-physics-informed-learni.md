---
title: "Trainable Spline Representations for Physics-Informed Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15751"
authors: ["Giovanni Canali, Nicola Demo, Gianluigi Rozza"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2607.15751v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15751v1 Announce Type: new Abstract: This work introduces Physics-Informed Splines (PI-Splines), a structured spline-based architecture for physics-informed learning. Instead of representing the solution of a differential equation with a neural network, PI-Splines directly parametrize the unknown field through a tensor-product B-spline expansion with trainable control coefficients. This formulation preserves the residual-based training paradigm of Physics-Informed Neural Networks while providing compact support, explicit smoothness control, analytical derivatives, and a direct geometric interpretation of the trainable parameters. When compatible with the spline representation, boundary conditions can be imposed strongly by fixing suitable boundary control coefficients. The proposed method is evaluated on several benchmark problems of increasing difficulty and compared with standard physics-informed frameworks under matched governing equations, collocation sets, loss terms, and optimization procedures, so as to isolate the effect of the approximation architecture. Numerical experiments show that PI-Splines provide a competitive and stable alternative to neural physics-informed architectures, particularly in settings where structured representations, locality, and parameter efficiency are desirable.
