---
title: "A Framework for Task-Agnostic Counterfactual Fairness in Transformers through Activation Steering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00298"
authors: ["Joshua Wolff Anderson, Yanshan Wang, Shyam Visweswaran"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00298v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Bias in transformer-based models is a growing concern as these architectures become more prevalent in automated decision-making systems, such as prediction models for hiring, lending, and clinical treatment recommendation. Mechanistic interpretability (MI) is a growing body of work that measures meaningful causal effects of activations on model output by identifying human-interpretable features encoded in model activations. When such features correspond to sensitive attributes, they provide a direct way to quantify the bias those attributes introduce and to causally intervene to mitigate it. However, counterfactual fairness (CF) methods have not been systematically adapted to this setting of intervening on interpretable mechanisms in transformers. We propose a framework, Mechanistic Interpretability for Counterfactual Fairness (MICF), that utilizes MI tools to reformulate CF constraints in terms of transformer activations, unifying former approaches into a single pipeline for fairness analysis in transformers. MICF does not require a prior causal model or specific transformer architecture. We evaluate MICF on real-world tabular data and show that CF can be improved across different prediction tasks.
