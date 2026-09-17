---
title: "Adaptive hybrid coupling with operator inference, the overlapping Schwarz alternating method and reinforcement learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17837"
authors: ["Trishit Mondal, Irina Tezaur, Anthony Gruber"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17837v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17837v1 Announce Type: new Abstract: Hybrid domain decomposition methods provide a flexible framework for coupling full order models (FOMs) and reduced order models (ROMs), but typically assume the model assigned to each subdomain is fixed throughout a simulation. This is limiting for transient problems in which localized features propagate through the domain and the regions requiring high-fidelity resolution change over time. We introduce a reinforcement learning (RL)-based approach for online adaptation of FOM-ROM models coupled via the overlapping Schwarz alternating method (O-SAM), an iterative domain decomposition method that solves subdomain-local problems while exchanging solution information through transmission boundary conditions on overlapping interfaces. Deep Q-networks (DQNs) are trained offline to select among subdomain-local FOMs and pre-trained Operator Inference (OpInf) ROMs using a reward balancing accuracy, cost, and model-switching frequency. Once trained, the policies are deployed predictively on problem instances not seen during training, without requiring a reference FOM solution. We demonstrate the approach on two examples: a 1D advection-diffusion problem with a moving front, and a 3D linear elastic wave propagation problem implemented in the Norma.jl solid mechanics code. For the advection-diffusion benchmark, the learned policy dynamically allocates high-fidelity resolution as the front propagates and outperforms static FOM/ROM assignments; letting the agent also adapt the domain decomposition provides no further benefit. For the elastic wave benchmark, learned policies for two and three subdomain decompositions track the propagating wave by assigning FOMs to subdomains containing the wave and ROMs elsewhere, as expected. Our results demonstrate the potential of RL to enable predictive online adaptation of model fidelity within Schwarz-based hybrid simulations.
