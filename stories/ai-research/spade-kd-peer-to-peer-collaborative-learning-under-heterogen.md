---
title: "SPADE-KD: Peer-to-Peer Collaborative Learning under Heterogeneous Settings"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24013"
authors: ["Harikrishna Kuttivelil, Katia Obraczka"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 25
guid: "oai:arXiv.org:2610.24013v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Peer-to-peer collaborative learning is an emerging distributed deep learning paradigm that eliminates the need for a central aggregator and disseminator, avoiding the single-point-of-failure and bottleneck issues they can bring. Many such approaches use parameter averaging, requiring clients to have homogeneous model architectures, whereas others use knowledge distillation as an alternative while leaning on shared public data or centralized control infrastructure. Many of these approaches also make a one-size-fits-all assumption, i.e., jointly training a single, globally optimal solution for all clients, when in reality, clients' underlying data distributions might differ such that a globally optimal solution may not be locally optimal for all clients. To enable collaborative learning in environments with both model architecture and data distribution heterogeneity, we present SPADE-KD -- a fully decentralized model distillation framework that optimizes collaboration towards personalized rather than global performance. SPADE-KD leverages two mechanisms -- adaptive distillation and utility-driven peer selection. Adaptive distillation modulates the strength of each incoming model transfer by the performance advantage of the incoming model compared to the native model measured by their task losses, such that a client will distill more aggressively from incoming models that outperform it on its own local data. Utility-driven peer selection uses the loss-informed utility derived from adaptive distillation to rank prospective partners, focusing on exchanges that measurably improve the local model while suppressing low-utility transfers. Using federated classification tasks, we demonstrate that SPADE-KD consistent outperforms naive decentralized distillation with lower loss and faster convergence and that its individual components are more effective together than independently.
