---
title: "Learning Cross-Model Activation Alignments with Explicit Many-to-Many Layer Maps"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.09058"
authors: ["Alina Sudakov, Guy Bar-Shalom, Fabrizio Frasca, Haggai Maron"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2610.09058v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

LLMs are released at a rapid pace, raising a natural question: how do two independently trained models relate, both in which layers correspond and in how features transform between them? We study this by learning an activation alignment, a map from a source model's layerwise activations to a target's. Our method, MATCHA, factors this map into a layer map, whose output is an explicit target-by-source matrix that can be extracted and inspected, and a layer-shared feature map between hidden spaces. Most of prior work fixes the layer correspondence in advance, pairing layers at roughly the same relative depth; in contrast, we learn both factors jointly from prompts. Across 42 pairs of seven models spanning three different families, MATCHA reconstructs the target's activations more faithfully and improves retrieval-based metrics substantially, w.r.t. previous approaches. The recovered maps are broadly monotone in depth but, in contrast with most previous approaches, are consistently many-to-many: each target layer draws on a band of source layers. Our alignments also enable transfer of activation-space interventions, allowing steering vectors and probes developed for one model to transfer to another.
