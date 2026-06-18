---
title: "Ghost Attractor Networks: Basin-Structured Dynamical Decoders for Closed-Loop Sequential Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18315"
authors: ["Tianyu Wang, Ying Wang, Zhihao Liu, Xi Vincent Wang, Lihui Wang"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.18315v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18315v1 Announce Type: new Abstract: Sequential output generation with large-scale Transformer and diffusion decoders pays a memory cost that grows with sequence length, plus iterative per-step computation. Replacing them with small feed-forward decoders restores efficiency but produces unstructured latent representations that limit closed-loop control: phase-conditioned action generation and cross-step latent carry-over both require a latent geometry with stable basins. This article proposes Ghost Attractor Networks, a theoretically derived dynamical decoder whose latent evolves under a learned potential with drift and produces a basin-attractor structure by construction. Three desiderata (multi-modality, decoder-level single-pass switching, and constant memory) motivate the potential-drift form, and mode transitions arise as saddle-node bifurcations with ghost-attractor escape. A hierarchical phase-space decomposition separates first-order basin convergence from second-order proprioceptive refinement. Empirically, a Ghost trained end-to-end with a behavioral-cloning and contrastive objective exhibits the predicted gradient-flow contraction in its potential, with the gradient norm decaying by 67 percent across five integration steps on 1430 held-out samples. Ghost is evaluated as a robotic action decoder. A 2.3-million-parameter Ghost matches the offline accuracy of a 1.07-billion-parameter Diffusion Transformer at 462 times fewer parameters and 32 times lower latency, and beats five alternative 2M-parameter decoders (MLP, Neural ODE, CVAE, Transformer, 1-step Diffusion) on offline mean squared error by 5.9 to 29 percent. On the LIBERO-10 closed-loop benchmark, phase conditioning on Ghost's basin-structured latent yields a 13.5 percentage-point success-rate gain over a feed-forward MLP baseline, and persistent-latent ensembling reaches a 95.7 percent final success rate.
