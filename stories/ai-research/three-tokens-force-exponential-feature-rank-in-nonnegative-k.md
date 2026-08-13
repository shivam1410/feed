---
title: "Three Tokens Force Exponential Feature Rank in Nonnegative Kernel Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.11427"
authors: ["Vicente Opazo"]
date: "Thu, 13 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.11427v1"
image: ""
generated: "2026-08-13T19:06:32+05:30"
---

arXiv:2608.11427v1 Announce Type: new Abstract: Full attention exposes every token pair, whereas kernel attention compresses a sequence into a fixed-dimensional sketch. We show that this distinction becomes exponential at the first context length containing two competing candidates. On Min-IP over Boolean inputs, rank-one normalized kernel attention solves every sequence of length at most two exactly. In contrast, any single normalized nonnegative kernel-attention head that succeeds on all three-token sequences with error strictly below $1/2$ requires $2^{\Omega(m)}$ features, even with arbitrary finite-dimensional tokenwise values and an arbitrary query-dependent affine readout. Dense softmax solves the same task with $m$-dimensional scores and constant temperature. The conclusion survives position-dependent token maps and a causal final query. As context length grows, the lower bound approaches the exact $2^m$-feature realization. Separately, for deterministic multihead, multilayer sketch models whose cross-token channels have finite alphabets, we prove a transcript lower bound linear in the number of independent answers and logarithmic in their alphabet size.
