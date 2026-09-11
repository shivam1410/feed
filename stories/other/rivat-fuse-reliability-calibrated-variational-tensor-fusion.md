---
title: "RiVaT-Fuse: Reliability-Calibrated Variational Tensor Fusion for Multimodal Prediction under Modality Uncertainty"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10798"
authors: ["Yingfan Xu, Tieming Liu, Ye Liang, Taiping Liu"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10798v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10798v1 Announce Type: new Abstract: Image-metadata prediction requires fusing heterogeneous evidence whose reliability can vary across samples and latent factors. Existing representation-level fusion methods typically choose an aggregation architecture, such as concatenation, gating, conditional modulation, or attention, without explicitly defining what the fused representation should mean under modality uncertainty. We propose RiVaT-Fuse, a reliability-calibrated variational tensor fusion framework that defines fusion as sample-wise latent-state estimation. Rather than producing a fused vector by direct aggregation, RiVaT-Fuse estimates a consensus latent state through a variational objective that balances image evidence, metadata evidence, structured cross-modal interaction, and stability. The resulting framework replaces scalar modality confidence with matrix-valued trust geometry, decomposes interaction into additive, multiplicative, and relational components, and couples the latent state with conditional robustness and structured multi-task prediction. We provide well-posedness and stability interpretations of the latent solve and instantiate the framework with efficient low-rank-plus-diagonal trust operators. On an image-level image-metadata prediction benchmark, RiVaT-Fuse achieves the strongest overall predictive rank among direct representation-level baselines while improving probability and label stability under perturbation.
