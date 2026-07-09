---
title: "Entropy-Guided Tensor Compression for Multimodal Federated Learning on Edge Devices"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06651"
authors: ["Quoc Bao Phan, Tuy Tan Nguyen"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06651v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06651v1 Announce Type: new Abstract: Federated learning (FL) over mobile and edge devices increasingly involves multimodal models in which clients differ in both sensing capability and computational capacity. Existing update compression schemes typically apply uniform policies across layers and devices, without accounting for modality-specific differences in spectral structure and compressibility. We propose MESH-FL, an entropy-guided matrix product state (MPS) update-compression framework for modality-heterogeneous FL on resource-constrained devices. MESH-FL estimates the spectral entropy of each layer-wise update via truncated singular value decomposition and allocates MPS compression ranks adaptively across layers, modalities, and devices under per-client payload budgets. We show that higher spectral entropy necessitates a higher reconstruction rank under the majorization order on singular-value energy distributions. Building on this result, we prove that the proposed entropy-guided allocation solves a convex surrogate rank-allocation problem, preserves monotonicity under the exact payload model, and achieves convergence with an explicit compression-dependent error term. Experiments on a 15-node heterogeneous Raspberry Pi~4/5 cluster with modality-heterogeneous clients show that MESH-FL achieves up to $56.8\times$ compression while surpassing the uncompressed FedAvg baseline in final accuracy by up to 2.01%, and reduces total transmitted data to reach convergence by up to $66\times$.
