---
title: "How Architecture and Training Affect TPC Representations Across Experiments"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21756"
authors: ["Tyler Wheeler, Michelle P. Kuchera, Raghuram Ramanujan, William Sieland, Ryan Krupp, Daniel Bazin, Connor L. Cross, Hoi Yan Ian Heung, Andrew J. Jones, Ruchi Mahajan, Saiprasad Ravishankar, Pranjal Singh, Benjamin Votaw, Chris Wrede"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.21756v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21756v1 Announce Type: new Abstract: Deep-learning efforts have increasingly shifted toward foundation model approaches. In experimental physics, this allows models and learned representations to be reused beyond the experiments in which they were developed. This work evaluates the reusability of representations across experiments and detector systems using probes on frozen encoders. These probes reveal task-relevant structure before downstream adaptation, complementing fine-tuning. Together with random-weight controls, they distinguish contributions from architecture and encoder training that downstream performance alone cannot resolve. Time projection chamber (TPC) data provide a useful testbed because events from TPC systems can be represented as variable-length sparse tensors, while detector geometries, event topologies, and scientific tasks can differ substantially. We investigate whether fixed-dimensional TPC event representations can be reused across classification tasks, experiments, and detector systems. Sparse ResNet and PointNet-style encoders produce 512-dimensional embeddings for four datasets from the GADGET II TPC and AT-TPC. Randomly initialized encoders isolate the contribution from architecture before supervised training. We then train each encoder on a classification task, freeze its parameters, and train a linear or nonlinear probe for each downstream task. We find that this architecture-induced structure remains useful across experiments and detector systems. The randomly initialized PointNet-style representation is highly informative on several tasks. The two architectures organize their embedding spaces differently, but neither exhibits a large, systematic loss of utility cross-detector. These results show that architecture is a major source of task-relevant structure in TPC embeddings and should be treated explicitly when assessing representation learning and developing reusable detector models.
