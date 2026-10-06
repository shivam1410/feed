---
title: "FTD-GNO: Memory-Efficient Graph Neural Operators through Functional Tensor Decomposition of the Kernel"
category: "Physics & Space"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04212"
authors: ["Xiaomin Zhang, Boyue Wang, Junbin Gao, Yongli Hu anbd Baocai Yin"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.04212v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Graph Neural Operators (GNOs) provide flexible surrogate models for learning solution operators of partial differential equations (PDEs). However, standard GNOs typically parameterize the integral kernel with a monolithic neural network and evaluate kernel interactions over graph edges, leading to substantial computational and memory overhead at high resolutions or with large neighborhoods. To address these limitations, we propose Functional Tensor Decomposition Graph Neural Operator (FTD-GNO), a memory-efficient GNO framework that decouples the high-dimensional continuous integral kernel into low-dimensional mode-wise functions. By instantiating the kernel with classical tensor decomposition formats, including CP, Tensor-Train, and Tucker decompositions, FTD-GNO enables algebraic reconstruction of the integral operator without explicitly materializing full edge-wise kernel tensors. This factorized formulation reduces the memory footprint of kernel evaluation and aggregation while retaining the continuous operator-learning structure of GNOs. Theoretical complexity analysis shows that FTD-GNO substantially lowers parameter and activation-memory costs associated with high-dimensional kernel construction. Experiments show lower peak memory than the corresponding unfactorized graph-integral baselines, with shorter recorded training times. Fourier-graph experiments further demonstrate that FTD can improve the efficiency of a graph-integral layer within a hybrid operator and has good scalability.
