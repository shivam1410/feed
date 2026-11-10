---
title: "Match the Geometry Before the Surrogate: Extreme Low-Budget Optimization in High Dimensions"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10267"
authors: ["Michal Pr\\r{u}\\v{s}ek, Adam Novoz\\'amsk\\'y, Filip \\v{S}roubek"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10267v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Low-budget molecular optimization is often framed as Bayesian optimization in a learned latent space, but standard benchmarks typically allow hundreds or thousands of evaluations, whereas a realistic wet-lab round may allow only a few dozen. We revisit this regime using a SELFIES molecular variational autoencoder (VAE) with a Gaussian prior and GuacaMol objectives at N = 30 evaluations. The main finding is not a new surrogate model, but an interaction in candidate generation. The encoder means of a reference set of molecules concentrate near a narrow spherical shell, while many high-dimensional optimizers propose candidates from boxes or box-shaped trust regions. We study a simple constraint, the on-sphere scaffold, that restricts candidate generation to this shell. We then introduce two minimal optimizers to probe what remains useful once the support is fixed. GeoWalk performs geodesic local search on the shell without a surrogate. After 30 evaluations, it shows no detected difference from a Gaussian-process (GP) surrogate on the shell, which is ahead earlier in the budget. GeoCMA adds covariance learning in a random subspace. It does not improve on GeoWalk in the molecular benchmark. On LassoBench it has a lower mean loss than GeoWalk, but full-dimensional CMA-ES remains stronger on most tasks. A factorial experiment with a single GP crosses the candidate support (shell or box) with the acquisition maximizer (a finite candidate set or a continuous optimizer). In this benchmark, shell candidates outperformed box candidates when acquisition was maximized over a candidate set, but not with continuous maximization by L-BFGS-B. These results come from a controlled study of one Gaussian-prior VAE benchmark and do not recommend VAEs for molecular optimization. The practical lesson is to control the candidate support and the acquisition maximizer before attributing a gain to the surrogate.
