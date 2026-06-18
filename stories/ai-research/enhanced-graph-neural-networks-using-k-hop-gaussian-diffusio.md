---
title: "Enhanced Graph Neural Networks using K-Hop Gaussian Diffusion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18317"
authors: ["Xuling Zhang, Peng Wang, Daiyan Li, Aoran Huang, Zeiwei Chen, Yongkui Yang"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.18317v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18317v1 Announce Type: new Abstract: Most graph neural network (GNN) cores rely on graph convolutions, typically implemented as message passing between direct (single-hop) neighbors. In many real-world graphs, edges can be noisy or poorly defined, limiting information propagation to local neighborhoods. Existing diffusion kernels, such as Personalized PageRank (PPR) and Heat Kernel, alleviate this issue through global propagation, but still struggle with complex local structures and distant node noise. To address these limitations, we propose a K-Hop Gaussian (KHG) diffusion kernel as a preprocessing module for graph data. KHG introduces multi-hop diffusion with Gaussian weighting for remote nodes, balancing local and global information propagation before applying standard GNNs. Experiments on multiple benchmark datasets demonstrate that KHG significantly outperforms traditional message-passing GNNs, as well as PPR and Heat Kernel diffusion, particularly in noisy or structurally complex graphs.
