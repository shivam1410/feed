---
title: "Bias, Measurement Error, and Double-Dipping: When Can GNN Convolutions Help Brain Connectome Prediction?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10364"
authors: ["Tommaso Castellani, Jiaqi Li, Muriah D. Wheelock, Rezwana Rosen Razzaque, Helmut Laufs, Hong Chen, Claire Donnat"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10364v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Graph Neural Networks (GNNs) are an important tool for fMRI prediction, where empirical functional connectivity matrices serve both as features and for graph construction. However, recent studies and our own experiments show that these methods often fail to outperform simpler graph-agnostic baselines. We propose a statistical explanation for this failure by formulating connectome prediction as an errors-in-variables (EIV) problem: the true connectome is latent, while the observed covariance matrix is a noisy finite-time-series estimate. In a linear asymptotic setting, we decompose the effect of graph convolution into three mechanisms: smoothing-induced bias and variance reduction, graph estimation error, and a double-dipping effect arising when the same noisy matrix determines both graph and features. Under a latent community model adapted to neuroscience, we identify a narrow favorable regime, set by the brain community structure, the predictive signal, the graph construction and the recording length, in which message passing can improve prediction. Simulations validate this decomposition, while real-data experiments illustrate that connectome GNN pipelines often fall outside this regime. Our results provide a first step towards explaining when graph convolutions can help brain connectome prediction, and why they often do not.
