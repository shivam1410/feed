---
title: "From Deep to Shallow: Unconstrained and Efficient Layer Merging Strategy"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.04881"
authors: ["Petro Shulzhenko, Gabriele Spadaro, Enzo Tartaglione"]
date: "Mon, 07 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2609.04881v1"
image: ""
generated: "2026-09-07T19:08:00+05:30"
---

arXiv:2609.04881v1 Announce Type: new Abstract: Although Deep Neural Networks have become foundational in many areas of Machine Learning, high computational demands limit their application in resource-constrained environments. To address this issue, depth compression methods have been proposed to identify and linearize redundant activation functions, thereby allowing for the merging of layers without intermediate non-linearities. However, these methods face two key challenges: they cannot be directly applied to convolutions with padding due to the absence of an analytical solution for merging these layers, and they typically increase the kernel size of merged layers, thus limiting speed-up gains. To overcome these limitations, we propose an efficient strategy that enables merging of layers without an existing analytical solution, and also without increasing kernel size. We validate our approach across multiple architectures and datasets, and measure inference speed-up gains on real embedded platforms. We publicly released the code at https://github.com/ShulzhenkoPetr/deep-to-shallow.
