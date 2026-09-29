---
title: "Resource-Aware Federated Mixture-of-Experts with Adaptive Pruning for Onboard Learning in LEO Satellite Constellations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31932"
authors: ["Mohamed Shaaban, Mohamed Elmahallawy, Marius Bernahrndt, Tobias Hecking"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.31932v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Low-Earth-orbit (LEO) satellites are increasingly expected to perform onboard learning for applications such as disaster response and environmental monitoring. However, conventional federated learning (FL) is ill-suited to onboard satellite learning, as it assumes computational, memory, and communication resources beyond the capabilities of resource-constrained LEO platforms, often necessitating the transmission of raw imagery to ground stations. We present COSMIC-FL, a resource-aware FL framework for efficient onboard learning in LEO satellite constellations. COSMIC-FL introduces two complementary Mixture-of-Experts (MoE) architectures: a Sliced design that shares backbone representations while activating task-specific channel subsets, and a Modular design that employs lightweight gating to route inputs to physically separated expert networks. A semantic class-to-expert mapping enables each satellite to train, update, and communicate only the expert paths relevant to its local data. To further improve efficiency, COSMIC-FL integrates staged optimization with three structured pruning strategies: server-side pruning, client-side fixed-ratio pruning with mean-vote aggregation, and adaptive client-side per-layer pruning based on aggregated importance and a MAD-based gap criterion. Combined with semantic expert routing, these techniques jointly adapt computation and model sparsity to both data semantics and layer importance, yielding a favourable accuracy--efficiency trade-off for heterogeneous space platforms. Experiments on six image classification benchmarks under highly non-i.i.d. settings show that COSMIC-FL maintains competitive accuracy while reducing communication, computation, and energy consumption by up to 80% over SOTA FL methods. We further validate COSMIC-FL on an NVIDIA Jetson AGX Orin, confirming its efficiency gains under realistic embedded deployment constraints.
