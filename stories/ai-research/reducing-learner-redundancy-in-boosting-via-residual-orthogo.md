---
title: "Reducing Learner Redundancy in Boosting via Residual Orthogonalization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17567"
authors: ["Ye Su, Jipeng Guo, Yong Liu, Xin Xu, Gangchun Zhang, Jinxin Chen, Di Wu, Longlong Zhao"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.17567v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17567v1 Announce Type: new Abstract: While sequential residual fitting is the bedrock of standard boosting frameworks, it inherently breeds learner redundancy by repeatedly revisiting correlated error components. To address this bottleneck, we propose a shift from residual fitting to \textit{residual orthogonalization} and introduce SCBoost. Our framework tackles redundancy through two complementary mechanisms: Spectral Residual Projection (SRP) and Covariance-Regularized Weighting (CRW). During training, SRP projects each residual target onto the orthogonal complement of the historical prediction subspace, forcing successive learners to capture only novel empirical innovations. During aggregation, CRW optimizes ensemble weights on a validation set with an explicit covariance penalty to mitigate remaining correlations. Theoretically, we provide a finite-sample geometric characterization proving that SRP yields an exact additive residual-energy decomposition. Furthermore, under an isotropic-noise assumption, we rigorously establish the conditions under which this projection improves the effective Signal-to-Noise Ratio. Extensive experiments across ten benchmark datasets demonstrate that SCBoost delivers strong out-of-the-box performance, particularly in accuracy and F1 score. This work reinterprets boosting through a geometric lens, suggesting that explicit redundancy control is a principled and necessary step toward more efficient ensemble architectures.
