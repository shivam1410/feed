---
title: "A Two-Stage Time-Aware Transformer for Short-Horizon AECOPD Risk Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19578"
authors: ["Dongyang Wang, Weihao Qu, Ling Zheng, Haowen Pan"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19578v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19578v1 Announce Type: new Abstract: Acute exacerbation of chronic obstructive pulmonary disease (AECOPD) can worsen rapidly, making timely prediction a clinical priority. Most existing machine learning approaches rely on episodically collected clinical variables, introducing delays that limit their practical utility in home monitoring settings. Home ventilators offer a lower-latency alternative, producing a near-continuous record of respiratory status during daily use. However existing ventilator-based approaches either compress the waveform into handcrafted features or focus primarily on binary risk classification, leaving the timing of an impending event unresolved. In this paper, we present a two-stage framework that operates directly on raw pressure and flow waveforms from the most recent seven days of home ventilator use. The first-stage classification model identifies patients at high risk of a severe exacerbation. The second-stage regression model then estimates how many days remain before the event occurs. Our experimental results demonstrate that the two-stage model outperforms traditional baseline models on both risk classification and time-to-event estimation, with our selected Stage 1 classifier achieving F1 = 0.91 and our Stage 2 regression model achieving RMSE = 1.00 days and R^2 = 0.76, giving clinicians both an early warning and actionable lead time before a severe exacerbation occurs.
