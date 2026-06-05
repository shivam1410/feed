---
title: "Physics-Informed Machine Learning for Short-Term Flood Prediction"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04143"
authors: ["Tewodros Syum Gebre, Jagrati Talreja, Leila Hashemi-Beni"]
date: "Fri, 05 Jun 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.04143v1"
image: ""
generated: "2026-06-05T13:37:27+05:30"
---

arXiv:2606.04143v1 Announce Type: new Abstract: Accurate flood forecasting is essential for mitigating disaster risks and protecting communities. However, purely data-driven machine learning models often struggle in data-scarce environments and may violate fundamental hydrological principles. Standard Long Short-Term Memory (LSTM) networks can generate physically inconsistent predictions, particularly when extrapolating to extreme weather conditions. To address these limitations, we propose a Physics-Informed Machine Learning (PIML) framework that incorporates hydrological knowledge directly into the loss function of an LSTM model. Specifically, a Trend Alignment constraint penalizes directional inconsistencies between precipitation and discharge trends, improving model robustness without requiring complex hydrodynamic equations. This regularization encourages the model to learn physically plausible hydrograph behavior, even with limited training data, while enhancing reliability during peak flood events. Experimental results show that the proposed physics-informed model outperforms a standard LSTM baseline in data-scarce settings, increasing the Nash-Sutcliffe Efficiency (NSE) from 0.20 to 0.23 when trained on only 5% of the available data. Additional stress tests under simulated extreme climate scenarios demonstrate that the baseline model exhibits unstable behavior, whereas the physics-informed model maintains directional consistency and physical plausibility. Although accurately predicting extreme peak magnitudes remains challenging with limited data, the proposed approach substantially reduces unphysical fluctuations common in purely data-driven models. These findings demonstrate that simple physical constraints can significantly improve the reliability of deep learning models for real-time flood forecasting, offering a practical solution for ungauged basins and evolving climate conditions.
