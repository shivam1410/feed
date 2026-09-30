---
title: "Medium-Term Multi-Resolution Electric Load Forecasting using Economic Data and Foundation Model"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.31806"
authors: ["Lindas Eloi, Goude Yannig, Ciais Philippe"]
date: "Wed, 30 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.31806v1"
image: ""
generated: "2026-09-30T19:08:55+05:30"
---

Accurate medium-term, from a few months to a few years, electricity load forecasts are crucial for informed decision-making in power plant maintenance scheduling, load dispatch and price settlement. Being comprised between Long-Term Load Forecasting (LTLF) which uses mostly economic projections and appliances development scenarios, and Short-Term Load Forecasting (STLF) driven by weather, calendar and autoregressive patterns, Medium-Term Load Forecasting (MTLF) requires both extrapolation capabilities and variability modeling. Yet, it remains unclear if MTLF can benefit from economic indicators, and especially at which forecast horizon and resolution. To address these challenges we investigated the impact of socioeconomic data on predictions issued 1 month and up to 48 months in advance for France at monthly and daily resolution using a tabular Foundation Model (FM). A dataset covering 20 years of observations of electricity load, weather variables and economic features such as consumer price and production indices, electric vehicle counts or employment is created for the study. To avoid noisy data, we used a new feature selection pipeline, creating ensemble of expert models with diverse feature subsets, to demonstrate that selected economic covariates improve forecast skill by 20% over 2015-2025. This enhancement is steady across lead times and resolutions limiting the Mean Absolute Percentage Error to 4% for monthly granularity and 5% for daily granularity. Explainability of the models is investigated through feature and context importance. Results showed that the FM is limited in the context it leverages pointing towards potential computational savings with a reduced context, while feature importance of economic predictors grows with the forecast horizon. This suggests that including economic data in MTLF could bridge the gap with LTLF leading to seamless forecasts.
