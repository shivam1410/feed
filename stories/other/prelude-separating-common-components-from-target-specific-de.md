---
title: "PRELUDE: Separating Common Components from Target-Specific Dependencies for Multivariate Time Series Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15155"
authors: ["Dongqing Song, Jianyu Xu, Haobin Ding, Xinyi Guo, Jiahao Du, Ruiqi He, Ruiqi Liu, Yuntong Xie, Chao He"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15155v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Multivariate time series forecasting often improves the prediction of a target by modeling the interactions among variables, and cross-variable modules such as cross-sectional pooling, inter-variable attention, and graph structures are used to construct such interactions. However, by intervening on the cross-variable reading of existing models at inference time, we find that although these models substantially reduce forecasting error through cross-variable interaction, their reading is nearly identical for all targets: the gain appears to come from dependencies among variables but mainly comes from the common component. We term this phenomenon spurious dependency and attribute it to common-component confounding: present in every variable, the common component affects how reading distinguishes sources, so that reading tends to be shared across targets and concentrates on a few similar averages; dependencies thus make up a small share of the read-in content, and a common component composed of several drivers is only partly captured. Theoretical analysis further shows that the common component and dependencies place different requirements on reading and should therefore be handled in different ways. Accordingly, we propose PRELUDE, a separated-reading framework that estimates the common component holistically through cross-sectional pooling and multiple common factors, and reads dependencies for each target via lead-lag relations in the innovation space obtained by prewhitening. Extensive experiments on 16 real-world datasets from four domains show that PRELUDE effectively mitigates spurious dependency and achieves the best overall performance: it attains the best MSE on 23 of the 24 short-horizon and air-quality settings and reduces the average MSE by 6.1% relative to the strongest baseline.
