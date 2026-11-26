---
title: "How to build and train your recurrent-depth model: A fixed-point perspective"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31513"
authors: ["Thomas Pethick"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.31513v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Recurrent-depth models are trained with truncated backpropagation, yet it remains unclear why this works. We show that input injection, commonly used in recurrent-depth models, is exactly Halpern iteration, and that a slowly vanishing stepsize provably converges with a backpropagation window polylogarithmic in the depth. The guarantees require a Lipschitz operator, which for SwiGLU leads to a weight constraint in both row and spectral norm, while only a row norm constraint for gates. Based on these constraints, we develop an optimizer tailored to each parameter group, Sparrow, which provides a drop-in replacement of Muon/MuonH with no overhead, that speeds up training even beyond recurrent models.
