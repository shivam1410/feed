---
title: "A Critical Audit of Spatiotemporal Forecasting Benchmark Datasets and Baselines"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.20980"
authors: ["Kenneth Martin, Simon Heilig, Asja Fischer, Michel F. C. Haddad, Adam M. Sykulski, Moshe Eliasof"]
date: "Mon, 24 Aug 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2608.20980v1"
image: ""
generated: "2026-08-24T19:08:17+05:30"
---

arXiv:2608.20980v1 Announce Type: new Abstract: Graph neural networks (GNNs) are routinely employed for short-range forecasting on multivariate time series with a spatial graph structure. Despite the availability of many alternative datasets, method innovations within this domain are predominantly assessed against a rather limited set of benchmark datasets, most notably Chickenpox, PedalMe, WikiMaths, METR-LA, and PEMS-BAY. The evaluation protocols contain baselines spanning from historical averages to classical machine learning approaches. These baselines often show competitive performance compared to GNNs. In the present work, we take a step back and analyse the benchmark datasets via classical time series methods to uncover why spatially-unaware linear models pose a stronger competitor than previously reported, casting further doubt on the discriminative reliability of the aforementioned widely adopted datasets. Our statistical analysis provides a toolset for identifying significant spatial and temporal correlations, while revealing a structural bias introduced by first-order differenced datasets. We therefore recommend reducing the over-reliance on such datasets for method comparison, and instead advocate for more rigorous statistical evaluation. By applying the results of our analysis to a simple hybrid model, we show how our methodology can lead to novel ways of developing GNN models
