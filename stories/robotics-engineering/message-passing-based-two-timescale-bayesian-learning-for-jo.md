---
title: "Message Passing Based Two-Timescale Bayesian Learning for Joint Channel and Memory Hardware Impairments Tracking"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01660"
authors: ["Wei Xu, An Liu"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.01660v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01660v1 Announce Type: new Abstract: Hardware impairments in massive multiple-input multiple-output (MIMO) receivers introduce inter-symbol memory and inter-element coupling, severely degrading channel estimation. This paper employs a residual recurrent gated unit (RGRU) to model the intra-slot memory of the hardware impairments and proposes a message-passing-based two-timescale Bayesian deep learning (MP-TTBDL) framework for joint channel and impairment tracking. Owing to small-scale fading, the wireless channel varies rapidly across slots, whereas hardware impairments drift slowly due to hardware aging and environmental variations. To capture these distinct physical timescales, a fastvarying Markov prior and a slow-varying Gaussian Markov prior are assigned to the sparse channel and the network parameters, respectively. Based on a multi-slot factor graph formulation, a message-passing algorithm is developed. Specifically, the inter-slot messages admit closed-form updates, while the intra-slot factor graph, due to its complex recurrent structure, is partitioned into a channel tracking module and an impairments calibration module. The channel tracking module performs sparse channel estimation via turbo orthogonal approximate message passing (Turbo-OAMP), and the impairments calibration module updates the impairment parameters via a specially designed deep approximate message passing (DAMP) procedure, with the two modules iteratively exchanging extrinsic information through expectation propagation (EP) until convergence. Simulation results show that the proposed framework robustly achieves lower channel estimation error than conventional compensators followed by channel estimation across different online impairment scenarios and signal-to-noise ratio (SNR) conditions.
