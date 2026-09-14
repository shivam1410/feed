---
title: "FRIST: FMRI Representation Informed Shared-space Training Improves EEG-only Individual-Finger BCI Decoding"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.12298"
authors: ["Jintao Zhang, Yidan Ding, Joshua Kosnoff, Maxim Karrenbach, Hanwen Wang, Bin He"]
date: "Mon, 14 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.12298v1"
image: ""
generated: "2026-09-14T19:00:19+05:30"
---

arXiv:2609.12298v1 Announce Type: new Abstract: Finger-level motor decoding is important for naturalistic brain-computer interface (BCI) control, yet individual-finger decoding from scalp electroencephalography (EEG) remains challenging because finger representations are spatially close in the sensorimotor cortex and blurred by volume conduction. Leveraging the high spatial resolution of functional MRI (fMRI), we introduce fMRI Representation-Informed Shared-Space Training (FRIST), a two-stage EEG decoding framework that first learns fMRI-informed spectral projections from simultaneous EEG-fMRI recordings and then uses fMRI-derived class geometry to guide residual refinement of EEG predictions. FRIST transfers information across recordings through shared finger labels without requiring paired trials and uses only EEG at inference. We evaluated 12 able-bodied participants during movement execution (ME) and motor imagery (MI) under two-class and three-class chronological session-held-out decoding simulating the online scenario. Using EEGNet as the EEG feature extractor, FRIST increased group average accuracy from 66.93% to 74.53% for two-class ME, from 44.83% to 56.58% for three-class ME, from 80.78% to 85.63% for two-class MI, and from 60.93% to 69.90% for three-class MI compared with the EEG-only EEGNet baseline. FRIST is also shown to improve EEG-only decoding when the target participant's own fMRI data were unavailable. FRIST also generalized across multiple EEG decoding backbones, reaching 87.40% in two-class MI and 72.54% in three-class MI with EEG Conformer as the EEG feature extractor. These findings indicate that fMRI provide useful spatial constraints for EEG representation learning. FRIST improves noninvasive EEG-based finger-level BCI decoding, offering a multimodal strategy for integrating the spatial specificity of fMRI with real-time applicability of EEG.
