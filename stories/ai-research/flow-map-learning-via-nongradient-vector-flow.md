---
title: "Flow Map Learning via Nongradient Vector Flow"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.26398"
authors: ["Mark Goldstein, Anshuk Uppal, Raghav Singhal, Aahlad Puli, Rajesh Ranganath"]
date: "Thu, 30 Jul 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2607.26398v1"
image: ""
generated: "2026-07-30T19:07:10+05:30"
---

arXiv:2607.26398v1 Announce Type: new Abstract: Diffusion and flow-based models benefit from simple regression losses, but inference incurs significant overhead because sampling requires integration. Consistency models address this by directly learning the flow maps along the ODE trajectory, opening a design space between one-step and many-step approaches. However, existing methods face computational challenges such as requiring model inverses or backpropagation through iterated model calls, and do not always prove that the desired ODE flow map is a solution to the loss. We introduce SGFlow, an approach for learning flow maps that bypasses explicit invertibility constraints and expensive differentiation through model iteration. SGFlow trains a model to compute both the ODE solutions and the implied velocity from scratch by following non-conservative dynamics with a stationary point at the desired flow map. On the CIFAR image benchmark, no single method attains the best FID at every step count: SGFlow attains the best FID at 10 sampling steps and remains competitive with flow matching, Meanflow, and Lagrangian map matching at other step counts, while being the only one with a proven stationary-point guarantee for its stopgrad-based dynamics.
