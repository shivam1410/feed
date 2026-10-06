---
title: "SEER: Self-Evolving Event Reasoning and Retrieval for Time Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.04109"
authors: ["Mingtian Tan, Palash Goyal, Mihir Parmar, Sarkar Snigdha Sarathi Das, Chun-Liang Li, Nanyun Peng, Thomas Hartvigsen, Jinsung Yoon, Tomas Pfister"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.04109v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Real-world time series are frequently driven by exogenous events and structural shifts, rendering conventional forecasting based solely on historical numerical observations insufficient. While language models can retrieve external news, standard retrieval-augmented approaches struggle with high noise, missing signals, and an inability to reason causally about event impacts. We propose SEER (Self-Evolving Event Reasoning and Retrieval), a closed-loop framework that dynamically optimizes event conditioning for time series forecasting. SEER translates prediction errors into two decoupled feedback mechanisms: (i) a reflective retrieval memory that refines subsequent search queries and filters spurious noise, and (ii) a persistent causal knowledge base that distills transferable domain dynamics. SEER enforces strict chronological boundaries across both event retrieval and reflection, preventing look-ahead bias and data leakage. Across six volatile time-series benchmarks, SEER consistently outperforms state-of-the-art time series foundation models and language model baselines.
