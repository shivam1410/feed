---
title: "No Subspace to Track: Non-Identifiability and Optimizer State in Low-Rank Training"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05872"
authors: ["Noel Thomas"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.05872v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05872v1 Announce Type: new Abstract: Memory-efficient optimizers such as GaLore train large language models by projecting gradients onto a rank-r subspace recomputed every T steps, assuming this subspace is a slowly drifting object that can be tracked. We show that beyond a small reproducible core, there is no such object. Two estimates of the top-r subspace computed at the same step from disjoint minibatches disagree as much as estimates computed T steps apart (0.73 vs 0.74 of the maximal chordal distance sqrt(2r), at Pythia-160M with r=128): the apparent rotation at each refresh is dominated by estimator noise. This holds across four model families in three architecture classes from 70M to 6.9B parameters, strengthening with scale, and more weakly in a vision transformer. Only ~39 of 128 directions are reproducible across minibatches, and averaging cannot recover the rest: under N-fold averaging the gradient's spectral tail shrinks as N^(-1/4) rather than the N^(-1/2) of pure noise, so no averaging budget makes the subspace well defined. What helps instead follows from treating each refresh as a change of coordinates for Adam's state. Carrying the second moment blindly is provably about (r-k*)/2 worse than the best rotation-blind estimator, while the first moment transports exactly through the rotation, the optimal linear map under isotropic gradients and the rule LDAdam uses. At 1B over 40k steps (3 seeds), full LDAdam reaches 18.7 perplexity at beta2=0.999, beating untransported GaLore after its best beta2 fix (19.3); shortening the second-moment memory to beta2=0.99 helps the refreshing optimizers, though for canonical GaLore the effect is small and a full-rank control reverses it. One measurable fact, subspace non-identifiability, clarifies why GaLore works, which patches work, and what to check before trusting a low-rank assumption: the reproducible rank k*.
