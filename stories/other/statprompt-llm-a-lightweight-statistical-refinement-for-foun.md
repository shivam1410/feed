---
title: "StatPrompt-LLM: A Lightweight Statistical Refinement for Foundation-Style Time-Series Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.12974"
authors: ["Aniket Sinha, Veronica W. Tsou"]
date: "Wed, 11 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.12974v1"
image: ""
generated: "2026-11-11T19:00:38+05:30"
---

Time-series forecasting has recently seen a paradigm shift with the introduction of foundation-style models that adapt large pretrained language architectures to sequential data. However, effectively exposing fundamental temporal structures, such as trend, scale, and temporal dependence, to these models remains an open challenge, particularly when the available observations are limited. In this paper, we conduct an exploratory empirical study across different generations of forecasting architectures and propose StatPrompt-LLM, a lightweight statistical refinement of Time-LLM. StatPrompt-LLM augments the existing Time-LLM prompting mechanism with dataset-level statistical information and introduces a zero-initialised autoregressive bypass as a complementary linear forecasting pathway. We evaluate our framework on electricity and meteorological time-series benchmarks, including ETTh1, ETTh2, and Weather, under full-prefix and reduced-prefix configurations. Under the 10% reduced-prefix configuration, StatPrompt-LLM achieved lower in-sample prediction errors than Time-LLM, with unweighted average relative reductions across datasets of 40.2% in MSE and 21.4% in MAE. Full-prefix results were more dataset-dependent. Ablation analyses revealed relatively modest and dataset-dependent changes when selected additional statistical descriptor groups were masked within the combined architecture. Computational profiling indicated additional model parameters and runtime overhead relative to Time-LLM.
