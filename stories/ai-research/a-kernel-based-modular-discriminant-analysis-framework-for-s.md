---
title: "A Kernel-Based Modular Discriminant Analysis Framework for Small-Sample Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.09910"
authors: ["Lingxiao Qu, Yan Pei"]
date: "Thu, 10 Sep 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2609.09910v1"
image: ""
generated: "2026-09-10T19:06:15+05:30"
---

arXiv:2609.09910v1 Announce Type: new Abstract: The small-sample-size (SSS) problem remains a fundamental challenge in machine learning when labeled data are scarce due to cost, accessibility, or ethical constraints. While numerous approaches have been proposed, existing methods often struggle to maintain stable and discriminative representations under high-dimensional and limited-data conditions. Kernelized Linear Principal Component Discriminant Analysis (KLPCDA), a recently proposed modular framework, integrates variance preservation, inter-class separability, and intra-class compactness within a unified kernel space. Although its formulation has shown promising initial results, a systematic understanding of how its components interact across diverse SSS scenarios remains lacking. In this paper, we present a systematic cross-domain study of KLPCDA to characterize the interaction mechanisms among its core objectives. We analyze the behavior of its seven variants across multiple real-world SSS tasks, including hyperspectral image classification, mechanical fault diagnosis, medical diagnosis, and face recognition. Through extensive experiments and ablation studies, we investigate how different objective combinations influence performance under varying conditions such as noise, class imbalance, and high dimensionality. Our analysis reveals consistent patterns in the interaction of the three core objectives variance, between-class, and within-class terms, providing a unified and interpretable understanding of their roles in stabilizing representations and enhancing discrimination in SSS settings. Based on these findings, we further derive practical guidelines for selecting appropriate KLPCDA variants under different data characteristics. Experimental results demonstrate that KLPCDA achieves strong and robust performance across domains, while maintaining low computational complexity suitable for resource-constrained environments.
