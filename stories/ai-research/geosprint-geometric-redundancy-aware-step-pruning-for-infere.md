---
title: "GeoSPRINT: Geometric Redundancy-Aware Step Pruning for Inference in Diffusion Trajectories"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.02160"
authors: ["Arpita Joshi"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.02160v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.02160v1 Announce Type: new Abstract: Diffusion models achieve high sample quality but remain expensive at inference time because sampling requires many sequential neural function evaluations (NFEs). Existing acceleration methods either use fixed step-skipping schedules, adapt step sizes based on local numerical error, or require additional training. We introduce GeoSPRINT (Geometric Step Pruning for Inference in Trajectories), a training-free framework for constructing non-uniform sampling schedules from the geometry of denoising trajectories. GeoSPRINT detects geometrically redundant steps using a hyperplanarity test in latent space, implemented efficiently via QR factorization, and converts the resulting redundancy profile into a sampling schedule that allocates more steps to high-curvature regions of the trajectory. In addition, we introduce the trajectory projection score $\alpha_{\mathrm{traj}}$, a residual-variance metric that quantifies trajectory straightness and serves as a model-free diagnostic for rectified flow quality. Across CIFAR-10 ($32{\times}32$), LSUN Church ($256{\times}256$), and Stable Diffusion v1.5 ($512{\times}512$ latent), GeoSPRINT consistently improves over uniform DDIM (Denoising Diffusion Implicit Models) schedules at matched NFE budgets. On CIFAR-10, GeoSPRINT improves FID (Fr\'echet Inception Distance) by 0.7-1.1 over DDIM across 49-89 NFEs and surpasses DPM-Solver++ at NFE${\geq}30$ despite using a first-order DDIM solver. On LSUN Church, it reduces FID from 1.48 to 1.26 at 52 steps, and on Stable Diffusion v1.5 it achieves up to 1.93 FID improvement over DDIM. These results show that trajectory geometry provides a useful global signal for allocating inference steps and that schedule quality can substantially improve diffusion sampling efficiency without retraining.
