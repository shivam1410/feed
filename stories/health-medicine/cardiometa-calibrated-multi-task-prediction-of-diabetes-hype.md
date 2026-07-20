---
title: "CardioMeta: Calibrated Multi-Task Prediction of Diabetes, Hypertension, and Cardiovascular Disease Across Population and EHR Data"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15721"
authors: ["S M Asif Hossain, Ruksat Khan Shayoni, M. F. Mridha, Jungpil Shin"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.15721v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15721v1 Announce Type: new Abstract: Cardiometabolic diseases remain among the most persistent drivers of preventable morbidity because diabetes, hypertension, and cardiovascular disease frequently co-occur and share metabolic, vascular, demographic, and behavioral determinants. Existing machine learning studies for chronic disease prediction often emphasize discrimination on a single dataset, while underreporting label leakage, calibration, temporal robustness, external transportability, and subgroup reliability. This paper presents CardioMeta, a calibrated multi-task framework for joint prediction of diabetes, hypertension, and cardiovascular disease across population survey and electronic health record (EHR) data. The study uses NHANES for population-level model development and temporal validation, and MIMIC-IV for EHR-domain evaluation under substantial distribution shift. To reduce circular label reconstruction, the primary analysis excludes disease-defining variables from the corresponding prediction heads, while a full-clinical feature setting is retained only as sensitivity analysis. CardioMeta combines a shared cardiometabolic encoder with disease-specific gated heads and post-hoc probability calibration. In the leakage-reduced temporal validation setting, the model achieved a macro-AUROC of 0.839, macro-AUPRC of 0.536, macro-F1 of 0.614, and expected calibration error of 0.024, with modest but consistent improvements over strong gradient-boosting and neural tabular baselines. External evaluation on MIMIC-IV showed clear degradation under domain shift, while limited fine-tuning partially recovered performance. The findings indicate that the principal value of multi-task cardiometabolic modeling lies not in inflated accuracy, but in reproducible leakage control, calibrated probabilities, and transparent reliability reporting across heterogeneous healthcare data sources.
