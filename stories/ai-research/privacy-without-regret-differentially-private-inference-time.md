---
title: "Privacy Without Regret: Differentially Private Inference-Time Alignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26324"
authors: ["Ishi Jain, Nandini Bhattad, Sayak Ray Chowdhury"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26324v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26324v1 Announce Type: new Abstract: Best-of-N (BoN) sampling is the simplest and most widely deployed inference-time alignment strategy, but it suffers from two distinct problems: reward hacking, in which the selected response exploits errors in the proxy reward model, and the absence of any privacy protection for the sensitive human preference data used to train that reward model. We show that a single intervention-adding calibrated noise to reward scores before selection-resolves both. Our first result, Private Best-of-N (PrivBoN), establishes that Gumbel noise at an appropriate scale simultaneously provides $\epsilon$-differential privacy and implements KL-regularized alignment. Whenever the privacy budget exceeds a critical threshold $\epsilon^*$, the privacy-mandated noise is the regret-optimal regularization, and privacy imposes zero additional alignment cost-matching the information-theoretic skyline of Huang et al. (2025). Because $\epsilon^*$ depends on an unknown coverage coefficient, we introduce Private Inference-Time Pessimism (PrivITP), which combines $\chi^2$-regularized rejection sampling with a two-phase Gaussian mechanism. PrivITP achieves ex-post $(\epsilon,\delta)$-DP with a privacy cost independent of the number of responses $n$, cleanly decouples the regularization parameter from the privacy parameter, and attains the skyline up to a noise-inflation term. Experiments across several language models, datasets, and reward models confirm our results: PrivBoN and PrivITP are scaling-monotonic (unlike BoN, which degrades past a critical $n$), and PrivITP matches or outperforms PrivBoN at equivalent privacy levels, with the largest gains in the strong-privacy regime.
