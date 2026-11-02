---
title: "TensorSSM: Memorizing Spatial Position in Dynamic State Space for Tensor Core Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.40871"
authors: ["Sheng Zhang, Xinyi Wang, Maolin Wang, Xiangyu Zhao"]
date: "Mon, 02 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2610.40871v1"
image: ""
generated: "2026-11-02T19:04:34+05:30"
---

High-dimensional tensors are ubiquitous in real-world applications but lead to massive storage overhead. Functional tensor decomposition addresses this by employing neural networks to map element coordinates to tensor cores, significantly reducing the parameters for data compression. However, existing functional methods typically flatten high-order tensors into 1D sequences. This folding operation causes highly overlapping local coordinate sequences and struggles to capture complex cross-mode spatial dependencies, severely limiting their expressiveness on diverse datasets. To tackle these challenges, we propose TensorSSM, a novel Implicit Neural Representation (INR) for functional decomposition method that memorizes spatial positions within a dynamic State Space Model (SSM). Specifically, TensorSSM first decomposes mode-wise coordinates into sequences spit by K-ary rule, encoding spatial tokens from coarse to fine, which effectively captures spatial variations. Furthermore, we extend the SSM's state space to explicitly map cross-mode spatial dependencies, allowing inter-mode interactions to enhance the updates of each mode. By integrating cross-mode information from previous hidden states into the current state transitions, TensorSSM effectively expands tensor representation along two dimensions: the sequence dimension for coarse-to-fine spatial tokens, and the state dimension for cross-mode memorization. This design effectively integrates spatial information into the state space and the tensor core, substantially advancing the state adaptability and enhancing the expressiveness of the data compression. Extensive experiments demonstrate that TensorSSM achieves significantly high reconstruction accuracy and storage efficiency, exhibiting robust expressiveness across diverse tensor datasets without relying on strict spatial assumptions.
