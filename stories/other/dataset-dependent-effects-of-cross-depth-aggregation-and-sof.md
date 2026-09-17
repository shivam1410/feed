---
title: "Dataset-Dependent Effects of Cross-Depth Aggregation and Soft-Routed Experts in EEG Foundation Model Fine-Tuning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17886"
authors: ["Mingyang Jiang, Yamin Li, Daniel Moyer, Fan Ma, Hua Xu, Catie Chang"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17886v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17886v1 Announce Type: new Abstract: EEG decoding tasks can rely on different temporal dynamics and cross-channel relationships. We test whether specialized modules improve a fully fine-tuned EEG foundation model by augmenting CBraMod with cross-depth Attention Residuals (AttnRes) and two soft-routed expert banks. Across matched three-seed experiments on FACED, ISRUC, SEED-V, and PhysioNet-MI, the complete model changes mean balanced accuracy relative to full fine-tuning by -0.12, +1.27, +0.77, and -1.27 points, respectively. AttnRes alone improves mean balanced accuracy on three datasets, whereas adding experts on top of AttnRes helps only FACED and SEED-V. These gains come with substantial overhead: AttnRes requires 2.11 to 2.88x runtime and 1.78 to 2.67x memory, while the complete model requires 2.41 to 3.04x runtime and 1.86 to 2.85x memory. Overall, the added modules produce dataset-dependent, sometimes opposing effects rather than consistent gains over full fine-tuning.
