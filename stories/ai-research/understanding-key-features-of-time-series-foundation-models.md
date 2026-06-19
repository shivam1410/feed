---
title: "Understanding Key Features of Time Series Foundation Models from Epidemic Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19560"
authors: ["Alireza Jafari, Judy Fox, Geoffrey C. Fox, Madhav Marathe, Aniruddha Adiga"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2606.19560v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19560v1 Announce Type: new Abstract: Seasonal influenza infects millions of people and causes substantial morbidity and mortality in the United States each year, making accurate short-term forecasting a core public-health need. Reliable forecasts of epidemic time series can inform vaccination timing, hospital staffing, and resource allocation, yet the comparative behavior of modern forecasting architectures on infectious-disease surveillance data remains insufficiently characterized. We address this gap through a systematic evaluation of regional influenza forecasting using influenza-like illness surveillance and influenza-associated hospitalization time series under both temporal and spatial generalization settings for 1-4-week-ahead prediction. We compare classical neural network architectures, numerical transformer-based models, pretrained time series foundation models, and LLM-based forecasting approaches. Across tasks, we demonstrate that a mixture-of-experts model that fuses multiple pretrained forecasters achieves the strongest overall performance, indicating that heterogeneous pretrained representations provide complementary predictive information. Our results further show that numerical transformer-based models produce reliable forecasts, while pretraining provides the largest gains at longer horizons, particularly when the pretraining domain is mechanistically aligned with influenza dynamics. In contrast, LLM-based time series methods underperform relative to numerical forecasters in this setting. Finally, we examine hospitalization information as both an auxiliary covariate and a pretraining source. Hospitalization signals provide complementary improvements in selected settings and clarify when additional surveillance streams enhance the robustness of multi-horizon forecasting. These findings provide actionable guidance on model selection, pretraining strategy, and auxiliary-signal use for influenza preparedness.
