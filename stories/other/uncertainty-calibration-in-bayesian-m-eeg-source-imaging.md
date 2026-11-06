---
title: "Uncertainty calibration in Bayesian M/EEG source imaging"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.06979"
authors: ["Ismail Huseynov, Mohammad Orabe, Srikantan Nagarajan, Stefan Haufe"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.06979v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

M/EEG source imaging requires accurate localization and reliable uncertainty estimates, yet posterior credible regions are rarely assessed for empirical calibration. We present a simulation-based framework for uncertainty quantification and calibration of empirical Bayesian inverse methods with closed-form conditional Gaussian posterior summaries. We compare Bayesian minimum norm (BMN) with sLORETA depth weighting and sparse Bayesian learning (SBL) with sparse basis field expansions (S-FLEX). S-FLEX allows retained coefficients to contribute nonzero marginal posterior variance at locations where voxel-wise SBL yields degenerate variances. For BMN, we derive joint source- and noise-variance updates through evidence maximization. We test whether adaptive noise learning yields near-calibrated uncertainties. Both methods retain residual miscalibration, motivating post-hoc isotonic recalibration of credible-region levels using empirical coverage. Simulations assess fixed- and free-orientation models across signal-to-noise ratios (SNR), source sparsity levels, and subject-specific head models, using oracle, baseline-estimated, and adaptively learned noise. Before recalibration, SBL+S-FLEX yields lower Wasserstein localization error, smaller posterior uncertainty, and coverage closer to nominal credibility than BMN+sLORETA. Isotonic recalibration improves both methods, with larger gains for conservative BMN+sLORETA posteriors; transfer across mismatched SNR, sparsity, and head models remains condition dependent. Noise specifications yield broadly consistent reconstruction and uncertainty trends within each estimator. In real auditory MEG data, SBL+S-FLEX provides more focal localization and tighter uncertainties than BMN+sLORETA, suggesting greater statistical power for identifying bilateral auditory sources.
