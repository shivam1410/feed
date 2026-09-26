---
title: "GeoPair: Geometry-Preserving Cross-Layer Factorization for Training-Free Transformer Compression"
category: "AI Research"
source: "HF Trending Papers"
url: "https://huggingface.co/papers/2609.25963"
authors: ["Baher Mohammad", "Ammar Ali", "Stamatios Lefkimmiatis"]
date: "2026-09-21T20:00:00.000Z"
score: 42
guid: "2609.25963"
image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/papers/2609.25963.png"
generated: "2026-09-26T22:52:50+05:30"
---

Transformer architectures exhibit cross-layer redundancies, yet post-training compression pipelines typically optimize layers in isolation or rely on heuristic grouping strategies that disregard layer-specific activation geometries. We introduce a principled, training-free framework that sequentially optimizes cross-layer weight pairings and shared-dictionary factorizations. Rather than forcing weights of adjacent layers to share a basis or heuristically merging activation statistics, our approach identifies structurally compatible projections and learns a shared representation that better preserves each layer's distinct calibration geometry. Coupled with structured sparsity, this yields highly efficient weight decompositions without sacrificing functional fidelity. Across diverse architectures, scales, and modalities, our method achieves state-of-the-art results, consistently outperforming independent structured weight decompositions and alternative pairwise weight factorizations, which operate under heuristic grouping strategies. By replacing heuristic engineering strategies with a convergent, optimization-driven pipeline, we establish a theoretically grounded foundation for scalable, transformer compression across different modalities.
