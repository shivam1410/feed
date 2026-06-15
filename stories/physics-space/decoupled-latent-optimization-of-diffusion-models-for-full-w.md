---
title: "Decoupled Latent Optimization of Diffusion Models for Full Waveform Inversion"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14139"
authors: ["Chen Min, Zheng Ma"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.14139v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14139v1 Announce Type: new Abstract: Full waveform inversion (FWI) recovers subsurface velocity from seismic recordings by solving a severely ill-posed, nonconvex PDE-constrained optimization. Classical regularizers stabilize the inversion but fail to reproduce realistic geological structures; recent diffusion-prior methods improve realism at the cost of a fragile trade-off between data fidelity and prior consistency. We propose Decoupled Latent Optimization (DLO), which relaxes the standard latent-optimization formulation into a quadratic-penalty objective over an auxiliary physical variable and a latent variable. The data-fidelity gradient acts in physical space, the diffusion sampler contributes only through a decoded prior sample, and the standard smoothed-velocity initialization of classical FWI is preserved. On the OpenFWI benchmark, DLO outperforms classical regularizers and existing diffusion-based methods under clean, noisy, and missing-trace acquisitions. The prior, trained on 70*70 OpenFWI models, transfers directly to the Marmousi and Overthrust benchmarks, where DLO recovers intricate fault structures and remains robust to initialization smoothing and measurement noise.
