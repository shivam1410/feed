---
title: "Integrating Local and Global Entropy for Uncertainty Quantification in LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09875"
authors: ["Johanne Medina, Tianyi Zhou, Keivin Isufaj, Aristides Gionis, Sanjay Chawla"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.09875v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09875v1 Announce Type: new Abstract: Large language models hallucinate confidently, making uncertainty quantification (UQ) essential for reliable deployment. Existing methods rely predominantly on token-level signals, leaving the geometric structure of intermediate hidden states underused. In this paper, we take the geometric complexity of hidden-state matrices as a measure of the global uncertainty of LLMs, while treating token-level uncertainty estimation as a local metric. We show that hidden-state geometric entropy (global uncertainty) and token-level entropy (local uncertainty) are statistically near-orthogonal, capturing distinct failure regimes for reliability prediction. In particular, global geometry recovers the confident-but-wrong failure mode that local signals systematically miss. Building on this, we propose Global-Local Uncertainty (GLU), an unsupervised, single-pass score that fuses the two signals via a multiplicative gate. Across three model families and six benchmarks, GLU matches or outperforms all unsupervised baselines while requiring only a single forward pass and remaining length-normalized and architecture-agnostic.
