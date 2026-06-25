---
title: "Why Do Accumulated Transformations Extrapolate?"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24975"
authors: ["Mahesh Godavarti"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.24975v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24975v1 Announce Type: new Abstract: PaTH Attention showed that replacing RoPE's position-indexed rotations with accumulated data-dependent Householder reflections yields strong length extrapolation, though performance degrades at extreme context lengths. We ask whether this depends on Householder-specific structure or reflects a general property of accumulated transformations along source-to-query paths. We study a simpler variant keeping RoPE's block-diagonal SO(2) rotations but replacing position-indexed angles with accumulated token-dependent ones. It shows the same pattern: improved extrapolation then degradation at long contexts. We prove the result extends to accumulated orthogonal transformations satisfying certain regularity conditions: their products become incoherent after finitely many steps, suppressing attention to distant tokens. Accumulated rotations of queries and keys create a finite mixing window independent of context length; per-token suppression learned in training transfers unchanged to any evaluation length, and high-dimensional concentration produces a score gap suppressing far tokens while near-route transport preserves the target signal. Conversely, a lower bound shows accumulated rotations must eventually degrade: as the far set grows, no rotations preserve the near signal without explicit far-mass control. For SO(2) rotations, rotating values too makes residual far contributions combine incoherently, extending the range. Controlled experiments support these predictions: random accumulated rotations substantially improve extrapolation over RoPE, learned token-dependent rotations maintain near-training-length perplexity far beyond the training context, and rotating values helps over queries and keys alone. Rotation-only models still degrade at extreme lengths, while ALiBi stays length-stable, consistent with the need for far-mass control.
