---
title: "Gromov-Monge Flow Matching for Equivariant Graph Generation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26961"
authors: ["Moritz Piening, Christian Wald"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2608.26961v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26961v1 Announce Type: new Abstract: Graphs are invariant under node permutations, motivating the use of permutation-equivariant architectures in generative models. In flow matching, however, symmetry may also enter the source--target coupling: once graph pairs are compared up to node relabeling, the natural Wasserstein geometry is that of the graph quotient space. The Euclidean quotient metric of this space coincides with the Gromov--Monge distance, obtained by optimally relabeling the nodes. We develop this perspective theoretically, showing that quotient couplings can be lifted to aligned representatives without additional cost and that symmetrization yields equivariant flow-matching minimizers, including for categorical endpoint prediction. In practice, exact Gromov--Monge alignment is intractable, so we construct minibatch couplings using efficient Gromov--Wasserstein-type relaxations and lower bounds for the inner node alignment, optionally combined with an outer assignment between graphs. The resulting procedure changes only the training coupling and is compatible with standard permutation-equivariant architectures. Across continuous graph and categorical molecular generation, these structure-aware couplings substantially improve sample quality at small integration budgets, while our scaled-up molecular models remain competitive under conventional many-step sampling.
