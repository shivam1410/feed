---
title: "Uncertainty-Aware Trust Estimation for Multi-LLM Systems via Structured Expert Judgement"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20529"
authors: ["Jiawei Zheng, Jiazhen Zhang"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2607.20529v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20529v1 Announce Type: new Abstract: Large Language Model (LLM) ensembles are increasingly used to improve reliability by combining predictions from multiple LLMs. However, existing aggregation methods typically assume that all models are equally trustworthy, overlooking differences in uncertainty quality. This assumption is poorly suited to heterogeneous LLMs, whose reliability and capability vary significantly, making naive aggregation vulnerable to unreliable or adversarial experts. In this work, we formulate multi-LLM aggregation as a problem of uncertainty-aware trust estimation. We adapt structured expert judgment from decision theory, using context-aware calibration questions to estimate expert reliability based on the quality of its probabilistic predictions. Specifically, we employ Cooke-style log weighting, which penalises overconfident incorrect predictions and favours well-calibrated experts. We evaluate our approach on MMLU and MMLU-Pro across homogeneous, heterogeneous, and contaminated expert panels. Results show that while aggregation methods perform similarly in homogeneous settings, Cooke weighting becomes critical under heterogeneity and contamination. It achieves a superior accuracy-reliability balance and remains robust when unreliable experts are introduced. These findings suggest that Multi-LLM aggregation requires not just combining predictions, but calibrating trust under uncertainty.
