---
title: "PPDL: A Real-world Industrial User Retention Ratio Forecasting Framework Integrating Physical Priors with Deep Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13789"
authors: ["Zibo Zhao, Zhengxiong Guan, Chaoli Zhang, Linyuan Geng, Xuanbing Zhu, Zhonglong Zheng, Fan Wu"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13789v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13789v1 Announce Type: new Abstract: In multi-channel paid user acquisition, early and accurate prediction of user retention at the channel level is crucial for optimizing budget allocation. User retention curves display a pronounced temporal pattern: an initial period of high churn transitions into long-term stability. This pattern is further characterized by regular fluctuations attributable to seasonality and exhibits high serial autocorrelation. These intrinsic properties make such curves highly suitable for analysis within a time-series forecasting framework. However, forecasting user retention ratio for large-scale short-video platform faces three major challenges: significant heterogeneity across channels, pronounced global trend of decay followed by saturation, and short look-back windows. To address these challenges, we propose PPDL, a novel forecasting framework that integrates physical priors with deep learning. We first introduce a trend-residual decomposition component. The trend is modeled using the Weibull distribution, whose parameters are learned via a Multilayer Perceptron (MLP). Secondly, for the residual component, we design an auxiliary embedding module on top of a deep learning backbone to maintain the channel identity awareness. Finally, to enhance the model's sensitivity to trends, we design a Multiscale Trend-penalized loss function. The proposed approach PPDL is validated through comprehensive experiments on industrial-scale datasets, covering three applications with an average of 30+ channels each. Experimental results show that PPDL achieves improvements across different backbones and significantly outperforms existing online solutions.
