---
title: "End-to-End Differentiable Diffusion Conditioning for Physics-Informed Optimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31721"
authors: ["Ricardo Luna Gutierrez, Vineet Gundecha, Rahman Ejaz, Varchas Gopalaswamy, Riccardo Betti, Sahand Ghorbanpour, Aarne Lees, Soumyendu Sarkar"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31721v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Optimizing high-dimensional physical systems under expensive evaluations and complex constraints is a central challenge in science and engineering. In offline model-based optimization (MBO), methods must improve designs using only a fixed dataset and no test-time access to the true objective. However, existing methods typically suffer from conservatism, unconstrained surrogate exploitation, or function as static inference-time samplers that cannot refine candidates against precise physical objectives. In this paper, we propose Differentiable Diffusion Conditioning (D2C) for offline MBO, which leverages the fact that deterministic sampling makes the reverse denoising chain differentiable with respect to the conditioning signal. D2C turns a frozen conditional diffusion model into an end-to-end gradient-based optimizer by directly optimizing conditioning variables at test time via gradients from frozen surrogate objectives and physics-informed penalties backpropagated through the reverse chain. We implement this idea in a composed proposer-evaluator framework and evaluate it on laser pulse optimization for inertial confinement fusion, sustainable data-center workload scheduling, and four Design-Bench tasks. Our method achieves the strongest results on the two real-world tasks and the best average rank across four Design-Bench tasks.
