---
title: "SpectralShift: Effective Context Window Extension of Gated DeltaNet via Spectral Reparameterization"
category: "Other"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.14320"
authors: ["Zian Liu", "Yiwen Hu", "Zican Dong", "Tian Xie", "Wayne Xin Zhao", "Yucheng Ding", "Ran Tao", "Bryan Dai"]
date: "2026-09-12T20:00:00.000Z"
score: ""
guid: "2609.14320"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.14320.png"
generated: "2026-09-17T19:00:24+05:30"
---

Recently, linear attention layers have been increasingly adopted to replace softmax attention at scale for long-context modeling. However, existing context extension approaches typically apply continued pretraining directly without modifying these layers, overlooking the spectral properties of linear attention state dynamics. In this work, we study long-context extension of Gated DeltaNet (GDN) from a spectral perspective of transition matrix and identify two essential factors governing long-range information retrieval: (1) a sufficiently broad slow spectral band aligned with the target dependency length, and (2) the preservation of fast-decaying modes for state clearing and context switching. Based on this observation, we propose SpectralShift, a spectral reparameterization approach for long-context continual pretraining of GDNs. Specifically, SpectralShift reparameterizes the alpha projections initialization to reshape the decay spectrum by enhancing slow propagation capacity, and further introduces a learning-rate scaling for alpha projections to facilitate long-context training. Experiments show that SpectralShift consistently improves long-context capabilities over training, providing an effective and efficient solution for extending context windows of linear attention models. The code has been open-sourced at https://github.com/RUCAIBox/GDN-SpectralShift.
