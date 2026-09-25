---
title: "Generative Atmospheric Super-Resolution from Heterogeneous In Situ Observations through Composable Interfaces"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.29027"
authors: ["Yang Xu, Dibyajyoti Chakraborty, Haiwen Guan, Sen Wang, Romit Maulik"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 76
guid: "oai:arXiv.org:2609.29027v1"
image: ""
generated: "2026-09-25T23:24:50+05:30"
---

Atmospheric observations are sparse, heterogeneous, and unevenly distributed, whereas many generative atmospheric models learn distributions over regularly gridded multivariate states. Once pretrained, diffusion models can supply atmospheric priors that can be combined with observation-derived likelihood factors in a Bayesian formulation. However, these observation sources differ substantially in geometry and sampling density, complicating the consistent use of their observations within a common inference framework. Here, we formulate this reconstruction problem as generative atmospheric super-resolution and introduce composable observation interfaces for conditioning a single pretrained 13-variable atmospheric diffusion model. The interfaces convert sparse radiosonde (R), clustered aircraft (A), and dense irregular surface-station (S) observations into source-specific likelihood factors that specify where observations constrain the gridded state, how residuals are counted under uneven sampling, and how strongly each source guides posterior sampling. We developed the aircraft and surface observation interfaces using 2019 observations and evaluated the selected interfaces throughout 2020 without further tuning. Compared with reconstructions conditioned only on radiosonde observations, the composed R+A+S interface reduces RMSE evaluated against ERA5 by $9.24\%$ across all 13 state variables over the CONUS domain. The aircraft and surface factors provide complementary improvements in upper-air and surface variables. The R+A+S combination also lowers the Continuous Ranked Probability Score (CRPS), while evaluations at held-out aircraft and surface-station observations show reduced prediction errors. Together, these results demonstrate a modular route for conditioning a pretrained atmospheric generative prior on heterogeneous in situ observations without retraining the underlying model.
