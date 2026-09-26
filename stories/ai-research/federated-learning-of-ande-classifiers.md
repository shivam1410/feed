---
title: "Federated Learning of AnDE Classifiers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.28695"
authors: ["Pablo Torrijos, Juan C. Alfaro, Jos\\'e A. G\\'amez, Jos\\'e M. Puerta"]
date: "Sat, 26 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.28695v1"
image: ""
generated: "2026-09-26T20:37:01+05:30"
---

This work presents a federated framework for training Averaged $n$-Dependence Estimators (AnDE) in distributed environments. The proposed method focuses on the discriminative setting, where model weights are learned locally and aggregated globally, supporting any dependency order $n$. This design allows federated training without transmitting semantically meaningful parameters, improving privacy. Additionally, generative AnDE models are federated to provide a comparative baseline, with optional differential privacy applied to the aggregation of probability tables. Experiments on 12 discrete datasets show that discriminative models with $n \geq 1$ consistently outperform federated Naive Bayes (NB, $n=0$), and that privacy-preserving aggregation is effective with limited accuracy loss. These results establish federated AnDE as a viable and privacy-preserving framework, showing that probabilistic models remain applicable in modern federated learning settings.
