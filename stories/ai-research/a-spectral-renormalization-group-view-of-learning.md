---
title: "A Spectral Renormalization-Group View of Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00422"
authors: ["Charles H. Martin"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00422v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

We study how the layers in deep neural networks (NNs) converge, using Wilsonian Renormalization-Group (RG) ideas to organize the spectral picture. During training, these layers often develop heavy-tailed power-law (PL) spectra, and the strongest checkpoints often appear near the PL exponent $\alpha\approx 2$. This pattern raises a simple question: why should this value mark a well-trained layer? The answer is both statistical and physical. Our statistical hypothesis is that $\alpha=2$ marks the boundary between stable if not optimal learning and overfitting via non-self-averaging. The physical answer is that the same value makes the spectral energy gain scale evenly across logarithmic spectral scales, which is the proposed Wilsonian marginal condition. We then apply the ERG trace-log condition, the proposed SETOL theory, which we justify by taking volume-preserving, scale-invariant transformations to remove arbitrary layer scale along the proposed RG flow. The resulting spectral RG flow connects the HTSR and SETOL theories to optimizers such as Muon, and motivates a new optimizer extension, WW-PGD. Together, these results point toward a spectral Renormalization-Group view of learning, in which NNs may approach shared spectral structure in the settings studied here.
