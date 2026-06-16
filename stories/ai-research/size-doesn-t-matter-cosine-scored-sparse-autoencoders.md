---
title: "Size Doesn't Matter: Cosine-Scored Sparse Autoencoders"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15054"
authors: ["Silen Naihin, Lev Stambler"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.15054v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15054v1 Announce Type: new Abstract: Sparse autoencoders (SAEs) detect features via inner product, so a feature's activation scales with both its directional alignment and the input's norm. Under BatchTopK, high-norm tokens inflate all pre-activations simultaneously, claiming dictionary slots regardless of content alignment. This matters because sublayer normalization has already discarded the magnitude the score measures, so the encoder detects a quantity the model does not read. We replace the score with a learned blend of cosine similarity and input magnitude, letting the optimizer choose how much norm to use; a per-feature extension lets each feature decide independently. In both regimes, training is free to recover inner product but never does, with no feature ever choosing more than half-magnitude dependence. At matched reconstruction, the cosine encoder learns features that align with human-recognizable concepts far more often than standard, filling dictionary slots that inner product wastes on norm detectors. Loss reweighting that equalizes gradients barely closes the gap, confirming forward-pass score geometry as the lever. The advantage is not universal across tasks or depths, but we believe cosine scoring should be the default for dictionary learning on normalized representations.
