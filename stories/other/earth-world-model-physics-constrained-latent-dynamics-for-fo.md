---
title: "Earth World Model: Physics-constrained latent dynamics for forecasting and environmental scenario analysis"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18654"
authors: ["Huijun Qiao, Ziqiang Zhang, Jinnong Liao"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18654v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

World models have been widely applied to multi-agent planning and forecasting, but exogenous environmental changes are rarely incorporated as replaceable drivers in a unified state-evolution process. This limits assessment of whether environmental perturbations propagate through physical systems with faithful dynamics. We propose the Earth World Model (EWM), an Earth-centred forecasting framework that compresses heterogeneous multi-source observations into a reusable low-dimensional latent state representing the system's history and current condition. Given explicit exogenous drivers, a shared transition operator recursively updates the latent state, and physics-constrained decoding produces multi-step forecasts. Replacing the drivers enables environmental scenario analysis and evaluation of dynamic-response fidelity. We evaluated EWM for power forecasting and environmental-perturbation response at six photovoltaic sites and one wind-power site. Across four photovoltaic sites and three forecast horizons, three independent training runs yielded mean $R^2$ values of 0.8578-0.9095. In a separate six-site decoder ablation, the mean net per-unit response $\rho$ under the prescribed irradiance intervention increased from 0.180 with a multilayer perceptron decoder to 0.922 with an analytic physical decoder, close to site- and horizon-specific analytic references. The wind model achieved an injection elasticity of $0.9990 \pm 0.0006$, while pre-intervention outputs remained unchanged. These results show that forecast fit and intervention response should be evaluated separately and that the tested EWM configurations preserved response amplitude and temporal boundaries under the prescribed interventions.
