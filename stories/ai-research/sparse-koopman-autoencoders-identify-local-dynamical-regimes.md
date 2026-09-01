---
title: "Sparse Koopman Autoencoders Identify Local Dynamical Regimes in Multibasin Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.29057"
authors: ["Aidan Li, Uday Kiran Reddy Tadipatri, Mahan Fathi, Sarath Chandar, Ross Goroshin"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.29057v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.29057v1 Announce Type: new Abstract: Koopman autoencoders (KAEs) seek a higher-dimensional latent representation in which nonlinear dynamics evolve linearly. However, many interesting systems have multiple basins of attraction, and both theoretical and empirical work has shown these multibasin systems cannot generally admit a single finite-dimensional global Koopman embedding under standard assumptions. We posit that encoders with a sparsity-inducing objective encouraging few active latent coefficients will provide latent supports as an inspectable basin-modeling principle for Koopman autoencoders. We use these encoders producing sparse latents in training Sparse Koopman Autoencoders (SKAEs) without basin labels or other regime annotations, and treat the learned latent supports as model-produced regime variables after training. Across a range of procedurally generated multibasin systems and chaotic flows, we show that SKAEs have superior forecasting performance compared to dense-latent KAEs. We also perform a mechanistic study that shows latent supports produced by SKAEs are both essential for the quality of the representation and useful for identifying basins on held-out basin interior states, whereas dense-latent KAEs collapse to an uninformative single family. These results identify sparse latents and their corresponding supports as label-free, interpretable regime variables for Koopman learning in nonlinear systems with multiple local dynamical laws.
