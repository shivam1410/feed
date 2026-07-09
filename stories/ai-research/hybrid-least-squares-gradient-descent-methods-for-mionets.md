---
title: "Hybrid Least Squares/Gradient Descent Methods for MIONets"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06976"
authors: ["Jun Choi, Chang-Ock Lee, Minam Moon"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2607.06976v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06976v1 Announce Type: new Abstract: In this paper, we propose an efficient hybrid least squares/gradient descent (LSGD) method for MIONets to accelerate training. This method generalizes the LSGD method for DeepONets. Since MIONet is the sum of the entrywise product of multiple branch networks and a trunk network, it can be viewed as a multilinear function with respect to the last layer parameters of each branch network. These sets of parameters can be optimized using the alternating least squares method, where we solve the LS system for a single branch network in turn. To handle the large-sized system matrix, we introduce Kronecker and Khatri-Rao products and tensor permutation matrices to factor the large matrix into small ones. Our method is compatible with a general type of $L^2$ loss with regularization terms for the last layer parameters of each branch, where linear operators can be applied to the MIONet output in each loss term.
