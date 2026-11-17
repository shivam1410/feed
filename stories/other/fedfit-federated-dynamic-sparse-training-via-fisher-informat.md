---
title: "FedFit: Federated Dynamic Sparse Training via Fisher Information scoring"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18643"
authors: ["Meng Bi, Hong Huang, Jinlong Song, Charles Wang, Chengming Hu, Xi Chen, Ting Yu, Xue Liu"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18643v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Cross-device Federated Learning (FL) is frequently bottlenecked by the prohibitive memory and communication costs of training deep neural networks on resource-constrained edge hardware. While federated dynamic sparse training aims to alleviate these costs by adjusting sparse structures during training, existing methods rely on magnitude-based heuristics that are fundamentally ill-suited for the non-convergent, heterogeneous environments inherent to FL. To address this challenge, we propose FedFit, a federated dynamic sparse training framework that replaces simple heuristics with optimization-centric criteria for structure adjustment. By leveraging a second-order approximation of the loss landscape via the Fisher Information Matrix, FedFit enables precise and efficient structure adjustment without the overhead of explicit Hessian computation. Empirical evaluations across computer vision and natural language processing benchmarks demonstrate that FedFit significantly narrows the sparse-to-dense accuracy gap, outperforming state-of-the-art methods while maintaining high communication efficiency. Our code is available at https://github.com/Serena-28/Fedfit.git .
