---
title: "Optimal User-Level Private Stochastic Convex Optimization and Mean Estimation with Heavy Tails"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28460"
authors: ["Andrew Lowy"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28460v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

We study stochastic convex optimization with heavy-tailed stochastic gradients under $(\varepsilon, \delta)$-user-level differential privacy, which protects each user's entire collection of samples. Instead of assuming a uniformly bounded Lipschitz constant, we only assume bounds on the second- and $k$-th moments of the random sample Lipschitz parameters. This allows for unbounded, heavy-tailed stochastic gradient distributions and can lead to sharper excess risk bounds. We characterize the minimax optimal excess population risk up to logarithmic factors. Our algorithm achieves the optimal rate with only $\widetilde{O}(1/\varepsilon)$ users. As a byproduct of our algorithmic developments, we obtain tight bounds for user-level private mean estimation under norm-moment assumptions, improving over the guarantees of Esfandiari et al. (2022) and Zhao et al. (2024). Finally, for mean estimation under the directional-moment assumption of Agarwal et al. (2025), we close their remaining approximate-DP gap by removing the additional $d/\varepsilon$ user requirement and attaining the optimal sample complexity up to logarithmic factors.
