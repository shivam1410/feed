---
title: "Machine Learning Classification of Cryopathy Syndromes: A Comprehensive Comparative Study"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20874"
authors: ["Nataliya Shakhovska, Valentyna Chopyak, Ivan Izonin, Vira Haievska"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20874v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20874v1 Announce Type: new Abstract: Cryopathy syndromes are difficult to classify because laboratory patterns often overlap across diagnostic categories, while some diagnoses are rare. This makes routine interpretation of cryoglobulin-related tests challenging and increases dependence on expert judgment. The aim of this study was to develop and compare machine learning approaches for automated classification of cryopathy syndromes from laboratory data and to identify a practical strategy for clinical decision support. Methods: We analysed laboratory records from 2,686 patients assigned to 14 diagnostic categories. The dataset included demographic variables, cryoglobulin measurements, precipitation tests, and hemagglutinin and hemolysin titers. Data preprocessing included cleaning, encoding, imputation, normalization, and construction of clinically informed interaction features. We evaluated 12 modelling strategies, including Random Forest, Gradient Boosted Trees, Multi-Layer Perceptron, soft-voting ensembles, class balancing with Synthetic Minority Over-sampling Technique, hierarchical classification, period-aware models, targeted binary classifiers, and probability calibration. Performance was assessed using stratified train-test evaluation and stratified 5-fold cross-validation. The main metrics were macro-averaged F1 score, accuracy, Top-3 accuracy, and expected calibration error. The overall task proved difficult because of marked class imbalance and clinical overlap between diagnoses. The best multiclass performance was achieved by a soft-voting ensemble of Random Forest and Gradient Boosted Trees. Cross-validation confirmed stable performance for the balanced Random Forest model. Tree-based methods consistently outperformed the neural network model. Feature engineering improved discrimination, and the most informative predictors were derived cryoglobulin-based interaction features.
