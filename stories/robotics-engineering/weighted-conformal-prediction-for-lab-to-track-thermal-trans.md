---
title: "Weighted Conformal Prediction for Lab-to-Track Thermal Transfer in EV Motorsport Powertrains"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02722"
authors: ["Varshith Roy Kotla"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.02722v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02722v1 Announce Type: new Abstract: Predicting thermal volatility in high-performance EV powertrains is difficult as internal temperatures are rarely observable outside the lab, and models calibrated on lab drive cycles fail when deployed against real-world loads. We study this lab-to-track transfer problem using conformal prediction, offering distribution-free uncertainty bounds. We implement Ensemble Batch Prediction Intervals (EnbPI; Xu & Xie, 2021), a leave-one-out bootstrap-ensemble conformal method for autocorrelated time series, and calibrate it on real CALCE lithium-ion cycler data (A123 SP20 cells, FUDS profile). We evaluate it under a genuine, measured covariate shift: a second real CALCE test condition (US06 Highway Driving Schedule at 45{\deg}C). The unweighted EnbPI bound, achieving its nominal 95% coverage in-distribution (measured: 95.00%), degrades to 70.13% empirical coverage under this real shift. We introduce a weighted EnbPI procedure combining EnbPI's ensemble residuals with density-ratio weighting (Tibshirani et al., 2019), estimating the density ratio via a probabilistic domain classifier. This recovers coverage to 72.42%, a modest, honestly-reported improvement, not a complete fix. We additionally apply the calibrated model to real 2023 Formula 1 telemetry (Monza and Silverstone, driver VER) as an unsupervised out-of-distribution diagnostic. Because no internal thermal channel exists in public trackside telemetry, we report only unsupervised flag rates (65.6% at Monza, 58.0% at Silverstone, well above the 5% in-distribution base rate) and note inconsistent associations between flags and braking/DRS zones. We conclude that conformal domain adaptation is a promising but only partially solved tool for this problem, detailing exactly where it falls short.
