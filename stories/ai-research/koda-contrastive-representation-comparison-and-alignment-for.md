---
title: "KODA: Contrastive Representation Comparison and Alignment for Vision-Language Foundation Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04180"
authors: ["Youqi Wu, Mohammad Jalali, Farzan Farnia"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2606.04180v1"
image: ""
generated: "2026-06-04T19:29:25+05:30"
---

arXiv:2606.04180v1 Announce Type: new Abstract: Vision-language foundation models such as CLIP and SigLIP provide widely used representations for multimodal learning systems. While these models are typically compared through downstream performance, such evaluations often do not explain how their representations differ structurally. In this work, we study this problem through the task of Contrastive Embedding Clustering: identifying sample subsets that are weakly clustered under one representation but strongly clustered under another. We propose \emph{Kernel Optimization for Discrepancy Analysis (KODA)}, a kernel-based framework for contrastive representation comparison and alignment. KODA constructs unified multimodal kernels through modality-wise kernel composition and formulates discrepancy discovery as a constrained optimization problem that searches for coherent structures in one representation while suppressing coherence in a reference representation. This yields interpretable discrepancy directions associated with specific sample subsets and modality interactions. To scale KODA to large vision-language datasets, we develop randomized low-dimensional approximations of joint kernels using random projections, including Random Fourier Features for shift-invariant kernels. Empirically, KODA identifies consistent and interpretable discrepancy structures across vision-language representations and provides sample subsets for representation alignment. The code is available at https://github.com/yokiwuuu/KODA.
