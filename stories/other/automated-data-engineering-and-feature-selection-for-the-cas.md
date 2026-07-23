---
title: "Automated Data Engineering and Feature Selection for the Case Study of Warpage Detection in Fused Deposition Modeling"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18515"
authors: ["Saleh Valizadeh Sotubadi, Nazanin Mahjourian, Vinh Nguyen"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18515v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18515v1 Announce Type: new Abstract: This study contributes toward development of an Automated Data Processing (ADP) framework designed to evaluate and reinforce optimal machine learning model-feature combinations for predictive tasks in fused deposition modeling (FDM) process datasets. The methodology is centered around a reinforcement learning-inspired policy updating mechanism, where multiple machine learning models are trained on both full feature sets and feature subsets selected through Shapley-based Explainable AI (SHAP XAI) across 217 datasets. At each episode, the framework assesses the predictive accuracy and F1-scores of each model-feature pair, computes a scalar reward, and updates $Q$ values to guide future model selection. SHAP XAI feature importance was employed to generate reduced yet informative feature subsets to enable the framework to explore performance with dimensionality. The policy was shown to evolve over multiple episodes, with reward distributions used to visualize performance stability. Overall, results indicate that leveraging the ADP framework through XAI algorithms successfully converges toward optimal model-feature configurations with improved accuracy and stability. Specifically, the proposed framework improves the test-set AUC from 0.9248 to 0.9731 and increases the mean reward value by more than fifty percent compared with the baseline full-feature configuration.
