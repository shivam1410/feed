---
title: "Geometry-Aware Graph Construction via Adaptive Spectral Bandwidth Control"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.03306"
authors: ["Ecem Bozkurt, Antonio Ortega"]
date: "Fri, 04 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.03306v1"
image: ""
generated: "2026-09-04T23:32:20+05:30"
---

arXiv:2609.03306v1 Announce Type: new Abstract: Kernelized graph methods - spectral clustering, diffusion maps, and sparse kernel -regression graphs - that use Gaussian kernels depend on the choice of Gaussian bandwidth sigma, which governs the spectral character of the local kernel operator. When sigma is too small, the kernel overestimates local complexity and treats each sample as an independent direction; when sigma is too large, the kernel collapses multiple directions together, the condition number diverges, and all geometric discrimination is lost. We propose a choice of scale to make the spectral complexity of the kernel consistent with the intrinsic complexity of the underlying manifold. We propose a per-node bandwidth criterion that operationalizes this principle by jointly matching the kernel's effective rank to the local intrinsic dimension estimated via minimum spanning tree, anchoring the search in the manifold-consistent log-log scaling regime. We evaluate SSL embeddings from six encoders on CIFAR-100, showing that adaptive bandwidth consistently improves leave-one-out (LOO) classification and label propagation (LP) accuracy over fixed-bandwidth methods and competing adaptive methods.
