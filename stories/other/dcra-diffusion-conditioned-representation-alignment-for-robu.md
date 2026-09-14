---
title: "DCRA: Diffusion-Conditioned Representation Alignment for Robust Time-Series Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.11997"
authors: ["Wenrui Xu, Anas Enanaa, Keshab K. Parhi"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.11997v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.11997v1 Announce Type: new Abstract: Learning robust representations for time-series signals under noise and distribution shifts remains challenging, especially in clinical applications such as electroencephalogram (EEG) and electrocardiogram (ECG) analysis. We propose Diffusion-Conditioned Representation Alignment (DCRA), a training framework that repurposes the forward diffusion process as a structured corruption scheduler for representation learning. Different from conventional augmentation and consistency-based methods that rely on independently sampled perturbations, DCRA introduces a structured corruption trajectory via the diffusion forward process, which enables continuous and controlled representation evolution across noise levels. We introduce a feature-level consistency objective that aligns representations across noise levels while preserving class-discriminative structure. This mechanism promotes structure-preserving consistency, which enables smooth and semantically coherent feature trajectories in latent space. The proposed framework is encoder-agnostic and can be integrated with state space models and Transformer architectures. The seizure detection experiments on the CHB-MIT EEG dataset show that DCRA consistently improves performance under multiple noise conditions and achieves higher sensitivity at low false-positive rates. Analysis reveals that DCRA produces more balanced and structured representations compared to baseline and diffusion-only models. These findings highlight the benefit of combining structured corruption with representation alignment for robust time-series learning.
