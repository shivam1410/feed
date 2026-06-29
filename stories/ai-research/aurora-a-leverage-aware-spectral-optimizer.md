---
title: "Aurora: A Leverage-Aware Spectral Optimizer"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27715"
authors: ["Alec Dewulf, Dhruv Pai, Li Yang, Ashley Zhang, Ben Keigwin"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2606.27715v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27715v1 Announce Type: new Abstract: We show that for tall matrix parameters, like projection matrices in the MLP layers, the Muon update can have row norms that are arbitrarily non-uniform. This can lead to a self-reinforcing feedback loop whereby neurons receive persistently small updates and eventually do not contribute meaningfully to network outputs. This problem is effectively mitigated by an additional row normalization step, but current methods do this in a way that moves the Muon update geometry away from the polar factor of the momentum matrix, which we find is undesirable. We propose Aurora, an optimizer that enforces row-uniformity of matrix parameter updates while respecting Muon's polar factor geometry. Aurora outperforms Muon in our pre-training experiments and, when combined with existing methods, achieves state-of-the-art performance among spectral optimizers on the optimizer track of the modded-nanoGPT speedrun. Additionally, we find that Aurora's empirical gains over Muon scale with the MLP expansion factor, suggesting that Aurora may allow for effective training of very wide MLP layers.
