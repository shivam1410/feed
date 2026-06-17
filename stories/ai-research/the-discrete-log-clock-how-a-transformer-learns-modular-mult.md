---
title: "The Discrete-Log Clock: How a Transformer Learns Modular Multiplication"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17399"
authors: ["Huu Danh Nguyen (Stanford University)"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.17399v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17399v1 Announce Type: new Abstract: When small transformers grok modular multiplication, prior work reports that the learned embedding has a "dense" Fourier spectrum requiring all frequencies. This contrasts with modular addition, where only a sparse set of key frequencies suffices. We show this density is an artifact of analyzing in the wrong basis. The natural Fourier transform for multiplication is not the standard additive DFT but the multiplicative character transform, which decomposes functions on the multiplicative group $(\mathbb{Z}/p\mathbb{Z})^*$ into its irreducible representations. Applying this transform to a grokked transformer trained on $a \cdot b \bmod 113$, we find the embedding spectrum becomes highly sparse (Gini coefficient 0.58 vs. 0.07 in the additive basis) with only 4 key frequencies carrying significant energy. Furthermore, 96.9% of MLP neurons are cleanly tuned to a single multiplicative frequency, and neuron activation heatmaps reveal 2D-periodic structure when reordered by the discrete logarithm. These results demonstrate the transformer reduces multiplication to addition in discrete-log space, implementing a "Discrete-Log Clock" algorithm analogous to Nanda et al.'s Clock algorithm for addition. The methodology generalizes: matching the analysis basis to the algebraic structure of the task reveals interpretable structure where standard tools see noise.
