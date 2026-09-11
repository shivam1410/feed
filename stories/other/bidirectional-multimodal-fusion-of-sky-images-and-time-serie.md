---
title: "Bidirectional Multimodal Fusion of Sky Images and Time-Series for Solar Forecasting with Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11135"
authors: ["Ken Chen, Maneesha Perera, Wei Wang, Sachith Seneviratne, Hansani Weeratunge, Saman Halgamuge"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11135v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.11135v1 Announce Type: new Abstract: Short-term photovoltaic (PV) power and global horizontal irradiance (GHI) forecasts are essential for effective dispatch, reserve scheduling, and grid operations. At these forecasting horizons, errors are predominantly driven by cloud induced ramps: relying solely on historical numerical data may struggle to anticipate an incoming cloud, making ground-based sky images a crucial complementary physical signal. Furthermore, forecast performance is highly sensitive to location and local observing conditions, creating a strong need for site-specific data that are often scarce. Recently, large language models (LLMs) have demonstrated competitive performance and high data efficiency in time-series forecasting. Despite their success, existing LLM-based forecasting methods remain predominantly unimodal, relying primarily on historical numerical time-series data. Effectively incorporating sky imagery into an LLM-based forecasting framework remains under-explored and an open challenge. In this paper, we propose SolCloudLLM, an LLM-based multimodal forecasting framework. SolCloudLLM aligns sky-image patches with time-series patches and fuses their corresponding representations through bidirectional multimodal fusion, yielding a unified representation that is subsequently mapped into the embedding space of an LLM. Extensive experiments on the SIRTA and SKIPP'D datasets demonstrate that SolCloudLLM consistently outperforms the best baseline methods in MSE across all forecasting horizons, achieving a maximum relative MSE reduction of 25.4%. Stratified analysis further indicates that the benefits of multimodal fusion are concentrated primarily under cloudy conditions. Notably, SolCloudLLM achieves the best performance in nearly all few-shot settings, whereas other deep learning baselines experience substantial performance degradation and are frequently outperformed by the non-learning physical method.
