---
title: "Sigma-Branch: Hierarchical Single-Path Network Reconstruction for Dynamic Inference with Reduced Active Parameters"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09924"
authors: ["Kohga Tanaka, Hiroaki Nishi"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.09924v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09924v1 Announce Type: new Abstract: Deploying deep neural networks on memory-constrained edge accelerators is bottlenecked by per-inference off-chip weight transfer rather than computation: the dense network cannot be retained on-chip, and every parameter must be loaded for every input. Existing model compression reduces this transfer only at the cost of permanent capacity loss. We propose Sigma-Branch (SigmaB), a framework that restructures a pretrained dense network into a hierarchical binary tree composed of a shared backbone, hierarchical routers, and specialized leaves. Pretrained weights are distributed across the tree via activation-based spherical k-means clustering, which jointly initializes router weights and per-branch channel allocations; soft-routing fine-tuning then aligns each leaf with its routed input subset. At inference, the resulting network executes only a single root-to-leaf path, reducing the active-parameter footprint while storing the complete dense parameter set in memory. Across CIFAR-100 / ResNet-50, ImageNet-1K / ResNet-50, and ModelNet40 / PointNet++, SigmaB-Net reduces per-inference active parameters by 58-60% while remaining within 1.72 percentage points (pp) of the dense baseline Top-1. At comparable ImageNet-1K Top-1, the active-parameter reduction exceeds static structured pruning (FPGM, HRank) by 14-23 pp. The cross-modal evaluation, spanning 2D vision and 3D point-cloud backbones, substantiates a framework-level claim that decouples per-inference memory traffic from the total parameter count.
