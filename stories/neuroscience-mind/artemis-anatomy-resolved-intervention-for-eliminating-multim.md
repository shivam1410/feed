---
title: "Artemis: Anatomy-Resolved inTervention for Eliminating Multimodal NeuroImage confounderS"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18287"
authors: ["Siyuan Dai, Yang Du, Kun Zhao, Zhusuyi Chen, Heng Huang, Paul Thompson, Chao Shi, Haoteng Tang, Liang Zhan"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.18287v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18287v1 Announce Type: new Abstract: Multimodal neuroimaging, integrating functional connectivity from fMRI and structural connectivity from DTI, enables non-invasive analysis of brain networks using graph neural networks. However, demographic factors such as age and sex systematically confound the relationship between brain connectivity and clinical outcomes, causing GNNs to exploit spurious shortcuts rather than learning causally invariant representations. While recent causal GNN methods introduce causality at the graph-modeling level, their causal mechanisms remain domain-agnostic without accounting for the real-world confounders inherent in clinical neuroimaging data. Moreover, brain networks are constructed from atlas-based parcellations where each region exhibits distinct sensitivity to demographic factors, necessitating region-aware adjustment. We propose Artemis, a region-level causal framework that bridges this gap with causal intervention at each brain region independently by learning region-specific confounder representations with lightweight parameters. Our adjustment comprehensively utilized the multimodal functional and structural features for graph reasoning as a plug-in module compatible with arbitrary GNN backbones. Experiments on three benchmarks, ADNI for disease diagnosis, OASIS for dementia staging, and HCP for sex classification, demonstrate consistent improvements over representative GNN-based baselines. Multiple supporting experiments further demonstrate statistical significance and neuroscientific interpretability.
