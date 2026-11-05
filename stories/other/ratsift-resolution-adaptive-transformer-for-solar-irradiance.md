---
title: "RATSIFT: Resolution-Adaptive Transformer for Solar Irradiance Forecasting and Temporal Downscaling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.03738"
authors: ["Jesto Peter, Timothy M. Hansen, Hossein Moradi Rekabdarkolaee"]
date: "Wed, 04 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.03738v1"
image: ""
generated: "2026-11-05T05:13:03+05:30"
---

Accurate forecasting and temporal downscaling of solar irradiance is critical for reliable renewable energy integration and grid management. Traditional methods often struggle to capture rapid irradiance variability. In this work, we develop a Transformer-based architecture for simultaneous forecasting and temporal downscaling. The model takes input data at arbitrary resolutions and generates outputs at any resolutions represented within the training data, leveraging both global and local contextual information. To improve training efficiency, a genetic algorithm-based optimization framework is implemented to identify suitable model hyperparameters, while reducing the computational cost of exhaustive grid search. The effectiveness of the proposed model is shown by analyzing real data in Dallas, Texas. The proposed model achieved root mean square error (RMSE) values of 28.785, 29.544, 30.157, 32.132~W/m\(^2\) for 15-, 30-, 60-minute, and irregularly spaced global input and producing forecast at 5-minutes resolution, respectively. Furthermore, this model produced reliable uncertainty estimates, exhibiting wider prediction intervals for high-resolution inputs during volatile solar conditions, whereas coarser-resolution inputs result in narrower intervals and significantly lower training time and computational cost. Our approach provides a scalable and efficient framework for multi-resolution solar irradiance forecasting and temporal downscaling, suitable for practical energy forecasting and grid management applications.
