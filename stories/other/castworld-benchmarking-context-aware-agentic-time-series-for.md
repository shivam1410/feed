---
title: "CastWorld: Benchmarking Context-Aware Agentic Time Series Forecasting Beyond Predictive Accuracy"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15262"
authors: ["Bokai Pan, Ruijie Yang, Mingyue Cheng, Jiahao Wang, Xiaoyu Tao"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15262v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Agentic time series forecasting extends conventional approaches beyond one-shot numerical prediction toward autonomous, context-aware interaction. However, existing benchmarks offer limited integrated support for diverse contextual information, forecasting-specific adaptive interactions, and systematic evaluation of forecasting agents. In this paper, we introduce CastWorld, an agentic benchmark for context-aware time series forecasting. First, its context-rich dataset suite spans 8 domains and 25 real-world datasets, covering external variables, events, and historical cases under a unified context specification. Second, a lightweight, modular forecasting-native harness provides 49 core tools and a state-adaptive loop that tracks forecast versions and enables iterative evidence gathering and forecast revision. Intermediate forecasts can expose information gaps, while newly acquired evidence guides subsequent revisions and final version selection. Third, model-level evaluation assesses forecast quality, process execution, behavioral trustworthiness, and resource efficiency through decision trajectories and forecast-version histories. Also, systems-level evaluation compares predictive accuracy across forecasting systems. Experiments reveal distinct decision behaviors among agents with comparable accuracy. Additional interactions do not necessarily improve forecasts, and agents may fail to select their best previously generated predictions. Allowing evidence acquisition during forecast refinement improves task-aware forecast scores across all three evaluated models. CastWorld provides a reusable foundation for evaluating agentic time series forecasting under controlled conditions.
