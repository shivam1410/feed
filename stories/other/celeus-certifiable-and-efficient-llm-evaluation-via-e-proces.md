---
title: "CELEUS: Certifiable and Efficient LLM Evaluation via E-Processes"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20820"
authors: ["Zhijian Zhou, Zesheng Ye, Zhaorun Chen, Bo Li, Feng Liu"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20820v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20820v1 Announce Type: new Abstract: Can we trust evaluation scores to capture an LLM's true real-world performance? Certifiable evaluation answers this question by providing guarantee for LLM evaluation. In particular, existing methods sequentially curate evaluation samples and keep updating confidence intervals (CIs) that cover the true performance with high probability (e.g., 95%) until some conditions are satisfied, e.g., the CI width reaches a target precision. However, existing methods are not generally anytime-valid: the claimed coverage (e.g., 95%) may fail when CIs are repeatedly updated and used to decide when to stop, leaving a gap between theoretical rigor and practice. This paper bridges this gap by proposing Celeus, a Certifiable framework for Efficient LLM evaluation, which leverages E-processes to build anytime-valid CIs. Concretely, we propose signals that combine two ingredients: (i) Uncertainty-guided sampling to select informative samples for evaluation, and (ii) Surrogate-assisted approximations for unevaluated samples. We prove that such signals remain unbiased for the evaluation score conditional on the past, enabling statistically-grounded and anytime-valid $e$-process CIs. More importantly, the two ingredients reduce estimation variance and help reach the target precision with fewer evaluated samples. We also prove that CIs obtained by Celeus can shrink at a near-parametric rate up to logarithmic factors and analyze the oracle variance-optimal sampling rule that motivates the empirical uncertainty-guided one. Experiments show that Celeus reaches the target precision using 54-62% fewer evaluated samples than baselines, while preserving anytime-valid coverage.
