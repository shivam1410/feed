---
title: "Bayesian Fixed-Confidence Best-Arm Identification with Abstention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.30384"
authors: ["Yuqi Huang, Yunlong Hou, Vincent Y. F. Tan"]
date: "Fri, 23 Oct 2026 00:00:00 -0400"
score: 15
guid: "oai:arXiv.org:2610.30384v1"
image: ""
generated: "2026-10-23T19:04:29+05:30"
---

We study the Bayesian fixed-confidence best-arm identification problem in which a learner can abstain from making a terminal recommendation. Subject to a target error probability $\delta$ and an abstention budget $\alpha$, we propose Screen-and-Confirm (S&C) and analyze its expected stopping time. We further derive the minimum expected stopping time for any algorithm that satisfies these constraints. For Gaussian priors and rewards, as $(\delta,\alpha)\downarrow(0,0)$, we establish matching upper and lower bounds up to multiplicative constants, with rate $\kappa_\nu^2[1+\log((\alpha+\delta)/\delta)]/(\alpha+\delta)$, where $\kappa_\nu$ is the prior density of the top-two gap at zero, highlighting that nearly tied instances govern the sampling cost. When abstention is disallowed ($\alpha=0$), S&C yields the optimal $\Theta(1/\delta)$ dependence for fixed model parameters, removing the additional $\log(1/\delta)$ factor in the upper bound of Jang et al. (2024) under our Gaussian assumptions. We further characterize the exact multiplicative constant of the minimum expected stopping time for practical regimes including (i) fixed $\alpha \in (0,1)$ and (ii) $\alpha/\delta\to\infty$, which are also achieved by S&C.
