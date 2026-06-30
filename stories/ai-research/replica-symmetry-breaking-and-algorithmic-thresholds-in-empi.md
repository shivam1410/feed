---
title: "Replica Symmetry Breaking and Algorithmic Thresholds in Empirical Risk Minimization under Multi-Index Model"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.28573"
authors: ["Andrea Montanari, Kangjie Zhou"]
date: "Tue, 30 Jun 2026 00:00:00 -0400"
score: 42
guid: "oai:arXiv.org:2606.28573v1"
image: ""
generated: "2026-06-30T19:06:59+05:30"
---

arXiv:2606.28573v1 Announce Type: new Abstract: Modern machine learning models are trained by optimizing high-dimensional non-convex empirical risk functions. Such cost functions can have a multitude of local optima and yet, gradient-based optimization appears to converge to near-global optima. Within a simple supervised learning setting, we develop a precise picture of which parts of the empirical risk landscape are accessible by polynomial-time algorithms. We are given i.i.d. pairs $\{(\boldsymbol{x}_i,y_i):\; 1 \le i\le n\}$ with $\boldsymbol{x}_i\in \mathbb{R}^d$ standard Gaussian feature vectors, and $y_i\in\mathbb{R}$ response variables that depend on $\boldsymbol{x}_i$ through their projections on an unknown $k$-dimensional subspace. We use empirical risk minimization to learn a model that depends on an $m$-dimensional projection of the data (e.g., an $m$-neurons neural network). We propose an incremental approximate message passing (IAMP) algorithm and precisely characterize the training error it achieves, as well as the relation between test and training error, in the high dimensional asymptotics $n,d\to\infty$, with $n/d\to\alpha \in (0, +\infty)$. Based on earlier work in related models, we expect that the performance achieved by our algorithm is optimal among polynomial-time algorithms.
