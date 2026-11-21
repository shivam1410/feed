---
title: "Coordinate Basis Linear Bandits with Sublinear Regret over Low-Rank Clusters"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25424"
authors: ["Hantao Yang, Hong Xie, Defu Lian"]
date: "Sat, 21 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.25424v1"
image: ""
generated: "2026-11-21T19:04:16+05:30"
---

We study the problem of computational efficiency for linear bandits in high-dimensional settings with a finite arm set. In linear bandits, the increase in the dimension $d$ of the feature vectors leads to growing computational costs of $O(d^2)$ at each round of update. Traditional low-rank approximation methods such as SOFUL reduce computation via fixed-size matrix sketching, yet run the risk of incurring vacuous linear regret when the spectral tail of the data is heavy and the approximation rank is inadequately selected. To guarantee regret convergence and effectively reduce computational costs, we introduce a clustering mechanism and propose the Coordinate Basis Linear Bandit (CBL) algorithm. Our method preserves the full covariance information in each cluster by maintaining an exact orthonormal basis of the cluster's column space together with a low-dimensional coordinate representation, which guarantees robust sublinear regret without spectral-tail vulnerabilities. It performs cluster switching by assigning a sentinel for each cluster, and reduces per-round update computation to $O(\bar r^2)$ in the cluster's effective dimension $\bar r=\min(r,l)$, where $r$ is the intrinsic rank of the data and $l<d$ is a tunable rank bound.
