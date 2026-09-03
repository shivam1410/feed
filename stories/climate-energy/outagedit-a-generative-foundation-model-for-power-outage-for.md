---
title: "OutageDiT: A Generative Foundation Model for Power Outage Forecasting and Scenario Simulation"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01896"
authors: ["Yunqin Zhu, Feng Qiu, Yao Xie"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2609.01896v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01896v1 Announce Type: new Abstract: Power-outage planning requires scenarios before an event occurs. These scenarios must represent uncertainty in magnitude, timing, and duration while preserving temporal dependence. However, severe events are rare, and data from any single region contain few examples of extreme outage and restoration patterns. To address this challenge, we introduce OutageDiT, a foundation model for generating seven-day outage trajectories at quarter-hour resolution, trained on outage and weather records across the United States. Specifically, a condition encoder processes the historical context and known future covariates once per forecast, and a shallow flow decoder reuses the resulting horizon-aligned states to generate complete trajectories. The resulting samples support point forecasting, uncertainty quantification, and conditional event simulation within one deep generative model. Across outage forecasting benchmarks, OutageDiT improves forecast accuracy and scenario quality over strong baselines and supports zero-shot transfer to held-out regions. Together, these results position conditional outage simulation as a bridge from outage forecasting to operational planning under uncertainty.
