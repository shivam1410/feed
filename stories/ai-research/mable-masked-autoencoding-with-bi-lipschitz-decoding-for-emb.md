---
title: "MABLE: Masked Autoencoding with Bi-Lipschitz Decoding for Embeddings and Graph Metric Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02990"
authors: ["Yaniv Shulman, Shaghayegh Akbarpour, Jack B. Muir"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.02990v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02990v1 Announce Type: new Abstract: We propose MABLE (Masked Autoencoding with Bi-Lipschitz Decoding for Embeddings and Graph Metric Learning), a self-supervised framework for learning node and graph embeddings from large, heterogeneous graphs, demonstrated here on geospatial mineral-exploration data. MABLE combines masked reconstruction with fixed cosine-similarity losses that align matched augmented views while keeping unpaired embeddings well spread. A bi-Lipschitz feature decoder ties a low-dimensional reconstruction component of each node embedding to feature similarity, while matched-node consistency shapes the remaining context used by graph pooling. Lipschitz-controlled pooling helps stabilize graph-level representations under perturbations of retained node embeddings, while augmentation alignment trains robustness to masking, node dropping, and sampling variation. Across local copper and regional Arabian Shield studies, MABLE embeddings provide complementary downstream signal and produce coherent embedding-derived layers for hypothesis generation without learned discriminators or hard-negative selection.
