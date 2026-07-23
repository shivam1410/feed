---
title: "Multi-Timescale Latent-Action DRL for Joint Optimization in Edge-Cloud Networks"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18288"
authors: ["Vo Phi Son, Van-Dinh Nguyen, Ngoc Hung Nguyen, Trinh Van Chien, Symeon Chatzinotas"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18288v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18288v1 Announce Type: new Abstract: Load imbalance across edge and cloud layers degrades latency performance in hierarchical edge-cloud computing (HECC) systems under dynamic task arrivals and heterogeneous resources, leading to severe queuing delays and inefficient resource utilization. To address this challenge, we study a joint service placement, computational delegation, and power control (JSCP) problem to minimize the average end-to-end (e2e) latency. The resulting JSCP problem is a mixed-integer nonconvex and NP-hard optimization problem due to the strong coupling between discrete and continuous variables. To enable tractable optimization and stable system adaptation, we exploit the inherent difference in decision dynamics and decompose the problem into long-term system configuration and short-term resource allocation subproblems. Based on this formulation, we propose a two-timescale multi-layer deep reinforcement learning framework with a latent action space (2T-MDRL-LA) to jointly optimize service placement, user association, computational delegation, task offloading, and user transmit power. A latent action representation based on a variational autoencoder is introduced to efficiently compress the high-dimensional combinatorial action space. Simulation results demonstrate that the proposed framework effectively adapts to dynamic network conditions and achieves near-optimal performance compared to branch-and-bound solutions. It achieves up to a 20.8% reduction in average e2e latency and a 13% improvement in resource utilization over the scheme without the computational delegation, while converging approximately 50% faster than conventional proximal policy optimization.
