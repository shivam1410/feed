---
title: "Implicit Variational Rejection Sampling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14235"
authors: ["Jian Xu, Shigui Li, Wei Chen, Jiacheng Li, Zhiqi Lin, Delu Zeng, Xinghao Ding, John Paisley, Qibin Zhao"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2606.14235v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14235v1 Announce Type: new Abstract: Variational Inference (VI) is a fundamental inference technique in Bayesian machine learning for approximating complex posterior distributions. Traditional VI often relies on the mean-field factorization, which can inadequately capture true posterior complexity. Recent advancements have leveraged neural networks to model implicit distributions, offering increased flexibility. However, the practical constraints of neural network architectures still produces inaccuracies. In this paper, we propose a method called Implicit Variational Rejection Sampling (IVRS), which integrates implicit distributions with rejection sampling to improve the posterior approximation. Our method uses neural networks to construct implicit proposal distributions, and rejection sampling with a discriminator network that estimates the density ratio between the implicit proposal and the true posterior for refining the approximation. Towards this end, we introduce the Implicit Resampling Evidence Lower Bound (IR-ELBO) as a metric to characterize the resampled distribution's quality and derive a tighter variational lower bound. Experimental results demonstrate that our method outperforms traditional variational inference techniques.
