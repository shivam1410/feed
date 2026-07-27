---
title: "Smart predict-then-robustly-optimize"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21773"
authors: ["Aakil Caunhye, Xuefei Lu, Belen Martin-Barragan"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.21773v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21773v1 Announce Type: new Abstract: In this paper, we propose and study a robust variant of the smart predict-then-optimize approach that accounts for prediction shifts due to disturbance in the covariate feature space. While traditional integrated-learning-and-optimization models assume that side information is perfectly revealed, empirical data-driven features are frequently corrupted or noisy at the time of decision-making, leading to fragile operational policies. To bridge this gap, we integrate principles of robust optimization directly into the predictive-prescriptive pipeline via a smart predict-then-robustly optimize loss and establish a computationally tractable convex surrogate, designed to hedge against worst-case feature perturbations. On the theoretical front, we formalize the structural validity of this surrogate by proving its approximation error probability decays exponentially according to a sub-Gaussian concentration profile. Furthermore, we establish that under mild assumptions, the surrogate is Fisher consistent with high probability. We also prove necessary conditions under which our framework outperforms standard smart predict-then-optimize and maintain its superiority even when the standard method is equipped with regularized upstream predictions. Numerical experiments validate that our robust framework consistently yields significant performance improvements over standard methods, both in out-of-sample terms and in training stability.
