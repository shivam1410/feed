---
title: "Efficient and Scalable Multi-View Masked Autoencoder for Heterogeneous Graph Self-Supervised Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00511"
authors: ["Hao Geng, Deqing Wang, Lihao Ge, Chenguang Du, Fuzhen Zhuang, Bowen Yang, Yanlin Hu, Songtao Wang"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 33
guid: "oai:arXiv.org:2611.00511v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Recent years have witnessed the flourishing of self-supervised learning on heterogeneous graphs, e.g., masked autoencoder-based methods. However, existing methods suffer from three issues, including the prohibitive computational cost of constructing meta-path-induced subgraphs, the limitations of uniform random masking, and the suboptimal objective of reconstructing potentially noisy or uninformative original node features. To address these issues, we propose the Multi-View Masked Auto Encoder (MVMAE), a novel, efficient, and scalable framework for heterogeneous graph self-supervised learning. First, MVMAE introduces a novel multi-view mask-then-reconstruct strategy. Instead of masking individual nodes or features, MVMAE randomly masks entire meta-path views and guides the model to reconstruct their representations from remaining visible views. This approach shifts the learning objective to a high-level and semantic task, providing a more robust and informative supervisory signal that is effective even when initial node features are absent or flawed. Then, to handle the computational demands, MVMAE employs an efficient offline aggregation mechanism that pre-computes and reuses representations for each meta-path view, completely avoiding the costly construction of meta-path-induced subgraphs. Next, to fuse the representations of each view, MVMAE uses a Transformer-based multi-view fusion encoder to capture the complex correlations between views, and a deliberately simple MLP decoder to compel the encoder to learn highly expressive and robust node representations. Extensive experiments on six real-world datasets, including three large-scale graphs, demonstrate that MVMAE consistently outperforms state-of-the-art self-supervised and even semi-supervised baselines, confirming its superior effectiveness and scalability. Our source code is released at https://github.com/hcmdgh/MVMAE.
