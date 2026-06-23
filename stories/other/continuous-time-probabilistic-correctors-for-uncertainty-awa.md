---
title: "Continuous-Time Probabilistic Correctors for Uncertainty-Aware Physics-Based Spacecraft Trajectory Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.21021"
authors: ["Muhammad Bilal Shahid, Zhanhong Jiang, Soumik Sarkar, Cody Fleming"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.21021v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.21021v1 Announce Type: new Abstract: Long-horizon spacecraft trajectory forecasting suffers from error accumulation due to the absence of corrective observations in the forecast regime, making reliable uncertainty estimation crucial for safety-critical decision-making such as space domain awareness and conjunction assessment. While high-fidelity physics-based orbit propagators provide accurate deterministic forecasts, they typically lack calibrated uncertainty estimates over long horizons. We introduce a Predictor--Corrector framework in which a physics-based continuous-time $\textit{deterministic}$ forecaster is augmented with a learned continuous-time $\textit{probabilistic}$ Corrector that models forecast errors. The proposed Corrector can be wrapped around an existing deterministic propagator to improve forecast accuracy while producing sharp and calibrated full-covariance uncertainty estimates. The Corrector is based on Latent Neural Controlled Differential Equations (Latent NCDEs) and models the probabilistic temporal evolution of forecast errors in continuous time, naturally supporting irregular sampling and missing features. We further introduce a loss function that promotes calibration and sharpness in long-horizon uncertainty propagation. We evaluate the proposed framework on long-horizon spacecraft trajectory forecasting using real-world data from NASA's Crustal Dynamics Data Information System (CDDIS), wrapping the Corrector around NASA's General Mission Analysis Tool (GMAT). Across forecast horizons of 2--4 days without observations and six rolling test windows, the proposed approach consistently improves accuracy and uncertainty calibration compared to deterministic baselines and Latent ODE-based correctors, demonstrating the effectiveness of the continuous-time probabilistic Corrector for trajectory forecasting.
