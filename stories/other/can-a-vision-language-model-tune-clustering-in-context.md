---
title: "Can a Vision-Language Model Tune Clustering In Context?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18768"
authors: ["Javith Ranatunga, Paimon Goulart, Evangelos E. Papalexakis"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18768v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

Clustering is a widely used unsupervised learning method, but selecting an appropriate algorithm and set of hyperparameters for a specific dataset can require many possible configurations and evaluations. In this work, we investigate whether a Vision-Language Model can instead visually evaluate clustering results and use those decisions to then tune an explicit clustering algorithm. We study this through three progressive experiments using Qwen3.5-27B and five controlled synthetic clustering scenarios. First, we test whether the VLM can distinguish the best clustering result from a pair of plots. Second, we test whether it can assign numerical scores to those plots where a higher score represents a better result. Finally, we use these judgments within an agentic loop in which the VLM scores a k-means clustering and proposes updated hyperparameters that may result in better clustering. Our exploratory results show that the VLM performs well when clear cluster structure is present, while struggling on more ambiguous and noisy settings. In the full agentic experiment, the VLM produces clustering configurations with silhouette scores relatively close to those of grid search and Bayesian optimization, while terminating in much fewer iterations. Overall, these results provide an initial proof of concept that VLM-based visual feedback can be used to autonomously tune an explicit clustering algorithm.
