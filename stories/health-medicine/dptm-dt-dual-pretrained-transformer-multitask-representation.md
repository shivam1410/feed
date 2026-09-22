---
title: "DPTM-DT: Dual-Pretrained Transformer Multitask Representation Learning for Drug-Target Prediction"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22184"
authors: ["Ge Kong"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.22184v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22184v1 Announce Type: new Abstract: Drug-target relation prediction supports candidate screening, drug repositioning, and mechanism analysis. Existing models often use incomplete drug or protein representations, model cross-modal interactions shallowly, or train affinity regression and interaction classification separately, although these tasks describe closely related views of the same drug-target pair. This paper presents DPTM-DT, a dual-pretrained Transformer framework for multitask drug-target prediction. DPTM-DT combines GROVER molecular graph embeddings, ESM protein language-model embeddings, and CTD physicochemical descriptors, then exchanges drug-target information through bidirectional cross-modal attention. A shared pair representation is used for continuous affinity regression, high-affinity binary classification, and six-level affinity classification. Experiments on Davis and KIBA cover random 80/20 and DeepDTA-style standard splits. On the random 80/20 split, DPTM-DT achieves MSE/CI values of 0.193/0.917 on Davis and 0.120/0.918 on KIBA. It also reports binary AUPR/MCC values of 0.727/0.654 and 0.798/0.689, and six-class Macro-F1/Top-2 values of 0.800/0.932 and 0.815/0.962 on Davis and KIBA, respectively. Across the reported regression, binary classification, and multiclass classification settings, DPTM-DT achieves the best overall performance among the compared methods. Results under the standard split show the same relative trend. Ablations indicate that dual target representation, gated fusion, and cross-modal attention each contribute to the final performance. Code and supplementary materials are available at: anonymous.4open.science/r/DPCM-DT-74E0.
