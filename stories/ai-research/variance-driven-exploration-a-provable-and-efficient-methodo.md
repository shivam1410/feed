---
title: "Variance Driven Exploration: A Provable and Efficient Methodology for Pure Exploration in Highly Stochastic Environments"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21995"
authors: ["Khang Luong, Nam Nguyen, Hoang Ta, Hung The Tran, Tuan Dam"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.21995v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21995v1 Announce Type: new Abstract: We propose Variance Driven Exploration (VarDE), a principled approach for pure exploration in highly stochastic environments, where the exploration process is dominated by stochastic variance. VarDE is built on a fundamental principle: sampling effort should be allocated to minimize the uncertainty of the final decision. We formalize the uncertainty of the final decision through a smooth decision function and derive allocation rules that explicitly capture how stochastic noise in individual components affects the reliability of the final output. We apply this methodology to three core problems of pure exploration -- Best Arm Identification (BAI), Monte Carlo Tree Search (MCTS), and Best-Policy Identification (BPI) -- with theoretical guarantees on variance decay and simple regret. Empirically, we demonstrate consistent and significant improvements of VarDE over existing methods, with especially strong gains in highly stochastic environments.
