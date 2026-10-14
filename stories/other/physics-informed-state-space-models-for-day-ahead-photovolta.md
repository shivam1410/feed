---
title: "Physics-Informed State Space Models for Day-Ahead Photovoltaic Power Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.14014"
authors: ["Phil Aupke, Muhammad Hassan, Khalid Ali,  Seema, Andreas Kassler, Andreas Theocharis"]
date: "Wed, 14 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.14014v1"
image: ""
generated: "2026-10-14T19:00:21+05:30"
---

Accurate day-ahead photovoltaic (PV) power forecasting requires both strong temporal modeling and adherence to physical PV system constraints. Purely data-driven models often ignore the underlying PV conversion process and may produce predictions that are outside the operational range of a PV system. In this paper, we propose a physics-informed state space framework that combines a differentiable PV conversion model with a selective state space backbone (PowerMamba). Our approach follows a physics-residual decomposition. The physics module provides a structured baseline based on solar geometry, irradiance, temperature effects, and inverter limits, while the state space model learns residual corrections from numerical weather prediction (NWP) inputs over a 24-hour horizon. Experiments on one year of utility-scale PV data show that the proposed method significantly improves forecasting accuracy, reducing RMSE by 38.5% and MAE by 45.8% compared to a physics-only baseline, and outperforming a purely data-driven model. Results further show that incorporating system-level physics provides the largest performance gains, while additional refinements offer only marginal improvements. Beyond accuracy, the model improves robustness by constraining predictions toward physical feasibility, reducing unrealistic predictions under corrupted measurements.
