---
title: "Comprehensive Evaluation of Machine Learning for Type 2 Diabetes Risk Prediction: Large-Scale External Validation and Fairness Analysis"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16253"
authors: ["Rajveer Singh Pall, Sameer Yadav, Siddharth Bhalerao, Sourabh Sahu, Ritu Ahluwalia, Bhaskar Awadhiya"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.16253v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16253v1 Announce Type: new Abstract: Machine learning-based Type 2 diabetes risk prediction models obtain good internal validation results but lose effectiveness in real-world applications due to deficient external testing and fairness assessment. We developed a multi-dimensional framework evaluating discrimination, calibration, interpretability, and algorithmic fairness on nationally representative populations. An XGBoost model was trained on NHANES 2015-2020 (n=15,685) using eight non-laboratory predictors: age, sex, race/ethnicity, BMI, smoking status, physical activity, history of heart attack, and history of stroke. External validation was performed on BRFSS 2020-2022 (n=1,285,783) under realistic distribution shift. Internal validation showed good discrimination (AUC=0.794, 95% CI 0.788-0.800), with performance loss on external validation (AUC=0.717, relative decrease: -9.7%, p =60) showed AUC=0.607 vs 0.742 for young adults (difference=0.135, p<0.001); obese individuals showed AUC=0.698 vs 0.735 for normal weight (difference=0.037, p<0.001). Gender showed comparable performance (male=0.723 vs female=0.712, p=0.142). Calibration revealed risk overestimation (Brier score=0.123). SHAP analysis identified age, BMI, and physical activity as primary risk drivers. Populations with highest diabetes risk receive the worst algorithmic performance, underscoring the need for fairness-aware, age-stratified deployment strategies before clinical use.
