---
title: "DeMix: Debugging Training Data with Mixed Data Error Types by Investigating Influence Vectors"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.11616"
authors: ["Jiale Deng, Yanyan Shen, Xiaogang Shi, Chai Junjun"]
date: "Thu, 11 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.11616v1"
image: ""
generated: "2026-06-11T19:06:09+05:30"
---

arXiv:2606.11616v1 Announce Type: new Abstract: High-quality training data is essential for the success of machine learning models. However, real-world datasets often contain mixed types of errors arising from systematic flaws in data preparation pipelines, including label errors, feature errors, and spurious correlations. Effective debugging of training data requires both detecting erroneous samples and identifying their specific error types to enable targeted repair, yet existing data cleaning and attribution methods fail to adequately address this dual requirement. In this paper, we propose DeMix, a novel framework that simultaneously diagnoses erroneous samples and their error types. Our key insight is that different error types produce distinct patterns on model behavior. DeMix captures such error-specific patterns by influence vectors that characterize how each training sample affects model predictions across all validation samples. We formulate training data debugging as a multi-label classification problem where a classifier is developed to predict error types directly from influence vectors. We further introduce an intervention-based learning strategy that guides the classifier to capture invariant rationales specific to each error type, ensuring the learned classifier generalizes effectively. Empirical evaluations on 11 tasks across tabular data prediction, recommendation systems, and LLM alignment demonstrate that DeMix significantly outperforms state-of-the-art approaches, achieving a 22.61% improvement in data debugging F1-score and a 9.32% gain in task model performance after data repair. Code is available at: https://github.com/SJTU-DMTai/DeMix.
