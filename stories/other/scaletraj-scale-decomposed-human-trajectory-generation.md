---
title: "ScaleTraj: Scale-Decomposed Human Trajectory Generation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.04097"
authors: ["Yulin Zeng, Yiheng Zhao, Jun Yan, Yuhong Liu"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.04097v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Individual-level trajectories are essential for applications that rely on user-level mobility behavior. Existing mobility-generation approaches face a fundamental tension between individual-level and population-level statistical fidelity: top-down models reproduce aggregate mobility statistics but struggle to guarantee realistic individual trajectories, while bottom-up generators synthesize individual trajectories yet often fail to preserve key population-level mobility regularities after aggregation. In particular, many bottom-up generated populations fail to reproduce the displacement distribution, whose heavy tail is well summarized by a truncated power law. We formalize this phenomenon as the \textbf{Population-Level Displacement Gap}. To investigate its prevalence, we conduct a systematic evaluation of representative model-driven and data-driven trajectory generators. Our results provide evidence that the Population-Level Displacement Gap is prevalent across diverse generation paradigms. To diagnose this gap, we introduce the \textbf{Scale Fidelity Profile (SFP)}, a scale-decomposed metric that quantifies discrepancies in trip allocations across spatial scales. SFP indicates that population-level displacement mismatches co-occur with systematic errors in how trips are allocated across spatial scales. Motivated by this observation, we develop \textbf{ScaleTraj}, an autoregressive Transformer that decomposes location prediction into a Scale Selection Head that decides the movement scale and a Scale-Aware Cell Selection Head that predicts the destination conditioned on the selected scale. Experiments on two datasets show that ScaleTraj reduces the Population-Level Displacement Gap versus model-driven and data-driven baselines, while preserving fidelity. Our code is available at https://github.com/SCU-TrustworthyAI/ScaleTraj.
