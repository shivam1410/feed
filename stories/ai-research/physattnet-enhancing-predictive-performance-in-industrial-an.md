---
title: "PhysAttNet: Enhancing Predictive Performance in Industrial and Astrophysical Time Series via Physics-Informed Attention"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07681"
authors: ["Amal Saadallah, Julia Tjus, Petra Wiederkeher, Wolfgang Rhode"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.07681v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07681v1 Announce Type: new Abstract: Accurate and robust time series forecasting is essential in many applications involving physical processes, such as manufacturing monitoring and astrophysical event detection. In these settings, predictive models must remain reliable under noise, variability, and measurement uncertainty while capturing temporally localized structures corresponding to physically meaningful events. Convolutional neural networks (CNNs) are widely used for such tasks due to their computational efficiency and strong representational capacity. However, their learned temporal representations often exhibit unstable or physically inconsistent attention patterns, reducing robustness, generalization, and interpretability. This paper introduces PhysAttNet, a physics-informed attention framework for time series forecasting. PhysAttNet augments a lightweight CNN forecaster with an attention head guided by domain-informed regularization reflecting the structural properties of physical signals. Specifically, three complementary constraints are imposed during training: an alignment regularization that encourages attention to follow smooth, peak-centered temporal structures derived from the input signal, a smoothness regularization that enforces continuous temporal evolution, and a sparsity regularization that promotes selective focus on informative intervals. These differentiable regularization terms introduce physics-guided inductive bias without requiring annotated explanations or manual supervision. Experiments on two distinct applications, namely predicting cutting forces during milling and forecasting flares in blazar time series, demonstrate that PhysAttNet improves forecasting accuracy, generalization, and prediction performance on structurally important events.
