---
title: "CGDT-CESN: Correlation-Guided and Dynamics-Trained Clustered Echo State Network for Multivariate Time-Series Prediction"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22430"
authors: ["Hariharan Srinivasan, Masoom Bhargava, Sayan Gupta"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.22430v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Accurate prediction of multivariate time series requires models that simultaneously capture variable-specific dynamics and cross-variable interactions. In this work, a Correlation-Guided and Dynamics-Trained Clustered Echo State Network (CGDT-CESN) is proposed, which comprises a modular reservoir architecture with each cluster distinctly specializing in one of the variables in the multivariate time series. An innovative reservoir design is proposed in which inter-cluster connections are enabled by empirically observed correlations among variables, providing a data-driven coupling mechanism. Apart from conventional readout training, inter-cluster connection weights informed by correlations are trained, which in turn allows the reservoir to capture time-varying cross-variable dependencies without sacrificing computational efficiency and further improves forecasting accuracy. The prediction performance of CGDT-CESN is found to be superior to that of the conventional ESN when evaluated on two fundamentally different datasets: Twitter information cascade evolution and solar wind forecasting. Also, the improvement in performance is preserved across multiple prediction horizons, even when presented with a low volume of data. By unifying cluster-specific specialization with learned inter-variable coupling, CGDT-CESN offers a principled, data-driven route to multivariate time series prediction.
