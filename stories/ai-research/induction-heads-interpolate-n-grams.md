---
title: "Induction Heads Interpolate N-Grams"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02800"
authors: ["Francesco D'Angelo, Oguz Kaan Yuksel, Swathi Shree Narashiman, Nicolas Flammarion"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2607.02800v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02800v1 Announce Type: new Abstract: Induction heads are attention circuits believed to underlie in-context learning in transformers, yet a precise characterization of the estimators they implement remains elusive. We study transformers trained on order-$k$ Markov chains and identify two complementary smoothing mechanisms. First, at finite attention-weight scale, the circuit implements a soft context-matching estimator: it aggregates contributions from exact and partial context matches, weighted exponentially by their overlap, and induces a data-dependent interpolation across context orders analogous to Jelinek-Mercer smoothing. Second, a beginning-of-sequence (BOS) token induces additive pseudo-counts, recovering Dirichlet-style smoothing. We construct a disentangled transformer implementing both mechanisms and show that trained transformers recover the predicted attention patterns. Across settings where pseudo-count smoothing is optimal or lower-order contexts provide structured evidence, trained transformers match or outperform classical count-based baselines. Our results bridge mechanistic interpretability of induction heads with classical statistical smoothing, revealing that transformers learn to regularize in-context estimation rather than simply count.
