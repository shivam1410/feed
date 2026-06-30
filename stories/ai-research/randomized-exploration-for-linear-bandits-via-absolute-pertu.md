---
title: "Randomized Exploration for Linear Bandits via Absolute Perturbations"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28616"
authors: ["Toshinori Kitamura, Shuai Liu, Csaba Szepesv\\'ari"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2606.28616v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28616v1 Announce Type: new Abstract: In stochastic linear bandits, the canonical Upper Confidence Bound (UCB) algorithm admits a simple frequentist regret analysis but can be computationally demanding, while Thompson Sampling (TS) is computationally attractive yet typically harder to analyze due to its non-optimistic nature. We propose Absolute Thompson Sampling (ATS), a simple modification of TS that ensures optimism in expectation by replacing the signed exploration noise with its absolute value. This preserves the computational efficiency of TS while avoiding the technically involved anti-concentration arguments common in TS analyses, enabling a simple UCB-style regret analysis. We show that ATS achieves $\tilde{O}(d^{3/2}\sqrt{K})$ regret, matching existing bounds for TS in linear bandits. We further introduce Ensemble Absolute Thompson Sampling (EATS), which takes the maximum over multiple absolute perturbations with normalization by the ensemble size. As the ensemble size grows, EATS converges to the UCB objective, recovering UCB behavior in the limit. Experiments show that moderate ensemble sizes already yield strong performance. Our results point to a bridge between randomized exploration and deterministic optimism both in theory and practice.
