---
title: "Latent States in Neural Networks: Recovering the Temporal Structure of Drifting Data from Model Weights"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27482"
authors: ["Kevin Guan"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.27482v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27482v1 Announce Type: new Abstract: A temporally drifting data stream may pass through discrete regimes rather than changing continuously. We ask whether such regimes are recoverable from the weights of models trained on the stream, using a hidden Markov model (HMM) fit to the chronologically ordered trajectory of those weights. We study this question in two domains known to drift over time: multimodal misinformation detection, using the Fakeddit dataset; and sentiment analysis, using the Yelp dataset. We train classifiers on consecutive temporal windows and fit an HMM to the trajectory of their aligned weights, recovering latent states that partition each timeline into coherent phases. On both datasets, classifiers generalize better to data from windows sharing the state of their training window than to windows across state boundaries. This within-state transfer advantage survives a control for temporal proximity and modestly exceeds the advantage recovered by a naive partition into contiguous states of equal size. Although the states are estimated solely from model weights, they correlate more strongly with shifts in the data's class distribution than with the weight-space geometry used to estimate them. After class divergence and lag are residualized out, the within-state advantage exceeds its permutation null on both tasks, indicating that the states recover structure relevant to transfer beyond the data distribution. Every effect replicates on both tasks but is attenuated on Yelp, whose label distribution is more temporally stable.
