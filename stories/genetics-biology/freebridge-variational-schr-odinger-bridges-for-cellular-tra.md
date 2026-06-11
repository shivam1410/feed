---
title: "FreeBridge: Variational Schr\\\"odinger Bridges for Cellular Transition Dynamics"
category: "Genetics & Biology"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11286"
authors: ["Xurui Wang, Qin Ren, Jun Ma, Haibin Ling, Chenyu You"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.11286v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11286v1 Announce Type: new Abstract: High-content imaging assays quantify cellular responses to chemical and genetic perturbations, yet continuous trajectories of individual cells are unobservable because cells are chemically fixed at acquisition. Perturbation modeling therefore reduces to inferring stochastic transport between control and treated populations observed only as separate marginals. While recent generative models achieve strong end-point alignment, boundary consistency does not determine intermediate evolution: multiple stochastic processes may connect identical marginals while traversing regions unsupported by observed single-cell morphologies. We introduce \textbf{FreeBridge}, a Schr\"odinger Bridge formulation for single-cell transition modeling under endpoint-only supervision. FreeBridge defines atomic states as instance-segmented single-cell representations, establishing a fixed cellular manifold, and learns stochastic transport constrained within this geometry via empirical latent support regularization. Across BBBC021, RxRx1, and JUMP, FreeBridge maintains competitive or improved endpoint fidelity and mechanism-of-action retention under a unified evaluation protocol; on BBBC021, it further reduces intermediate support violations. These findings highlight the importance of geometric grounding for biologically interpretable perturbation dynamics. Project page: https://y-research-sbu.github.io/FreeBridge/.
