---
title: "Learning Non-Gaussian SEMs with Conditional Risk, and Why the Direction of Recursion Matters"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14246"
authors: ["Ujas Shah, Panagiota Birmpa, Rebecca Morrison"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14246v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Variance-based methods recover a Gaussian linear structural equation model (SEM) with equal or suitably constrained error variances, either by recursively identifying the source nodes with smallest conditional variance (top-down method) or sink nodes with highest conditional variance (bottom-up method). We show that the use of conditional variance is incidental: replacing it with the conditional risk, i.e., the minimal expected loss of linear prediction under the negative log-likelihood of the noise distribution, extends both methods to non-Gaussian noise. Existing methods are the least-squares special case. This yields two main results. First, exploiting the noise distribution improves structure recovery: the matched-loss procedures recover the SEM more accurately than their least-squares counterparts and the LiNGAM methods, which are designed for non-Gaussianity. Second, the two methods, interchangeable in the Gaussian setting, separate under non-Gaussian noise: the top-down method is correct for every noise density with finite differential entropy, whereas the bottom-up method requires a regularity condition and can fail without it, for instance under mean-zero exponential or Cauchy noise. Simulations confirm both results.
