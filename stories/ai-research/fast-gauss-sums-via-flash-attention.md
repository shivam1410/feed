---
title: "Fast Gauss Sums via Flash Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04910"
authors: ["Nicolaj Rux, Sebastian Neumayer"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.04910v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04910v1 Announce Type: new Abstract: Gaussian kernel sums are the computational core of maximum mean discrepancies (MMDs), kernel gradient flows, Stein variational gradient descent (SVGD), and many other kernel methods. At the same time, softmax attention has received an extraordinary amount of hardware-aware code engineering, culminating in flash attention. We show that Gauss kernel sums with arbitrary, signed weights can be evaluated via flash attention: two small input augmentations turn the normalized softmax reduction into the unnormalized Gauss sum, without writing a single line of custom GPU code. For feature dimension D>8 in fp16, this approach beats compiled PyTorch code as well as PyKeOps kernels (often significantly) in speed, memory-overhead and accuracy. Indeed, its memory scaling remains linear.
