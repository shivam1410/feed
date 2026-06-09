---
title: "Customer Churn Prediction on Structured Data Using FT-Transformer and Stacking Ensembles"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07582"
authors: ["Joyjit Roy, Samaresh Kumar Singh, Laxmi Shaw"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2606.07582v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07582v1 Announce Type: new Abstract: Customer churn prediction is essential across data-driven industries such as insurance, digital banking, eCommerce, and subscription platforms, where retaining existing customers is typically more cost-effective than acquiring new ones. Predicting churn on structured datasets remains challenging due to class imbalance, nonlinear feature interactions, and heterogeneous feature types. Tree-based ensemble methods consistently demonstrate strong performance in these contexts, often outperforming conventional neural networks. This study introduces a validated hybrid architecture that integrates feature-tokenized transformers (FT-Transformer) with gradient-boosted trees through calibration-aware stacking. The proposed framework addresses persistent gaps in statistical validation, probability calibration, and reproducibility found in prior research. The FT-Transformer captures higher-order feature interactions using self-attention, while XGBoost captures gradient-boosted decision boundaries with complementary inductive biases. Class imbalance is handled using class-weighted loss functions, thereby avoiding synthetic oversampling and preserving minority-class distributions. The models are ensembled using out-of-fold (OOF) stacking with a logistic regression meta-learner, which recalibrates overconfident base model outputs and learns optimal combination weights. On a public bank churn dataset, the hybrid model achieves 62.10% F1, 0.861 AUC-ROC, and 0.647 PR-AUC, outperforming the Multi-Layer Perceptron (MLP) baseline by 3.37 F1 points and 0.027 AUC under 5x5 cross-validation with 95% confidence intervals reported. Ablation studies demonstrate that both the transformer component and stacking strategy contribute materially to performance. The proposed methodology offers a reproducible and extensible reference architecture for contemporary churn prediction on structured tabular data.
