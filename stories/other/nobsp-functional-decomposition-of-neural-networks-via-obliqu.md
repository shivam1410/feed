---
title: "NObSP: Functional Decomposition of Neural Networks via Oblique Subspace Projections"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17825"
authors: ["Alexander Caicedo, V\\'ictor De La Hoz, Santiago Alf\\'erez"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17825v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17825v1 Announce Type: new Abstract: Understanding how deep neural networks make decisions remains a fundamental challenge. We present NObSP (Nonlinear Oblique Subspace Projections), a framework that decomposes predictions into explicit per feature contribution functions and an interaction residual. NObSP exploits the linear final layer of a trained network and uses oblique projections in sample space to reduce double counting when learned feature subspaces overlap, thereby supporting both local explanations and global functional analysis. We establish connections to functional ANOVA and the Kolmogorov-Arnold representation theorem and derive an efficient partial regression algorithm for out of sample evaluation. For convolutional networks, NObSP-CAM produces class activation maps without backward passes after a one time calibration. Experiments on tabular and vision benchmarks show faithfulness comparable to established attribution methods. On a synthetic benchmark with known component functions, NObSP obtains a Function Reproduction Score of 0.989, compared with 0.966 for KernelSHAP and 0.922 for Integrated Gradients. On TinyImageNet, contribution vector embeddings improve mean nearest neighbor class purity from 0.654 for raw activations to 0.713 and reduce mean neighbor distance by more than half. These results indicate that NObSP complements scalar attribution methods by recovering functional contribution profiles with separable positive and negative evidence.
