---
title: "Mechanisms of Width Scaling in Normalized Residual Networks: The Effective Alignment Dimension"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.24887"
authors: ["Jinhao Zhang, Zeyu Liu, Zicheng Yan, Yunquan Zhang, Guangming Tan, Fangming Liu, Daning Cheng"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.24887v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.24887v1 Announce Type: new Abstract: Existing theories of neural-network width characterize asymptotic limits, but provide limited guidance on whether an expansion direction identified from finite training data remains beneficial on unseen data. We study this problem for function-preserving residual expansion and introduce the effective alignment dimension, a measurable quantity describing the signal-noise geometry of activation gradients. By deriving the exact mean and variance of the inner product between independently estimated training and test gradients, we obtain a finite-sample upper bound on misalignment probability. The bound depends only on the effective alignment dimension and an effective sample size, requiring finite second moments and a nonzero population gradient, without covariance spectral assumptions or prescribed width-growth rates. We integrate this certificate into the train-test residual-expansion framework, yielding a high-probability condition for test-risk improvement. Experiments across width-controlled LLaMA-style Transformers, Pythia, and ResNet-20 show that wider models exhibit larger effective alignment dimensions and lower empirical misalignment. Direct residual interventions confirm that the alignment statistic predicts the sign and magnitude of held-out loss changes.
