---
title: "On the Impact of Feature Reduction Techniques on Adversarial Attacks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25004"
authors: ["Mohammad Meymani, Roozbeh Razavi-Far"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.25004v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Adversarial attacks have posed significant threats to machine learning models by exploiting their inherent vulnerabilities. Researchers have established an interdisciplinary field called adversarial machine learning to explore these vulnerabilities and develop corresponding defense strategies. Feature reduction strategies are used to decrease the dimensionality of the data in order to reduce training time, avoid the curse of dimensionality, prevent overfitting, and mitigate redundant features. However, their effect on adversarial robustness across different classifiers and attack scenarios remains insufficiently explored. This study aims to analyze the effect of feature reduction techniques on the adversarial robustness of a diverse set of machine learning models under poisoning, backdoor, and universal adversarial perturbation attacks on the APT dataset. These models include support vector machine, decision tree, random forest, multi-layer perceptron, and k-nearest neighbors. The attained results are compared with scenarios where different feature reduction techniques are applied, including principal component analysis, permutation importance ranking, recursive feature elimination, and univariate mutual information. Metrics such as accuracy, F1-score, and mitigation score are employed to evaluate the effect of these techniques on adversarial robustness. The results demonstrate that permutation importance ranking and univariate mutual information generally provide the most consistent robustness improvements, while other methods exhibit more variable effects depending on the classifier and attack scenario.
