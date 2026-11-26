---
title: "Noise-Level Adjacency in Diffusion Training"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31605"
authors: ["T. Y. Tsui, Jiatao Gu, Lingjie Liu"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.31605v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Diffusion models train one network across all noise levels, although their training objective is pointwise in the noise level. If training on each pair of adjacent levels were an independent problem, separate networks with the same total parameter count would be expected to match one shared network. But in practice, on images, sharing weights across levels gives better results, which hints at an implicit dependence on their order. An order fixes both which levels are adjacent and the direction in which they run. In this paper, we show that, of the two, the benefit of sharing rests on adjacency in the noise-level embedding. The fitting error of a shared network is bounded below by the distances between neighbouring posterior means, minus the change the network can make between neighbouring embeddings. We first distinguish adjacency from direction: on a Gaussian mixture and CIFAR-10, reversing the embeddings keeps every neighbour and leaves the fitting error unchanged, whereas shuffling them raises it. Second, we rule out sharing between distant levels as the source of the benefit: separate networks on contiguous ranges match the shared network at its width, and with the parameters fixed, breaking adjacency at the same places costs less than 40\% of a full shuffle. Dividing the levels at equal shares of these distances lowers the error of all but the smallest networks. We therefore show that the order of the noise levels enters a diffusion model through adjacency, with its direction being a design choice. Our code is available at https://github.com/TSUITUENYUE/Noise-Level-Adjacency-in-Diffusion-Training.
