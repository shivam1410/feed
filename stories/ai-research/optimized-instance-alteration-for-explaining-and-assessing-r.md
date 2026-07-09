---
title: "Optimized Instance Alteration for Explaining and Assessing Robustness of Classifiers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06637"
authors: ["Evgenii Kuriabov, David Miller, Jia Li"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.06637v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06637v1 Announce Type: new Abstract: In this work, we propose a unified approach for diagnosing misclassification and assessing the robustness of black-box classifiers. Central to our method is an optimization framework that modifies an instance so that the classifier predicts a specified target label, while ensuring that the modification remains easily explainable. The objective function contains two components: an explainability-aware $L_0$ (XA-$L_0$) penalty that promotes sparse and interpretable modifications, and a classifier loss objective that steers the perturbed instance toward the desired output. This integrated optimization formulation is used both to identify the underlying causes of misclassification and to evaluate robustness by determining how an instance can change within a tolerance region before being reassigned to another class. To quantify robustness, we introduce the Tolerance Region Confusion Matrix (TOR-Confusion Matrix), which measures a classifier's susceptibility by modeling the class-to-class transition probabilities induced by tolerance-bounded perturbations. We validate the proposed method on both image and tabular datasets, demonstrating its ability to jointly deliver interpretability and robustness assessment.
