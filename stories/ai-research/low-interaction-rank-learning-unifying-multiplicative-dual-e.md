---
title: "Low-Interaction-Rank Learning: Unifying Multiplicative Dual-Encoder Heads"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11661"
authors: ["Zijian Zhao, Sen Li"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.11661v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11661v1 Announce Type: new Abstract: A multiplicative dual-encoder network computes a real-valued output for a pair of inputs as the inner product of their separate encodings. This architecture has been developed independently in operator learning, bipartite matching, contrastive vision-language models, retrieval, and other areas, yet no unified theory guides the basic design decisions: how many interaction modes to represent, how to normalize the encoders, and when the architecture should be avoided. We provide such a foundation by introducing the class of functions of low interaction rank, a class whose intrinsic complexity is measured by its interaction spectrum. Within this framework, approximation error decomposes into a spectral truncation term and an encoder-realization term; sample complexity is governed by the sum of the two encoder complexities rather than their product; and a usability criterion based on spectral decay determines when the architecture can succeed. The same framework exposes a central identifiability problem: the encoders are defined only up to a linear gauge symmetry that leaves the learned coordinates arbitrary. We show that normalization is gauge fixing and that whitening pins the interaction modes up to permutation and sign, thereby explaining the uninterpretability of contrastive dimensions and providing a constructive remedy. Experiments on synthetic kernels, operator learning, and CLIP models validate the theoretical predictions: spectral decay rates match the predicted scaling, whitening recovers the true modes, and independently trained CLIP models are related by a single rotation which, after removal by whitening, exposes interpretable concept axes. The code of this paper is provided at https://github.com/RS2002/Mul-Net .
