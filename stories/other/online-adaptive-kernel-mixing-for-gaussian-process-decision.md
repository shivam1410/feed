---
title: "Online Adaptive Kernel Mixing for Gaussian Process Decision Making"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19891"
authors: ["Kavin Aravindan, Mani Tej Sriram, Gautam Dasarathy, Tejas Bodas"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19891v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19891v1 Announce Type: new Abstract: Gaussian Processes (GPs) are widely used as surrogates for black-box functions in sequential decision-making problems such as Bayesian optimization (BO), level set estimation (LSE), and Bayesian active learning (BAL). GP performance critically depends on kernels, and standard kernels can lead to suboptimal decisions under misspecification. To address this, we introduce HACK GPs (Hedge Adaptive Cumulative Kernels), a method that views kernel selection as an online learning with expert advice problem. HACK treats each candidate kernel as a GP "expert" and updates a distribution over experts online using AdaHedge, based on a loss received as a proxy for their ability to fit the function and align with the task objective. We provide two variants of HACK: (i) Mixture of Gaussians (MoG) and (ii) categorical sampling. We establish general guarantees showing that, under a loss-gap condition, the weight concentrates on the best kernel and the resulting acquisition function is close to that of the best expert. Empirically, we observe robust performance across BO, LSE, and BAL compared to standard kernels such as Squared Exponential and Matern-5/2, as well as simple ensemble baselines.
