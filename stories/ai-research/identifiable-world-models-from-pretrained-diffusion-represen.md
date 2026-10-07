---
title: "Identifiable World Models from Pretrained Diffusion Representations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07028"
authors: ["Ruchi Sandilya, Conor Liston, Logan Grosenick"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2610.07028v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Diffusion-based world models can generate and predict trajectories in high-dimensional dynamical systems, but predictive accuracy does not imply that their latent coordinates recover the underlying state variables or causal interactions. We ask whether a frozen pretrained diffusion model can be equipped with identifiable coordinates without retraining its generative backbone. We show that auxiliary-variable nonlinear ICA guarantees can be transferred to Contrastive Diffusion Alignment (ConDA), which learns only a lightweight alignment map on top of frozen diffusion latents. Under standard TCL/GCL assumptions, the aligned representation identifies latent dynamical states up to permutation and componentwise invertible transformations, preserves the latent dynamic structural causal model, and reduces lagged graph recovery to transition-Jacobian sparsity. We evaluate TCL-, GCL-, and CEBRA-based ConDA against TDRL, CaRiNG, IDOL, temporal SuaVE, and iVAE across physical and robotic video systems. TCL and GCL achieve near-perfect blockwise state recovery and competitive lagged graph recovery, including exact recovery in a simulated falling-body system. In a simulated bipedal robot, learned dynamics recover the sign and temporal structure of responses to held-out control perturbations. These results show that a frozen generative diffusion model can be equipped with coordinates that are identifiable, structurally interpretable, and useful for analyzing intervention-relevant dynamics.
