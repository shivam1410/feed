---
title: "Prism Transformer: Progressive Head Schedules for Hierarchical Attention Processing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27449"
authors: ["Shubham Aggarwal"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.27449v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27449v1 Announce Type: new Abstract: Multi-head attention conventionally partitions the hidden dimension equally across all heads at every layer, enforcing an identical representational subspace dimension (dh = dmodel/h) throughout the models depth. In this work, we identify this uniform allocation as a fundamental structural bottleneck: due to their restricted dimensional space, early-layer heads are unable to faithfully capture complex, high-dimensional contextual patterns. To resolve this, we introduce the Prism Transformer, a novel architectural paradigm that replaces the static, uniform head configuration with a progressive head schedule. By monotonically increasing the head count across layers, the Prism Transformer naturally establishes a local-to-global representational hierarchy: early layers leverage fewer, exceptionally wide heads to capture complex, local compositional patterns, while deep layers deploy many, narrow heads to decompose these patterns into specialized linguistic features. Crucially, this structural shift is parameter-neutral, compute-neutral, and introduces zero training or inference overhead, preserving identical weight matrices and FLOP budgets as the standard Transformer. Across three model scales (124M, 354M, and 757M), the Prism Transformer consistently outperforms uniform baselines, achieving consistent reductions in validation loss alongside consistent gains on downstream zero-shot benchmarks (including PIQA, HellaSwag, ARC-Easy, and WinoGrande). Our findings demonstrate that non-uniform subspace allocation unlocks latent capacity within the standard Transformer budget, enabling more effective use of model capacity.
