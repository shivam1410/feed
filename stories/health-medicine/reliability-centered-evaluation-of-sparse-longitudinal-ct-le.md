---
title: "Reliability-Centered Evaluation of Sparse Longitudinal CT Lesion-Size Forecasting with Conformal Interval Calibration and Gompertz-Inspired Regularization"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21197"
authors: ["Lingfei Kong"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2609.21197v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21197v1 Announce Type: new Abstract: Sparse longitudinal CT follow-up limits lesion-size forecasting when only a few prior observations are available. We constructed a five-visit DLT-derived same-lesion trajectory benchmark from DeepLesion and Deep Lesion Tracker (DLT), yielding 205 trajectories from 129 patients. We compared an exploratory conventional sparse-to-final analysis with a primary fixed visit-index horizon design predicting the common log change from T3 to T4 while progressively adding earlier observations, evaluating predictive accuracy, uncertainty reliability, post-hoc conformal interval calibration, subgroup performance, and Gompertz-inspired trajectory regularization. The evaluated methods showed partially overlapping point-prediction accuracy but distinct uncertainty behavior. Mean held-out RMSE across ten training seeds was 0.4726, 0.4305, 0.4499, and 0.4513 for m = 1, 2, 3, 4, indicating the lowest mean RMSE at m = 2; additional history did not improve RMSE. At m = 4, raw Cohort-Level Feature GP coverage was near the 95% nominal level, whereas MC Dropout, Deep Ensemble, and residual-scale intervals were conservative. Patient-level conformal calibration generally produced near-nominal or conservative coverage at the cost of wider intervals. Patient-grouped development cross-validation selected lambda* = 0 for the Gompertz-inspired term. A global population reference frequently opposed lesion-level change directions, and prediction difficulty varied across anatomical subgroups. Overall, additional historical observations provided limited predictive benefit once the prediction horizon was controlled, while predictive accuracy, uncertainty reliability, and trajectory consistency did not necessarily improve together, and should be evaluated jointly in sparse longitudinal imaging.
