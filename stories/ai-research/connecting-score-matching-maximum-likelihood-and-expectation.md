---
title: "Connecting Score Matching, Maximum Likelihood, and Expectation-Maximization in Mixed Linear Regression"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05688"
authors: ["Zhankun Luo, Abolfazl Hashemi"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.05688v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05688v1 Announce Type: new Abstract: We study variance-preserving diffusion of the response in mixed linear regression (MLR) with unknown mixing weights. Our analysis separates the statistical guarantees of score matching from the loss geometry and optimization signal at a fixed diffusion noise level. The KL divergence links the denoising score matching objective integrated over the diffusion path with the likelihood and a terminal discrepancy. Under mild regularity conditions and terminal schedule, the resulting estimator converges up to the ground truth parameters of MLR, and its scaled error converges to the Gaussian limit of the maximum-likelihood estimator. At a fixed scale of the diffusion noise level, we derive a decomposition linking the score matching loss to cross-entropy and Expectation-Maximization (EM) operators. This decomposition yields an EM-related low-noise gradient expansion with additional correction terms of latent variance. In the high-noise limit, we further characterize gradient descent on this limiting loss under isotropic covariance. Along fixed high signal-to-noise ratio rays, the score matching imbalance gradient and the latent-variance term tend to zero pointwise. Numerical experiments illustrate our theoretical findings and statistical guarantees.
