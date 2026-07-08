---
title: "Heckman-Corrected Epistemic Uncertainty: Selection on Unobservables Defeats Importance Weighting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05806"
authors: ["Gunner Levi Howe"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2607.05806v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05806v1 Announce Type: new Abstract: Training data for machine learning is routinely collected by a selection process the model never sees: loans are observed only when granted, outcomes only when a test was ordered. The standard fixes -- importance weighting, covariate-shift correction, MAR imputation -- assume selection is ignorable given observables. Econometrics solved the harder case in 1979: Heckman's two-equation model jointly fits a probit selection equation and an outcome equation linked through correlated errors, and the inverse-Mills-ratio term corrects for selection on unobservables, where importance weighting is structurally helpless. We instantiate this for deep epistemic uncertainty: a deep outcome network, a linear selection head, and a joint bivariate-normal likelihood over all units, ensembled for predictive variance. In a controlled generator where sampling probability depends on an unobservable correlated (rho up to 0.9) with the outcome noise, deep ensembles, MC dropout, and GP baselines are overconfident exactly where data was avoided: coverage of nominal-90% intervals falls to 64.4% at rho=0.9, and importance weighting with oracle propensities does not fix it (43.1%) -- reweighting corrects the covariate distribution, not the conditional bias E[y|x,selected] != E[y|x]. The Heckman correction restores coverage (88.9%) when the selection equation has an instrument -- a variable affecting selection but not the outcome -- and degrades measurably without one (40.3%); we chart this honesty curve rather than hide it. On real tabular data with induced MNAR selection, the corrected intervals are the best-calibrated (lowest region-ECE) non-oracle method in selected-against regions; baselines matching its raw coverage do so only by over-widening everywhere. Our estimators reproduce classic Stata output to seven digits. We state which identification regime a practitioner is in, and release the code.
