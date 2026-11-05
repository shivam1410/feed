---
title: "Accelerating FastDEC Clustering Algorithm with GPUs"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03934"
authors: ["Mi Li, Eibe Frank, Bernhard Pfahringer"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03934v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Fast Dominance Estimation Clustering (FastDEC) is an efficient variant of Density Peak Clustering (DPC) that achieves high clustering quality through dominance-based density estimation, but remains constrained by the computational cost of exact k-nearest-neighbor (k-NN) construction and dominance component (DC) processing. We present SymWarp-FastDEC, a GPU-accelerated implementation of FastDEC. At its core is SymTrikNN, an exact self-k-NN kernel that exploits search symmetry using upper-triangular traversal and warp-cooperative top-k selection. We also introduce WP-DC, a warp-parallel DC reduction algorithm designed for modern GPUs. Combined with memory-adaptive execution planning and stream scheduling, WP-DC eliminates DC reduction as a runtime bottleneck. Experiments on synthetic and real-world datasets show that SymWarp-FastDEC produces clustering outputs identical to the original FastDEC on all evaluated equivalence benchmarks. Compared with a FastDEC variant using FAISS GpuIndexFlatL2 for exact k-NN search, our approach achieves approximately 1.7x to 4.9x higher end-to-end performance, with the advantage generally increasing with dimensionality. Compared with the original single-threaded Python FastDEC implementation, speedups reach approximately 2.5 x 10^4 in a very high-dimensional case where its k-d-tree-based search degrades; this extreme result is not representative of typical acceleration.
