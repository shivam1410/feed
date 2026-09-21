---
title: "Layerwise Decoupling for Stable Structured Sparsification of Fully Connected Layers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21126"
authors: ["Charles Kulick, Armenak Petrosyan, Sui Tang"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 53
guid: "oai:arXiv.org:2609.21126v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21126v1 Announce Type: new Abstract: We propose a decoupled, layerwise method for structurally sparsifying the fully connected layers of pretrained neural networks. Rather than penalizing all layers jointly, our approach extracts shallow two-layer subnetworks, normalizes the inner weights, and applies a structured group penalty to the outer weight matrix of each block, processing layers sequentially to prune neurons and reduce the width of each layer. We prove that the constrained decoupled objective is equivalent at optimality to a specific joint penalty on the inner and outer weights, for any positively homogeneous activation, and thus admits a clean projected and proximal formulation. Our central finding is that this decoupled reformulation is more robust than coupled methods. In numerical experiments it provides a wider usable range of the regularization strength and a lower rate of catastrophic over-pruning than the tested joint baseline while maintaining comparable accuracy. We establish these properties in controlled classification and sparse-recovery studies, and examine their scope in a high-dimensional PINN stress test and in the feed-forward layers of OPT-1.3B.
