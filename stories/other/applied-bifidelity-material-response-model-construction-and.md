---
title: "Applied bifidelity material response model construction and uncertainty quantification with a sampling hypernetwork"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10429"
authors: ["Reese E. Jones, Cosmin Safta, Dan Bolintineau, Craig M. Hamel, Gianluca Geraci, Sharlotte LB Kramer"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10429v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Multifidelity modeling offers a practical route to accurate prediction and uncertainty quantification when high-fidelity data are scarce but lower-fidelity data are comparatively abundant. This work develops a bifidelity Langevin sampling hypernetwork framework that constructs probabilistic neu- ral response models by learning a posterior distribution over model parameters rather than a single deterministic fit. The method combines a flexible shared-latent data representation for low- and high-fidelity responses, enabling parameter sharing and transfer learning between the fidelities. We introduce several methodological enhancements to improve the robustness and efficiency of this ap- proach, including stability-promoting drift models, staged and conditional training strategies, adap- tive initialization of Langevin trajectories, and training procedures designed to better exploit corre- lations between fidelity levels. These additions improve convergence behavior, reduce the sampling effort required to obtain representative posterior ensembles, and provide more reliable predictive uncertainty in data-limited regimes. The resulting framework makes more effective use of available multifidelity data while preserving interpretability through the learned posterior structure, yielding improved predictive performance, better uncertainty characterization, and a more stable workflow for constructing uncertainty-aware surrogate models. The method is demonstrated on experimental, high-fidelity simulation and illustrative synthetic data.
