---
title: "Transformers as Bayesian In-Context Experimenters: Smoothness-Adaptive Efficient ATE Estimation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31184"
authors: ["Jiachun Li, David Simchi-Levi"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.31184v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31184v1 Announce Type: new Abstract: Adaptive experiments for average treatment effects (ATE) require randomized allocations balancing valid inference with statistical efficiency. The oracle design is a covariate-dependent Neyman rule governed by unknown arm-conditional outcome variances. We investigate whether this sequential variance-estimation and allocation process can be amortized via in-context learning. We introduce Bayesian in-context experimenters: transformer policies trained to imitate a Bayesian posterior Neyman teacher. The teacher updates nonparametric beliefs over potential outcomes using experimental history to assign posterior Neyman treatment probabilities. This design converges to the oracle rule, supporting efficient ATE inference. Transformers constructively implement this mapping through attention-based sufficient statistics and projected gradient descent, imitating Bayesian updating for Gaussian-series priors. To address unknown outcome smoothness, we combine smoothness-indexed experimenters using a mixture-of-experts transformer. The gate acts as a hierarchical posterior over smoothness classes, concentrating on near-oracle experts. By bounding the complexity of the transformer class, we prove this amortized policy can be learned via empirical risk minimization using supervised pretraining. Experiments confirm accurate teacher imitation, adaptive allocation, and improved ATE precision over baselines.
