---
title: "Alert-List Concordance for Evaluating Imputation Strategies in ICU Sepsis Prediction"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.22635"
authors: ["Priyanka Siddappa, Muntaqim Ahmed Raju, Shifat Haider Al Amin, Ruizhe Ma"]
date: "Mon, 19 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.22635v1"
image: ""
generated: "2026-10-19T19:03:54+05:30"
---

Preprocessing is an under-measured reliability risk in clinical prediction: a model can keep a similar AUROC and still change who receives an alert. Imputation quality is commonly evaluated using reconstruction error or aggregate discrimination, neither of which directly measures agreement on which patients are flagged. At a matched alert rate, pipelines with similar aggregate performance can produce different patient lists. This question is especially relevant under the frequent, structured missingness of real ICU records. We therefore introduce alert-list concordance, which asks whether two pipelines identify the same high-risk patients, measured by the Jaccard similarity of their top-k% alert sets with patient-level bootstrap confidence intervals. On PhysioNet/CinC 2019 (40,336 patients, 71.9% missingness), we compare nine imputation strategies and a native-missingness baseline using a fixed XGBoost configuration, fitted and Platt-calibrated separately for each strategy. After Bonferroni correction, 22 of the 28 reconstruction-method pairs showed no statistically significant difference in patient-level AUROC, yet their alert lists overlap at Jaccard 0.518 to 0.750. Similar aggregate discrimination can therefore accompany different patient selections. ForwardFill is a separate outlier, pairing higher discrimination with the lowest overlap in the matrix, 0.40 to 0.45. The broad pattern holds within each hospital system and under six patient-level aggregation rules. At the row level, eight of ten methods fall within an AUROC range of 0.011. In this row-level pipeline, deep imputers did not outperform mean imputation on discrimination, and the sequential implementations cost 5 to 12 times mean imputation in total pipeline wall-clock time on our hardware.
