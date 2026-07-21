---
title: "Benchmarking Machine Learning Models for Multi-Omics-Based Breast Cancer Prediction"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16250"
authors: ["Priyanka Paudel, Madan Baduwal"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.16250v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16250v1 Announce Type: new Abstract: Estrogen Receptor (ER) status is a critical biomarker in breast cancer diagnosis, prognosis, and treatment selection. Recent advances in high-throughput sequencing technologies have enabled the generation of multi-omics datasets that provide complementary molecular information for computational prediction tasks. This study presents a systematic benchmarking analysis of classical machine learning models for ER status prediction using transcriptomic (RNA expression), genomic (copy number variation; CNV), and proteomic (RPPA) data from the TCGA-BRCA cohort. A rigorous experimental framework incorporating stratified train-test splitting, stratified five-fold cross-validation, class imbalance handling, and fold-specific feature selection was employed to ensure reliable evaluation and prevent data leakage. Random Forest, XGBoost, LightGBM, CatBoost, Support Vector Machines (SVM), and Logistic Regression were evaluated across single-omic and multi-omic settings. Results demonstrated that RNA expression provided the strongest predictive signal, while multi-omic integration yielded modest but consistent improvements over individual modalities. Among all evaluated approaches, Random Forest achieved the best overall performance in the integrated multi-omic setting, obtaining a balanced accuracy of 90.3\% and an ROC-AUC of 97.1\%. Furthermore, recurrent selection of biologically relevant genes, including \textit{ESR1}, \textit{PGR}, \textit{FOXA1}, and \textit{GATA3}, supported the biological validity of the learned models. These findings indicate that carefully regularized classical machine learning methods remain highly effective for small, high-dimensional genomic datasets and that multi-omic integration provides complementary information for breast cancer ER status prediction.
