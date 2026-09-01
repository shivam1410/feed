---
title: "SS-ESOAP: Self-Scaled Adaptive Preconditioning for Physics-Informed Learning"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29448"
authors: ["Guangyuan Wang, Mads Toftrup, Sebastian Loeschcke, Yixuan Wang, Anima Anandkumar"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.29448v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29448v1 Announce Type: new Abstract: Physics-informed neural networks (PINNs) often face ill-conditioned objectives that limit high-accuracy training. Dense quasi-Newton methods improve local conditioning but require expensive optimizer state, while Kronecker-factored methods such as SOAP scale to larger networks but rely on periodic basis updates. We introduce \method, which augments SOAP-style preconditioning with a scalar secant-energy correction adapted to Kronecker geometry and an adaptive basis update followed by variance-state downscaling. We characterize the directional secant matching induced by the scalar correction and give a bound on variance-state mismatch across basis changes. Across eight PDE benchmarks, \method attains the lowest final residual on six, including Burgers and Boussinesq, while SOAP-family baselines perform better on Gray-Scott and Ginzburg-Landau. On Boussinesq, \method reaches a residual of $10^{-5}$ in 4.1 hours with 9.2 GB peak VRAM, while Adam does not reach this target within 14 hours. Three-seed $L^2$ and $H^1$ errors on four representative PDEs support the link between lower residuals and improved solution accuracy. These results position \method as a scalable option for stiff, high-accuracy physics-informed training, rather than a uniform replacement for existing optimizers.
