---
title: "DanLing NestedTensor: Composable Multi-Ragged Tensors for Deep Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30379"
authors: ["Zhiyuan Chen"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2609.30379v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Variable-size inputs are common in deep learning, but dense batching allocates a shared envelope and spends computation on padding. The cost multiplies across varying axes: an explicit pair state allocates $BN_{\max}^2$ positions instead of $\sum_i N_i^2$. Packing removes that waste, but composing packed operations still requires the logical axes and sample boundaries a flat buffer no longer exposes. We present DanLing NestedTensor, a PyTorch tensor abstraction that makes multi-ragged structure a property of the tensor itself. Packed values carry tensor-backed partitions and logical dimension order, so broadcasting creates ragged axes, feature transformations retain them, and reductions consume them. The same representation carries through autograd and both eager and compiled execution. On an A100, the geometric-mean speedup over same-mode padding is 2.74$\times$ eager and 3.39$\times$ compiled across four BERT scales, and 1.97$\times$ eager across four FCN backbones. A four-block Pairformer-style workload runs 2.40-4.32$\times$ faster than a padded reference using native PyTorch kernels across square length regimes in eager execution, with peak allocation falling from 38.08 to 5.41 GiB on its high-variation batch. The tensor interface lets model code built from its supported operators compose efficient variable-size computation without managing offsets at any call site. Code will be released publicly upon publication.
