---
title: "Spectral Retrieval-Augmented Time-Series Forecasting"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.19412"
authors: ["Huu Hiep Nguyen, Minh Hoang Nguyen, Dung Nguyen, Hung Le"]
date: "Fri, 19 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.19412v1"
image: ""
generated: "2026-06-19T21:38:58+05:30"
---

arXiv:2606.19412v1 Announce Type: new Abstract: Time series forecasting leverages historical patterns to predict future values, but traditional methods face challenges when dealing with complex, non-stationary patterns that are difficult to memorize during training. Retrieval-augmented approaches have emerged as promising solutions by retrieving similar historical patterns to enhance predictions. However, existing retrieval methods suffer from two fundamental limitations: spectral blindness, which overlooks critical frequency-domain characteristics that capture underlying periodic structures, and temporal recency, which treats all historical data equally without emphasizing recent, more relevant patterns. In this paper, we propose SpecReTF, a novel retrieval method that addresses these issues by converting time series into windowed frequency representations, measuring similarity with a combined metric that captures both amplitude and phase information. To balance recency and historical context, we apply an exponential moving average weighting scheme that emphasizes recent windows. Extensive experiments on benchmark datasets demonstrate that SpecReTF outperforms time-domain retrieval methods, achieving superior forecasting accuracy across diverse, non-stationary time series.
