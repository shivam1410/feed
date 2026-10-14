---
title: "Generalized PINN-Based Inverse Estimation of Spatially Varying Heat Transfer Coefficients with Transfer Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14008"
authors: ["Pradipan Maitra, Jariful Hassan, Arijit Hazra"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14008v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

This study investigates generalized boundary representations and transfer learning for physics-informed neural-network (PINN) estimation of spatially varying convective heat transfer coefficients (HTCs) in jet impingement cooling. Piecewise-linear (PWL) and neural-network boundary estimators are inferred from transient interior-temperature measurements and evaluated against CFD-CHT reference HTC profiles at Reynolds numbers of 5000, 10000 and 15000. A discrete Adjoint-FEM formulation with gradient regularization based on the $H^1$-seminorm provides an independent inverse-method comparison. Transfer learning is investigated under two source-target conditions: transfer between noise levels at the same Reynolds number, and transfer from a controlled Gaussian-profile problem to CFD-CHT-derived target problems at different Reynolds numbers. For the representative Re = 5000 target with 5% measurement noise, quadratic, PWL, and neural-network PINNs achieve relative HTC-profile errors of 5.08, 5.31 and 5.19%, respectively, while generalized representations reduce the error for the Re = 15000 target from 16.76% for the quadratic PINN to 14.41% and 14.46%. Transfer learning reduces target-training time by 57.86-81.71% for fixed-Reynolds-number transfer and by 50.59-84.94% for Gaussian-to-CHT transfer. Its effect on reconstruction accuracy is target dependent: fixed-profile PWL transfer remains within 0.30 percentage points of scratch training, whereas Gaussian-to-CHT transfer produces differences of 0.10-1.52 percentage points across targets and representations. These results demonstrate that generalized PINN representations can accommodate spatially varying HTC profiles without a prescribed quadratic form, while transfer learning can substantially reduce target-training cost for repeated inverse estimation, with the resulting reconstruction accuracy depending on source-target compatibility.
