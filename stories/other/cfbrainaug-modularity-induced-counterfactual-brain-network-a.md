---
title: "CFBrainAug: Modularity-Induced Counterfactual Brain Network Augmentation for Interpretable fMRI-based Autism Diagnosis"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.32184"
authors: ["Yifan Qiao, Sheng Li"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.32184v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

Machine learning on resting-state functional magnetic resonance imaging (rs-fMRI) brain networks is promising for diagnosing Autism Spectrum Disorder (ASD), but existing methods are prone to overfitting on limited training data, and their post-hoc statistical attribution offers limited clinical interpretability. We propose CFBrainAug, a counterfactual brain network learning framework that unifies data augmentation and counterfactual explanation by learning label-altered brain networks. Unlike conventional label-preserving augmentation, CFBrainAug first retrieves a label-opposite yet topologically similar candidate and then refines it under a module-number constraint. Jointly training on factual and counterfactual networks enriches the training distribution around the decision boundary, enabling a lightweight feature-selection-based SVM to perform competitively with recent graph deep learning methods. Meanwhile, the counterfactuals provide intrinsic explanations by identifying the connectivity differences between each subject and its counterfactual. Experiments on the ABIDE I dataset show that CFBrainAug reaches an accuracy of 74.1% on the NYU site, suggesting that counterfactual augmentation can complement more complex models in small-sample brain network analysis.
