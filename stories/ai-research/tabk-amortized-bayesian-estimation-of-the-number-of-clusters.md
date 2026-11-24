---
title: "TabK: Amortized Bayesian Estimation of the Number of Clusters in Tabular Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28335"
authors: ["Mohammadreza Bakhtyari, Bogdan Mazoure, Renato Cordeiro de Amorim, Guillaume Rabusseau, Vladimir Makarenkov"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 25
guid: "oai:arXiv.org:2611.28335v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Estimating the number of clusters, $k$, is a fundamental prerequisite for most clustering algorithms. Traditionally, this estimation has relied on computationally expensive grid searches over internal cluster validity indices (CVIs) or adaptive clustering algorithms, both constrained by specific statistical assumptions. We introduce TabK, a zero-shot, permutation-invariant transformer architecture that frames the estimation of $k$ as an amortized Bayesian inference problem for tabular data. TabK leverages a novel Quantile Feature Encoder (QFE) to extract position-free, content-derived representations from empirical marginal distributions. By learning a generalized structural bias over a diverse synthetic prior, TabK estimates the number of clusters in a single forward pass per ensemble member. Evaluated across 50 diverse real-world benchmarks, TabK outperforms all competing methods, achieving a mean absolute error (MAE) value of 1.04 compared to 2.14 for the closest competitor. TabK also achieves the lowest average inference time, producing estimates in less than one second on average and running $2\times$ faster than TabClustPFN and $30\times$ faster than traditional CVIs such as Silhouette and Calinski-Harabasz. Code is available at https://github.com/mrbakhtyari/TabK.
