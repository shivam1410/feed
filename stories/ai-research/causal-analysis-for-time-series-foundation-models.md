---
title: "Causal Analysis for Time Series Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24303"
authors: ["Mathis Jander, Wouter van Heeswijk, Martijn Mes"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2608.24303v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24303v1 Announce Type: new Abstract: Transitioning from bespoke time series models towards time series foundation models changes the relationship of model and application from one-to-one to one-to-many. This shift introduces concentration risk as many, potentially high-risk, forecasting applications are exposed to the same biases and failure modes of a single time series foundation model. At the same time, this centralization allows for economies of scale in model development and validation. In this study we investigate how biases and failure modes of time series foundation models can be identified before deployment. We propose a causal analysis framework to investigate the ability of a time series foundation model to preserve time series patterns. To achieve this, we intervene on parameterized synthetic time series generators and measure the corresponding change in model output under ceteris paribus conditions. We apply our causal analysis framework to Chronos-2 and TimesFM-2.5 and test them across six distinct time series patterns. We find safe configurations for trend and harmonic oscillation patterns. The results also indicate a bias in both models towards overestimating persistence, sudden failures for both models against the regime switch pattern and failure for TimesFM-2.5 against the energy-release pattern. Our review of the original works for both models indicates that the findings might be explained by the data used for pretraining. We conclude our study with suggestions for further model development, recommendations for application-specific model selection, and a discussion of limitations and further research directions.
