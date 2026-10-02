---
title: "Coupling Perception and Reasoning in Federated Multimodal Graph Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.00277"
authors: ["Zekai Chen, Xun Wu, Hailin Zhang, Xunkai Li, Yu Liu, Kairui Yang, Muyan Huang, Xuaner Chen, Rong-Hua Li, Guoren Wang"]
date: "Fri, 02 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.00277v1"
image: ""
generated: "2026-10-02T21:40:09+05:30"
---

Federated multimodal graph foundation models (GFMs) aim to adapt pretrained multimodal models to decentralized graph data, where each client owns a private multimodal graph and cannot share raw information. These models typically combine a multimodal Encoder that extracts semantic evidence from heterogeneous modalities and a graph neural network (GNN) that performs relational reasoning over graph structures. However, existing federated GFM adaptation methods mainly update graph-side modules while keeping the multimodal Encoder frozen, limiting adaptation to \emph{how information is propagated} while fixing \emph{what information is extracted}. Through empirical studies, we reveal that Encoder and GNN adaptations are not independent: Encoder adaptation is affected by graph relations, while cross-client module swapping reveals substantial pairing sensitivity between separately parameterized Encoder and GNN updates. Motivated by this observation, we propose \textbf{FedCORE}, a federated adaptation framework that represents Encoder and GNN updates through a shared low-dimensional latent state. FedCORE jointly optimizes this core from multimodal and structural signals and performs federated evolution directly in the shared state space, preserving compatibility between perception and reasoning adaptations. Extensive experiments demonstrate that FedCORE reduces the Encoder--GNN pairing gap from $30.6$ to $5.9$, corresponding to an $80.7\%$ reduction over independent joint adaptation.
