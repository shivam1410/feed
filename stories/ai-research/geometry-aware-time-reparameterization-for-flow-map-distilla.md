---
title: "Geometry-Aware Time Reparameterization for Flow-Map Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02427"
authors: ["F\\'elix Dedek, Makoto Yamada"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.02427v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Flow-map distillation enables one- and few-step generation by learning finite-time transitions of a pretrained generative ODE. We investigate whether changing the teacher's time parameterization can make these transitions easier to learn. Motivated by the hypothesis that trajectory segments with large normal acceleration are harder to distill, we propose a geometry-aware time reparameterization that allocates more student time to these regions while preserving the teacher's geometric paths and terminal distribution. We derive a shared clock that equalizes a population normal-acceleration statistic under suitable assumptions, and construct a practical approximation from robust, regularized estimates across teacher trajectories. We incorporate this clock into Lagrangian flow-map distillation, using the transformed time coordinate to condition the student. The clock is estimated once before distillation and requires neither teacher retraining nor additional student parameters or inference-time network evaluations. Experiments on synthetic data, CIFAR-10, and CelebA-64 show improved sample quality over identity-time distillation at matched inference budgets, including improvements in one- and two-step image generation. The gains in one-step generation, where no intermediate sampling times can be adjusted, highlight the benefits of time reparameterization during distillation.
