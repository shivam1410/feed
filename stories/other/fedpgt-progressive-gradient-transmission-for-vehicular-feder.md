---
title: "FedPGT: Progressive Gradient Transmission for Vehicular Federated Learning over Time-Varying Channels"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.18089"
authors: ["Jintao Yan, Tan Chen, Yuxuan Sun, Sheng Zhou, Zhisheng Niu"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.18089v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.18089v1 Announce Type: new Abstract: Vehicular federated learning (VFL) enables privacy-preserving collaborative model training for intelligent transportation systems, where communication resource allocation and gradient sparsification techniques have been explored to reduce communication overhead. However, vehicle mobility leads to rapidly varying channel conditions and transmission capacity, rendering predetermined resource allocation and sparsification decisions ineffective. In this paper, we propose FedPGT, a progressive gradient transmission scheme for VFL over time-varying channels, where vehicles progressively transmit high-magnitude gradient entries in response to instantaneous channel conditions. We establish a convergence bound that characterizes the impact of transmitted gradient entries and reveals diminishing-return behavior governed by a power-law decay. Motivated by this result, we formulate a stochastic optimization problem for online decision-making, where the main challenge lies in a cumulatively coupled, non-separable objective. To handle this challenge, we introduce per-slot surrogate transmission variables to decouple the long-term dependence across time slots and convert the original objective into an additive per-slot optimization problem, enabling a Lyapunov drift-plus-penalty approach for online scheduling. We further develop a low-complexity resource allocation algorithm for efficient online implementation. Experimental results demonstrate that the proposed scheme achieves a 3.65% accuracy improvement on the CIFAR-10 image classification task and a 12.66% reduction in average displacement error on the Argoverse trajectory prediction task compared with state-of-the-art baselines, demonstrating its applicability to diverse learning tasks under highly dynamic vehicular environments.
