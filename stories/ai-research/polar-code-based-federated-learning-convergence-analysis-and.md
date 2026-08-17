---
title: "Polar Code Based Federated Learning: Convergence Analysis and Resource Allocation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13961"
authors: ["Han Xiao, Wei Kang, Nan Liu"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.13961v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13961v1 Announce Type: new Abstract: Federated learning (FL) enables collaborative model training across distributed devices without sharing raw data; however, it faces significant communication bottlenecks and channel impairments in practice. Conventional network layer treatments either idealize the channel as error free or apply equal error protection (EEP) to transmitted model updates, failing to account for the inherently unequal importance of quantization bits within a single local model. To address this limitation, we propose a cross layer polar code based FL scheme that leverages the unequal error protection (UEP) property of polar codes under finite block lengths. Specifically, the proposed design selectively protects more significant quantization bits, thereby mitigating the detrimental effects of channel noise. We further provide a rigorous convergence analysis of the proposed scheme, deriving an upper bound on the convergence gap, which we then jointly optimize over the number of quantization bits and the polar code block length across all training iterations. Experimental results demonstrate that both constant and variable block length configurations of our polar code based scheme consistently achieve substantial performance gains over uncoded and LDPC-based EEP benchmarks, with the advantage becoming increasingly pronounced as the channel quality deteriorating. These findings confirm the efficacy of our cross-layer design in enhancing FL robustness and efficiency under realistic channel conditions.
