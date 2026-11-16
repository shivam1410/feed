---
title: "LightTAR: Light and Fast Target-Aware Representations for Multimodal Tabular Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.17600"
authors: ["Eilam Shapira, Alan Arazi, Shoham Grunblat, Roi Reichart"]
date: "Mon, 16 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.17600v1"
image: ""
generated: "2026-11-16T20:51:01+05:30"
---

Multimodal tabular learning involves classification and regression on tables combining structured numerical and categorical features with unstructured text and images. These unstructured fields are commonly represented by pretrained encoder embeddings reduced with principal component analysis (PCA). This reduction prioritizes input variance but may overlook information relevant to predicting the target. We introduce LightTAR, a simple, inexpensive method that adapts dimensionality reduction to the prediction task. LightTAR augments the standard PCA representation with a few target-aware features extracted jointly from the final and an intermediate encoder layer using regularized partial least squares (PLS). We evaluate LightTAR with 21 tabular models, including tree ensembles, neural networks, and tabular foundation models. LightTAR improves average predictive performance for all models and, averaged across models, improves prediction on almost every MulTaBench dataset. These gains come with a small increase in total runtime relative to PCA representations. LightTAR integrates directly into existing encoding pipelines, improving tabular learners' predictive performance without modifying the encoder or the learner.
