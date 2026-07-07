---
title: "CoFEND: A Cross-Modal Fusion End-to-End Network for Cold-Start Drug-Drug Interaction Prediction"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.02928"
authors: ["Di Wu, Hongyi Sun, Haichao Xu, Jia Chen, Zhong Chen, Jie Yang"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2607.02928v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.02928v1 Announce Type: new Abstract: Cold-start drug-drug interaction (DDI) prediction for new drugs is critical for minimizing unexpected adverse drug reactions. The key challenge is to capture similarity between new and known drugs. However, such similarity is closely associated with complex relationships and mechanisms among drugs, enzymes, transporters, molecular structures, and other biomedical entities. Existing methods have three limitations in capturing such similarity: (1) only partial relationships and mechanisms are considered, which overlooks cross-modal information and yields incomplete or biased similarity modeling; (2) similarity computation between new and known drugs is conducted separately across modalities and performed offline for cold-start DDI prediction, leading to misalignment between similarity computation and DDI prediction; and (3) existing interpretability analyses are typically single-modality and focus primarily on key determinants of the perpetrator drug, while the underlying causes of susceptibility for the victim drug are seldom investigated. To address these issues, this paper proposes a novel Cross-Modal-Fused End-to-End Learning Network (CMF-ELN) with three components. First, diverse multimodal information is leveraged to construct four types of drug-centered knowledge graphs, enabling comprehensive similarity modeling under reconstruction-based supervision. Second, a four-channel graph autoencoder is designed to fuse cross-modal similarity within an end-to-end learning framework. Finally, a two-stage interpretability scheme is devised to precisely localize key factors for both perpetrator and victim drugs. Extensive experiments on two real datasets demonstrate that CMF-ELN achieves significantly higher prediction accuracy and more comprehensive interpretability of mechanisms than its peers.
