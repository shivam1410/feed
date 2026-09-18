---
title: "CoRe: Coherence and Relational Alignment for Multivariate Time Series Forecasting"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.19670"
authors: ["Xiaoyu Lin, Huiran Duan, Yining Liu, Zhixiang Wu, Chu Lin, Lin Lu"]
date: "Fri, 18 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.19670v1"
image: ""
generated: "2026-09-18T20:52:59+05:30"
---

arXiv:2609.19670v1 Announce Type: new Abstract: Direct forecasting has become a standard paradigm for multivariate time-series forecasting because it predicts the full future horizon in a single pass. However, its training objective is often still decomposed into pointwise errors such as MSE. Such objectives provide stable supervision, but they do not explicitly preserve the structure of the future trajectory: temporal coherence within each variable and relational consistency across variables can both be weakened. We propose CoRe, a model-agnostic learning objective for direct multivariate forecasting. CoRe replaces pointwise supervision with two output-space constraints: a frequency coherence loss that aligns predicted and target spectra, and a low-rank relational graph loss that matches sampled pairwise differences in a target-derived PCA subspace. The resulting objective introduces no trainable parameters and can be applied to existing forecasting backbones by changing only the loss. Experiments on standard benchmarks show that CoRe improves strong baselines, compares favorably with recent forecasting objectives, and remains effective across different backbones, datasets, and hyperparameter settings overall consistently.
