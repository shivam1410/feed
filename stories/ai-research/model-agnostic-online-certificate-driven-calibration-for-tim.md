---
title: "Model-Agnostic Online Certificate-Driven Calibration for Time Series Forecasting Under Distribution Shift"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31960"
authors: ["Chenfeng Huang, Zixuan Ma, George Michailidis"]
date: "Tue, 29 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.31960v1"
image: ""
generated: "2026-09-29T19:09:35+05:30"
---

Time series out-of-distribution generalization requires forecasters to remain reliable when deployment dynamics differ from training conditions due to covariate shift, concept shift, and temporal dependence. Probably Approximately Correct Bayesian domain adaptation provides computable certificates by decomposing target risk into a source risk term, a source-to-target mismatch term, and a complexity term, but standard analyses rely on independent sampling and distributional stability, assumptions that are violated in time series by serial dependence and nonstationary shift. We propose a model-agnostic online martingale Probably Approximately Correct Bayesian framework that yields finite-sample certificates under temporal dependence and distribution shift. The certificate replaces independent-sample concentration with martingale concentration that adapts to loss scale and predictable variation. We use the certificate as a surrogate regularizer for online calibration by training a gated residual Bayesian head on top of a fixed forecasting backbone, producing a corrective update that reverts to the backbone prediction when the gate is closed. Online calibration combines a source risk anchor, a posterior-shift penalty, and a time-adaptive mismatch term computed from target windows observed before forecasting. It follows a predict-then-update protocol in which outcomes become available only after forecasting and are used to update subsequent predictions. Experiments across convolutional, attention-based, and large language model-based forecasters show improved stability and accuracy under covariate and concept shift.
