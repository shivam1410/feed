---
title: "Predictive maintenance in manufacturing: The operational value of continual machine learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18636"
authors: ["Pascal Janetzky, Michael Klar, Manuel Wenzel, Tobias Schlagenhauf, Stefan Feuerriegel"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18636v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Predictive maintenance in high-volume manufacturing often faces a domain-incremental learning problem: as new product configurations enter production, prediction models must learn from newly available data while preserving performance on earlier configurations that remain in operation. In this paper, we empirically study the operational value of continual machine learning methods for addressing this challenge in predictive maintenance, using real-world maintenance data from Bosch. The setting at Bosch covers 25 product configurations over five years, which creates a practical challenge for predictive maintenance models, as such models must be updated with data from newly introduced configurations without reducing performance on configurations learned earlier, a phenomenon known as "forgetting". At the same time, retaining all historical sensor data and repeatedly retraining models is often infeasible in high-volume manufacturing since industrial machines generate too large data volumes. To address this challenge, we combine continual machine learning with robust optimization to support predictive maintenance. We then compare continual machine learning with a broad set of baselines, including fine-tuning, domain-adaptation methods, online learning methods, and configuration-specific models. Across experiments, continual machine learning methods achieve stronger predictive performance and lower maintenance costs than the baselines, with a reduction of cost-related indicators of more than 40 % relative to the baselines. Our results demonstrate the operational value of continual machine learning for decision support in maintenance when product portfolios grow over time and historical manufacturing data cannot be fully retained.
