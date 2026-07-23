---
title: "FedCC: A Low-Resource Federated Adaptation of Foundation Models for Robust Corpus Callosum localization in Fetal Ultrasound Images"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18283"
authors: ["Alessandro Di Matteo, Sara Moccia, Giuseppe Rizzo, Gianpaolo Grisolia, Ricciarda Raffaelli, Lorenzo Vasciaveo, Francesco D'Antonio, Maria Chiara Fiorentino"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18283v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18283v1 Announce Type: new Abstract: Accurate localization of the corpus callosum (CC) in fetal ultrasound (US) images is crucial for the early identification of neurodevelopmental abnormalities. However, this task remains highly challenging due to the intrinsic limitations of US imaging, including low contrast, speckle noise, and the considerable anatomical variability of the CC. We propose FedCC, a federated learning (FL)-based framework for CC localization in fetal US images, specifically designed for realistic multi-center and resource-constrained clinical settings without requiring data sharing. The framework integrates a frozen DINOv2 backbone with a lightweight YOLO-based detection head. To enable parameter-efficient adaptation, Low-Rank Adaptation (LoRA) modules are incorporated, allowing only a small subset of parameters to be optimized and exchanged among clients. This strategy substantially reduces both computational and communication overhead, making the framework suitable for low-resource environments. The proposed approach was evaluated on a multi-center dataset comprising 10,970 ultrasound frames acquired from 58 pregnant women during routine neurosonographic examinations across three clinical sites using heterogeneous imaging devices. The proposed framework achieved strong performance in the federated setting. In particular, the combination of DINOv2 and LoRA under the FedAvg strategy achieved an average mAP@50 of 0.857 and an F1-score of 0.803, outperforming both full fine-tuning and encoder-freezing baselines. Notably, the proposed approach reduced the number of trainable parameters to 2.9M compared with 24.4M in full fine-tuning, corresponding to an approximately 8.5$\times$ reduction in communication cost. These findings represent a promising step toward scalable, privacy-preserving, and clinically deployable AI systems for fetal neurosonography.
