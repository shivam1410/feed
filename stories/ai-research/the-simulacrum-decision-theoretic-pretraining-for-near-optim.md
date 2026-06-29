---
title: "The Simulacrum: Decision-Theoretic Pretraining for Near-Optimal Time-Series Forecasting and Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27711"
authors: ["Pablo Montero-Manso, Marcel Scharth"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.27711v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27711v1 Announce Type: new Abstract: We introduce a neural network-based framework for learning time series estimators through a process we term decision-theoretic pretraining. Analysts specify a generative world, a distribution over data-generating processes, and a target decision objective. A neural network trained on stratified simulations from this world approximates the corresponding optimal decision rule, yielding a neural estimator that provides forecasts, parameter estimates, predictive intervals, or model-selection for zero-shot inference on previously unseen time series. The joint specification of the generative world and objective enables the estimators to directly approximate process-level, finite-sample properties: near-optimal risk, bias control, minimax performance, and uniform calibration. Our experiments demonstrate that these neural estimators can outperform traditional baselines such as maximum likelihood estimation and model selection via AICc, for the same model structural model classes. Furthermore, even when trained purely on simulations of structural models, they achieve competitive or state-of-the-art forecasting accuracy on major real-world benchmarks, compared with statistical, neural or large pre-trained models. We illustrate the framework by addressing two longstanding challenges: finite-sample bias and miscalibration in AR(p) models, and the forecast combination puzzle. These applications highlight the approach's main advantage: its ability to approximate solutions to analytically intractable or computationally prohibitive time series problems, including complex structural equations or optimality criteria. Ultimately, by enabling explicit control over decision-theoretic trade-offs, the framework equips analysts with highly efficient estimation tools tailored to their specific analytical needs.
