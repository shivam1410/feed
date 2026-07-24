---
title: "CLOE: Christoffel Loss Autoencoder for Anomaly Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.20530"
authors: ["L\\'ea Billet (LAAS, INSA Toulouse, ANITI), Louise Trav\\'e-Massuy\\`es (LAAS-DISCO, Comue de Toulouse, ANITI), Elodie Chanthery (LAAS), Alexandre Gaffet"]
date: "Fri, 24 Jul 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2607.20530v1"
image: ""
generated: "2026-07-24T19:06:17+05:30"
---

arXiv:2607.20530v1 Announce Type: new Abstract: Semi-supervised anomaly detection plays a key role in diverse fields such as process monitoring, healthcare, and finance. However, lightweight methods often struggle with high-dimensional data and typically require careful tuning of multiple hyperparameters. Among existing approaches, Christoffel Function--based methods are attractive due to their simplicity, requiring at most a single hyperparameter. They also benefit from a well-established theoretical foundation that yields several interesting results for data science. However, their main limitation is poor scalability to high-dimensional settings. In this paper, we introduce CLOE, a new method that combines an autoencoder for dimensionality reduction with a Christoffel Function--based detector applied in the latent space. To better align representation learning with anomaly detection, we design a novel loss function that leverages the Christoffel Function to guide the autoencoder toward representations that better capture the support of the normal data distribution. We further propose a principled procedure to set the detection threshold and an efficient strategy to tune the single remaining hyperparameter. Experiments on multiple high-dimensional tabular anomaly detection benchmarks demonstrate that CLOE achieves superior performance compared to existing methods, while preserving the lightweight and low-tuning advantages of Christoffel Function--based approaches.
