---
title: "A Study of Conditional Diffusion Models for Open-Loop Control under Dry Friction and Stiction"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01756"
authors: ["Eric Aislan Antonelo"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.01756v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01756v1 Announce Type: new Abstract: Diffusion models have recently emerged as expressive generative priors for planning and control. This paper studies Action Diffusion, an action-sequence diffusion formulation used as an open-loop proposal distribution for a point-mass system with dry friction and stiction. In this benchmark, motion starts only when the applied input exceeds a static-friction threshold, so effective controls occupy a small and temporally structured subset of the action-sequence space. A compact conditional 1D U-Net generates bounded control sequences conditioned on initial and target states. We compare it with uniform random shooting, random shooting from the same structured dataset prior, and the Cross-Entropy Method (CEM). Results show that Action Diffusion reduces terminal error and stuck steps, especially in low-sample regimes. These results indicate that conditional diffusion provides an effective mechanism for generating temporally coherent control sequences that overcome stiction by conditioning and recombining structured control primitives from the training prior for state-to-state open-loop control.
