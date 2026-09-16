---
title: "Channel-Informed Neural Network for Physical Layer Key Generation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16341"
authors: ["Jose Angel Sanchez Viloria, George Sklivanitis, Dimitris Pados, Elizabeth Serena Bentley"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16341v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16341v1 Announce Type: new Abstract: Physical-layer key generation (PKG) enables wireless devices to establish shared keys from reciprocal channel observations without directly exchanging the key. This capability is attractive for edge networks, where distributed and resource-constrained devices may require lightweight key establishment with limited access to centralized infrastructure. We introduce a channel-informed neural network for PKG that derives binary key features directly from received IQ measurements while explicitly grounding the learned representation in the underlying multipath channel. The proposed multi-task recurrent neural network jointly learns reciprocity-preserving binary features and an auxiliary channel estimate using a training objective that combines deep metric learning with channel-informed supervision. Structured channel sounding enables channel estimation from over-the-air measurements, while Sionna-RT ray tracing is used to augment training with additional propagation conditions. We evaluate the framework using indoor and outdoor software-defined-radio measurements collected on the POWDER radio testbed. Across all evaluated scenarios, the proposed model produces lower bit disagreement for reciprocal Alice-Bob observations than for Eve-related observations. Ray-traced data augmentation substantially improves key diversity, increasing the unique-key rate to 0.94, 0.99, and 0.99 across the indoor and two outdoor scenarios, respectively. Successfully reconciled channel-informed keys pass the selected NIST randomness tests prior to SHA-3 privacy amplification. The results demonstrate the potential of channel-informed representation learning for decentralized wireless key establishment while highlighting an important tradeoff between key diversity and reconciliation reliability.
