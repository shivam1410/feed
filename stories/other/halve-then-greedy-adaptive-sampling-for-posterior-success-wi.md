---
title: "Halve-Then-Greedy: Adaptive Sampling for Posterior Success with Near-Optimal Instance Dependence"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20997"
authors: ["Yinan Li, Kwang-Sung Jun, Kapilan Balagopalan, Tuan Nguyen, Yao Zhao, Abbas Zaidi, Houssam Nassif"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20997v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

We study fixed-budget adaptive experimentation aimed at maximizing the probability of obtaining sufficient posterior evidence that a recommended design's mean performance exceeds a target. Unlike best-arm identification, this objective does not require finding the best design. For Gaussian bandits with a Gaussian prior, we propose \emph{Halve-Then-Greedy} (HTG), which combines a large initial balanced allocation, successive halving, and posterior-greedy sampling. We prove instance-dependent, finite-budget exponential bounds on posterior-failure probability that capture both separation from unfavorable arms and the presence of multiple favorable arms. On one-positive-arm families, we establish an asymptotic sample-complexity lower bound that HTG matches up to a logarithmic factor. We further analyze uniform sampling and sequential halving, revealing regimes where they require more samples than HTG by linear and logarithmic factors, respectively. Simulations illustrate HTG's sample-efficiency advantages and their dependence on instance structure.
