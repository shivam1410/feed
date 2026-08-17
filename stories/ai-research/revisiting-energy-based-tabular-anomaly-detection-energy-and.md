---
title: "Revisiting Energy-based Tabular Anomaly Detection: Energy and Reconstruction are Complementary"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14186"
authors: ["Junichiro Niimi"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.14186v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.14186v1 Announce Type: new Abstract: Tabular anomaly detection is dominated by classical density-proxy methods (Isolation Forest, OCSVM, LOF), reconstruction-based detectors (Autoencoders, VAEs), and modern non-parametric scorers (COPOD, ECOD, Deep SVDD), all of which approximate the inlier distribution only indirectly; explicit energy-based models are largely absent. Motivated by the recent revival of EBMs in deep learning (e.g., Energy-Based Transformers, JEPA), we revisit the classical Deep Boltzmann Machine (DBM) for this task and hypothesize that its mean-field energy combines more effectively with a reconstruction-based score than same-lineage pairs do. We evaluate a two-hidden-layer DBM on two tabular benchmarks spanning distinct domains (UCI Bank Marketing and NSL-KDD) against eight classical and modern baselines across twenty random seeds. The DBM mean-field energy matches the strongest baseline (the Autoencoder) on Bank Marketing and statistically beats it on NSL-KDD, while significantly outperforming the remaining seven on both datasets. When fused with the Autoencoder via rank fusion, the DBM energy yields a statistically significant improvement on both datasets (AUROC=+0.014, p<0.01 on Bank Marketing; +0.002, p<0.001 on NSL-KDD); every non-DBM-derived base model instead fails to improve or significantly degrades the AE-paired ensemble. Our position is that classical EBMs, exemplified by the DBM, deserve a place in the tabular anomaly detection toolbox as a non-redundant complementary view to the reconstruction-based scores that dominate current practice.
