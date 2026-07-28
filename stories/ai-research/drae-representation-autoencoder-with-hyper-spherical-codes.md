---
title: "dRAE: Representation Autoencoder with Hyper-Spherical Codes"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2607.22148"
authors: ["Tianren Ma", "Lin Long", "Chuyan Chen", "Mu Zhang", "Junbo Zhao", "Tong Zhang", "Qixiang Ye"]
date: "2026-07-24T05:47:32.000Z"
score: 65
guid: "2607.22148"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2607.22148.png"
generated: "2026-07-28T19:07:22+05:30"
---

In this work, we aim to discretize the high-dimensional visual representations to bridge the gap with language models - a non-trivial challenge, as existing quantization methods suffer from codebook collapse, failing to scale while preserving semantic coherence. We identify the root cause as metric mismatch: standard Euclidean codebook objectives are fundamentally misaligned with the anisotropic geometry of representation space, leading to codebook embeddings with high-variance magnitude scales and uneven angular distributions that hinder scalability. To address this, we propose Hyper-Spherical Quantization (HSQ), which decouples semantic content from feature magnitude via angular routing, preventing code assignment from being dominated by scale rather than meaning. The resulting discrete Representation Autoencoder (dRAE) achieves high-fidelity reconstruction while preserving semantic integrity and supporting scalable codebook budget. Extensive experiments demonstrate consistent performance gains as the vocabulary size scales to 131{,}072, along with 100\% codebook utilization, simplified training pipeline, and strong performance across understanding and generation tasks.
