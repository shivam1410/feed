---
title: "Reconstructing Boundary Layer Wind Profiles with Machine Learning: A Comparative Study on IGRA Radiosonde Data"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.13359"
authors: ["Fedor Buzaev (HSE University), Dmitry Efremenko (HSE University), Daria Pugacheva (HSE University, Generalizable AI Systems), Fedor Ratnikov (HSE University), Egor Bugaev (HSE University), Vladimir Gordin (HSE University, MIRAI), Denis Derkach (HSE University)"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.13359v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Wind profiles in the atmospheric boundary layer (ABL) drive short-range forecasting and wind-energy siting, yet sparse radiosonde coverage forces practitioners to interpolate them from a handful of physical predictors. We benchmark modern tabular learners against analytical parameterizations on 158,097 IGRA soundings. CatBoost, TabM, and FT-Transformer reduce RMSE to 1.3-1.6 m/s, against approximately 3 m/s for power-law and Monin-Obukhov fits; once the predictor set is fixed the three architectures differ by less than 0.05 m/s, so accuracy is driven by predictors rather than architecture. A cohort analysis of within-bin profile dispersion places an empirical floor of approximately 1.77 m/s on any point-wise predictor that uses standard radiosonde features, consistent with prior eddy-viscosity inversions. A one-dimensional Fourier Neural Operator applied as a post-hoc corrector to frozen tabular predictions reduces near-surface RMSE on U.S. stations from 1.5 to 1.2 m/s, while leaving upper-layer error unchanged. Further gains should come from new predictors rather than larger models.
