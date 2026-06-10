---
title: "LongMoE: Longitudinal Multimodal Learning via Trajectory-Aware Mixture-of-Experts"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09907"
authors: ["Maxx Richard Rahman, Prakhar Kumar, Wolfgang Maass"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.09907v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09907v1 Announce Type: new Abstract: Multimodal clinical learning is increasingly important for integrating diverse patient data, including imaging, text, and personalised health records. However, it faces two fundamental challenges: i) modality missingness, where arbitrary subsets of modalities are unavailable at a given patient visit, ii) longitudinal dynamics, where the diagnostic significance of an observation depends on the patient's evolving disease trajectory over time. Existing methods address these challenges in isolation: missing-modality frameworks treat each visit as an independent static snapshot and discard temporal context, while longitudinal models often assume complete modality availability and degrade under systematic modality incompleteness. We propose LongMoE (Longitudinal Mixture-of-Experts), the unified framework to jointly address both challenges. LongMoE combines a context-aware imputation module with an attentional tokenization module that captures frequency-domain temporal patterns across irregular visit sequences, a trajectory-aware encoder for modeling disease progression, and context-conditioned Sparse MoE routing for patient-specific expert selection. Experiments on ADNI, OASIS-3, and MIMIC-IV show that LongMoE improves robustness under missing or weak contemporaneous modalities and remains competitive in full-modality settings, establishing a strong foundation for longitudinally-aware multimodal clinical learning.
