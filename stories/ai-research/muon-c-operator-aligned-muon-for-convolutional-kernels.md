---
title: "Muon-C: Operator-Aligned Muon for Convolutional Kernels"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09676"
authors: ["Jiaxin Qing, Lexin Li"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09676v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09676v1 Announce Type: new Abstract: Muon replaces matrix momentum with an approximately orthogonal polar direction, but its geometry depends on the matrix representation. For convolution, standard unfolding describes a local patch map rather than the convolution operator. We introduce Muon-C, an operator-aligned optimizer that represents kernel momentum as frequency-wise channel-transfer matrices, polarizes these blocks independently, and uses a critical Fourier grid to return updates exactly to the original finite kernel support. We show that the new geometry arises from combining the block partition and Fourier coordinates. The exact-polar direction is a linear minimization oracle under the critically sampled convolution norm. Its worst-case guarantee relative to the continuous convolution-operator norm is never weaker than unfolding and is strictly stronger for $3\times3$ kernels. On CIFAR-10 flow matching with matched applied-update RMS, Muon-C reaches 9.87 FID at 40k iterations, compared with 22.26 for unfolded Muon and 51.31 for Adam. It reaches their final quality using $0.62\times$ and $0.64\times$ their model FLOPs, respectively. Under equal tuning budgets, Muon-C achieves 3.42 FID. Gains persist across data scales and transfer to classification across convolutional architectures.
