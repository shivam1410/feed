---
title: "Double-Scoring: Reliable Extraction of Strong Lottery Tickets"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20555"
authors: ["Bryce A. Christopherson, Jack Baretz, Darian Colgrove, Salah Dandan"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.20555v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20555v1 Announce Type: new Abstract: The lottery ticket hypothesis proposes that large random neural networks contain sparse subnetworks that can match the performance of dense models after comparable training. A stronger version asserts that sufficiently overparameterized random networks contain subnetworks that are already accurate before any weight training. Existing theory establishes that such strong lottery tickets exist, but reliable extraction remains difficult. We revisit edge-popup, a frozen-weight score-training method for extracting strong tickets, and identify layerwise sparsity selection as a central bottleneck. We introduce double-scoring, an augmented score-space parameterization that replaces a layerwise sparsity search with optimization over enlarged score tensors. We prove that fixed-density masking in an augmented score space preserves access to all original-coordinate masks, and we show that the resulting method can be interpreted as edge-popup on a zero-augmented network. In controlled experiments, double-scoring substantially improves strong-ticket extraction over fixed-density edge-popup and pruning-at-initialization baselines, improves on the performance of rewound sparse-training topologies, and exhibits markedly lower sensitivity to sparsity hyperparameters. Ablations show that the gain is not merely due to additional trainable score parameters, but is tied to the augmented score-space competition that induces the effective original sparsity.
