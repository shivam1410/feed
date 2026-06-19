---
title: "Advances in Scientific Machine Learning for Coupled Fluid Flow and Transport"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19562"
authors: ["Gabriel F. Barros, R\\^omulo M. Silva, Alvaro L. G. A. Coutinho"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.19562v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19562v1 Announce Type: new Abstract: This chapter reviews recent advances in Scientific Machine Learning (SciML) for modeling coupled fluid flow and transport phenomena governed by the incompressible Navier-Stokes and scalar transport equations. Such systems, found in applications like turbidity currents and thermal convection, feature strong nonlinear coupling and multiscale behavior that make high-fidelity simulations computationally expensive. To address this, the chapter surveys state-of-the-art SciML methods for building efficient surrogate models, including linear reduced-order techniques based on Singular Value Decomposition (such as Dynamic Mode Decomposition) and nonlinear neural network approaches like Physics-Informed Neural Networks (PINNs) and $\beta$-Variational Autoencoders ($\beta$-VAEs). It first covers the authors' work combining these models with High Performance Computing strategies, including Adaptive Mesh Refinement/Coarsening (AMR/C) and scientific floating-point data compression. It then presents two new contributions: surrogate modeling of turbidity currents via PINNs, and the extraction of disentangled nonlinear modes from thermal flows using $\beta$-VAEs. Governing equations and representative benchmarks, including lock-exchange flows and Rayleigh-B\'enard convection, illustrate these methodologies. The chapter is intentionally long, covering both the mathematical and physical foundations of coupled fluid flow and the computational aspects of state-of-the-art modeling. Overall, it demonstrates how SciML enables fast, accurate approximations of complex coupled systems within the specific data regimes and modeling assumptions considered, while substantially reducing computational cost relative to full-order simulations. Broader capabilities such as real-time prediction and uncertainty quantification remain active research directions whose feasibility depends strongly on the problem at hand.
