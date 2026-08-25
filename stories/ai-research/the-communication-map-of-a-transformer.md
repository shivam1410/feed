---
title: "The Communication Map of a Transformer"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.22007"
authors: ["Richard Zhe Wang"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.22007v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.22007v1 Announce Type: new Abstract: The components of a transformer communicate by writing to and reading from a shared residual stream, and mechanistic interpretability has mapped these connections by hand, one circuit at a time. We present the communication map, which charts every potential communication channel in a language model from weights alone, generalizing the composition score of Elhage et al. (2021) into a single coupling coefficient covering all 18 connection classes, from entire attention head circuits to single neurons. The census of all candidate channels, from $6.3\times10^{8}$ in GPT-2 to $1.3\times10^{11}$ in Pythia-6.9B, finds that 70-89% of head pairs are oriented far from chance, some coupled strongly and others actively avoiding each other. The full map costs 15 seconds for GPT-2 and 11 minutes for Pythia-6.9B on one consumer GPU. Two applications demonstrate the utility of the map. In Application 1, the strongest head-to-head couplings recover the known induction circuits blind and group them into communities, and ablating one such community destroys the model's in-context copying. In Application 2, pooling every head's coupling coefficients identifies a distinct two-dimensional stream subspace, whose deletion abolishes the induction capability in six models up to Pythia-6.9B. This subspace is different from those identified by either activation PCA or outlier dimensions. We release the map, the statistical machinery, and the intervention suite.
