---
title: "Physics-Aware Self-Supervised Pretraining on Multi-Domain Raman Spectra"
category: "Chemistry & Materials"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23955"
authors: ["Charalampos Davalas, Georgios Levantinos, Anastasios Dimitriou, Nikolaos Papanikolaou, Georgios Th. Papadopoulos, Dimitrios Michail"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.23955v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Raman spectroscopy generates large volumes of unlabeled data that are difficult to exploit with conventional supervised learning. This work introduces a multi-domain self-supervised learning framework based on a masked autoencoder (MAE) for learning transferable Raman spectral representations from heterogeneous biological, chemical, forensic, and materials datasets. The proposed pretraining strategy incorporates physics-aware objectives by combining masked intensity reconstruction with a sparse Voigt-profile decoder that models spectral peak structure through differentiable peak centers, widths, and amplitudes. A denoising objective is further included to improve robustness to spectral corruption. The learned encoder is evaluated on substance classification, component identification, concentration estimation, and spectral denoising under linear probing, attention-based probing, end-to-end fine-tuning, and training from scratch. Experimental results show that self-supervised pretraining is most beneficial for challenging tasks with limited labeled data. Attention-based probing also reveals substantially more useful information in the frozen representation than linear probing, indicating that conventional linear evaluation may underestimate representation quality. In addition, the benefits of pretraining become more pronounced with increasing encoder capacity. Overall, the proposed framework demonstrates that physics-aware, multi-domain self-supervised pretraining can improve label efficiency, robustness, and transferability across diverse Raman spectroscopy tasks.
