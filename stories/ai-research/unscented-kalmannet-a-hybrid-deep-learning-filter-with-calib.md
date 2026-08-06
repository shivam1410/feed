---
title: "Unscented KalmanNet: a hybrid deep learning filter with calibrated posterior covariance for nonlinear state estimation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.04201"
authors: ["Minhyeok Ko, Abdollah Shafieezadeh"]
date: "Thu, 06 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.04201v1"
image: ""
generated: "2026-08-06T19:05:18+05:30"
---

arXiv:2608.04201v1 Announce Type: new Abstract: State estimation for nonlinear dynamical systems is commonly performed with the Unscented Kalman filter (UKF), which propagates the state moments through deterministic sigma points and reports a posterior covariance at every step. In practice, however, unknown and time-varying noise statistics and model mismatch degrade both estimation accuracy and covariance calibration. Existing learned filters improve accuracy but are largely built on the extended Kalman filter and either forgo an explicit covariance or learn uncertainty without correcting mismatch-induced gain bias. This paper introduces the Unscented KalmanNet (UKN), a hybrid recursive estimator that augments the UKF with two structurally distinct learned components while preserving its explicit sigma-point covariance recursion. NoiseNet predicts time-varying process and measurement covariances as bounded multiplicative corrections to fixed baselines, guaranteeing positive definiteness, while GainNet applies a bounded residual correction to the analytical gain. A calibration-aware training objective combines state error with covariance- and innovation-consistency terms through adaptive weights, jointly optimizing accuracy and calibration. UKN is benchmarked against UKF, KalmanNet, and Bayesian KalmanNet on three synthetic systems and UZH-FPV real-flight data. It achieves the lowest aggregate state-estimation error in all four examples and reduces RMSE by $26.4$-$49.7\%$ compared to UKF in the synthetic cases. Leave-one-sequence-out cross-validation over 11 flights shows $22.4\%$ and $34.3\%$ reductions in mean position and velocity RMSE, respectively. UKN also yields the lowest fold-to-fold variability, with normalized NEES and empirical coverage closest to nominal values among the other filters.
