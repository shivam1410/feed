---
title: "Predicting Live Birth After Fresh Embryo Transfer in IVF/ICSI: Differential ICM/Trophectoderm Morphology Encoding and a Hybrid Attention--Logistic Regression Ensemble"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.21134"
authors: ["Abdul Raheem Shahzad, Jinxin Chen, Ming Zhang, Juan Deng"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.21134v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Predicting live birth before fresh embryo transfer could support shared decision-making in IVF/ICSI, but routine clinical data are small, heterogeneous, and contain pathway-dependent variables prone to outcome leakage. We aimed to construct a curated single-centre IVF/ICSI dataset and develop a prediction model suited to small tabular clinical data. \textit{Materials and Methods:} We assembled 616 fresh embryo-transfer cycles (251 live birth, 365 non-live birth) with clinical, laboratory, and embryological predictors, and embryo morphology encoded with a novel differential weighting of the inner cell mass and trophectoderm. After KNN imputation, robust scaling, and selection of 50 features, we developed a Hybrid Attention Network (HAN), a learnable feature-attention gate followed by a compact multilayer perceptron, and a HAN + logistic-regression (LR) ensemble with a validation-tuned weight. Models were benchmarked against classical machine learning, TabPFN, and text-serialized language models on a held-out test set; AUC-ROC was the primary metric. \textit{Results:} The HAN + LR ensemble achieved the highest test AUC-ROC (0.710; accuracy 0.710, F1 0.630), ahead of the HAN backbone alone (0.700), logistic regression (0.667), the TabPFN + LR hybrid (0.666), and TabPFN (0.650). Text-serialized language models performed near chance (AUC $\le$ 0.61). The differentially weighted trophectoderm feature ranked highest by consensus importance across models. \textit{Discussion:} A compact attention network combined with a linear model outperformed both components and strong foundation-model baselines on a small clinical cohort. \textit{Conclusion:} The curated dataset and HAN + LR ensemble offer a transparent, reproducible basis for IVF/ICSI live-birth prediction; external validation is the next step.
