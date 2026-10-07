---
title: "Sample-Optimal Estimation of the Fr\\'echet Inception Distance"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07114"
authors: ["Ziyun Chen, Jerry Li, Kevin Tian, Yusong Zhu"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.07114v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

The Fr\'echet Inception Distance (FID) is widely used to evaluate generative models, but its empirical plug-in estimator suffers from finite-sample bias [BSAG18, CF20]. We study the sample complexity $n$ of estimating FID to error $\epsilon$ between $d$-dimensional Gaussians with bounded mean distance and covariances, when one distribution is known. Our contributions are threefold. (1) We establish tight finite-sample $\Theta(\frac{d^2}{n})$ bias and $\Theta(\frac{d}{n} + \frac {d^2} {n^2})$ variance bounds for the empirical plug-in estimator, establishing a $\gtrsim d^2$ sample complexity. (2) To debias the empirical plug-in estimator, we generalize the ${\rm FID}_\infty$ estimator of [CF20] to extrapolation methods of arbitrary order $k$. We further prove tight bias and variance bounds of $\Theta(\frac{d^{k + 2}}{n^{k + 1}})$ and $\Theta(\frac d n + \frac{d^2}{n^2})$ for any order-$k$ extrapolation under our framework. (3) We introduce Relative Taylor Debiasing (RTD), a new, computationally efficient FID estimation algorithm using debiasing techniques inspired by U-statistics. We show that RTD achieves an $O(\frac d {\epsilon^2})$ sample complexity, and prove that this is optimal. We provide a complementary empirical evaluation of our new estimators. Our experiments on synthetic Gaussians validate the predicted residual bias and support the tightness of our bounds. On ImageNet with Inception embeddings, RTD achieves the lowest mean estimation error at the standard 50K sample budget, while our second-order variance-aware extrapolation estimator (VALE$_2$) uses only 10K samples to achieve accuracy comparable to FID$_\infty$ at 50K samples.
