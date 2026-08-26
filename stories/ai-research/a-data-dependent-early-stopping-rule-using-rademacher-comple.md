---
title: "A Data-dependent Early Stopping Rule using Rademacher Complexity with L1-norm"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24210"
authors: ["Duy Hoang, Bastien Berret, Olivier Bruneau, Laurent Fribourg"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.24210v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24210v1 Announce Type: new Abstract: Training neural networks requires balancing the trade-off between fitting the training data and achieving robust performance on unseen inputs. This ability, commonly referred to as generalizability, is determined by the gap between the empirical risk on the training set (``empirical loss'') and the expected risk over the data distribution (``generalization error''). Existing approaches typically estimate the generalization error numerically, requiring gradient descent training and an ``early stopping'' strategy. In this work, we introduce an analytic framework that estimates the optimal time of early stopping without the need for training. Several works in the literature also give such analytical estimations, but they are generally based on random matrix theory and often make assumptions on the distribution of the data or the eigenvalue distribution of the covariance matrix. In contrast, our work is based on Rademacher complexity (RC) without needing such probabilistic assumptions. For both theoretical and numerical reasons, it is more relevant to express RC with the L1- norm rather than with the L2-norm. We focus on the case of linear models and the problem of linear regression. Thanks to the ``linear probing'' method, our results can, however, be successfully applied to nonlinear neural networks, as illustrated in the classification MNIST example.
