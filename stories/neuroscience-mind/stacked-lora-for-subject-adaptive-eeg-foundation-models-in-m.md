---
title: "Stacked LoRA for Subject-Adaptive EEG Foundation Models in Motor Imagery Decoding"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.03094"
authors: ["Aymen Sarhane, Fouad Lbakali, Mouad Souissi, Jonathan Lys, Giulia Lioi"]
date: "Tue, 07 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.03094v1"
image: ""
generated: "2026-07-07T19:04:36+05:30"
---

arXiv:2607.03094v1 Announce Type: new Abstract: Electroencephalography (EEG) decoding for brain-computer interfaces (BCIs) faces a major challenge: substantial inter-subject variability limits effective cross-subject generalization. Consequently, practical systems still rely largely on subject-specific models trained from scratch and requiring individual recalibration. EEG foundation models have recently emerged as a promising alternative; however, even large pretrained models cannot simply be used as fixed feature extractors and still require additional adaptation before they can be reliably applied to downstream tasks. In this work, we address this challenge through targeted adaptation strategies. Building on recent EEG foundation models such as REVE, LaBraM, and LUNA, we examine the impact of different low-rank adaptation strategies on motor imagery classification. We propose a framework that structurally decouples subject-invariant knowledge from subject-specific neural signatures: the low-rank update at each adapted layer is split into a Global adapter, trained jointly across all subjects, and Subject-Specific adapters, each absorbing individual variability. To assess the contribution of each path, we compare three adaptation strategies: (i) subject-specific LoRA (ii) global LoRA and (iii) stacked LoRA, combining both Global and Subject Specific adapters. Experiments on BCI Competition IV-2a, PhysioNet Motor Imagery, and the clinical Zuo2025 benchmark show that Stacked LoRA effectively mitigates inter-subject variability, achieving the best accuracy in the large majority of backbone and dataset combinations. Our analysis further reveals that the optimal balance between the global and subject-specific paths depends on the target population: a shared adapter is sufficient for large, diverse cohorts, whereas subject-specific adaptation is decisive under the high inter-session variability of clinical recordings.
