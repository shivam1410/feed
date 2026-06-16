---
title: "DiRecT: Safe Diffusion-Based Planning via Receding-Horizon Denoising"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15359"
authors: ["Paolo Giaretta, Zeyang Li, Navid Azizan"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.15359v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15359v1 Announce Type: new Abstract: Diffusion models have emerged as powerful tools for planning and control by learning multimodal distributions over actions and trajectories. Yet reliable inference-time safety enforcement remains a key barrier to their deployment in safety-critical tasks. Existing approaches typically project each denoising iterate onto the feasible set, even though constraints are defined only on the final clean trajectory. Enforcing feasibility on noisy intermediate samples can therefore overconstrain the sampling dynamics, substantially degrading sample quality. To address this limitation, we introduce DiRecT (Diffusion-based planning via Receding-horizon denoising with Terminal constraints), a training-free algorithm for constrained sampling from diffusion models via stochastic optimal control (SOC). DiRecT enforces constraints only on the final clean sample, avoiding unnecessary restrictions on the intermediate denoising dynamics. Inspired by model predictive control, we derive a principled receding-horizon surrogate for the otherwise intractable constrained SOC formulation, yielding an efficient algorithm that cleanly separates stochastic denoising from constraint satisfaction, progressively steering samples toward feasible final trajectories without distorting the learned diffusion dynamics. Furthermore, DiRecT is highly flexible: it can leverage off-the-shelf or domain-specific optimizers, incorporate priors over environment dynamics, and optimize additional soft rewards. Extensive experiments on safe planning benchmarks demonstrate that DiRecT substantially improves deployment safety and task performance over existing diffusion-based planning baselines.
