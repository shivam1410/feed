---
title: "The Mechanics of Delta Learning: Target Design for Generalizable Scientific Machine Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.28782"
authors: ["Kareem M. Gameel, Ihor Neporozhnii, Sjoerd Hoogland, Oleksandr Voznyy"]
date: "Fri, 25 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.28782v1"
image: ""
generated: "2026-09-25T22:38:54+05:30"
---

In scientific machine learning, $\Delta$-learning trains models on residual errors relative to physical baselines, assuming that more accurate baselines with smaller residual scales inherently improve downstream performance. Here, we demonstrate that residual scale alone is an insufficient heuristic for learnability. Evaluating molecular graph neural networks on total energy targets, we show that complex local descriptor baselines can yield small residual targets that are disproportionately rough within architecture-informed proxy spaces and harder to learn relative to their scale. Conversely, semi-empirical baseline reduces both scale and normalized roughness, improving in-domain and out-of-domain prediction. We introduce scale-normalized graph Dirichlet roughness ($D_{\text{IQR}}$) as a pre-training diagnostic for residual learnability and establish baseline complementarity as a core target-design principle, elevating target space formulation alongside model architecture as a key axis for scientific machine learning.
