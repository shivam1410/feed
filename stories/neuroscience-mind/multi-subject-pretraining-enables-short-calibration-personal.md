---
title: "Multi-Subject Pretraining Enables Short-Calibration Personalization for Closed-Corpus Surface EMG Speech Decoding"
category: "Neuroscience & Mind"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21288"
authors: ["Chenqian Le, Beatrice Fumagalli, Yasamin Esmaeili, Xupeng Chen, Tianyu He, Nikasadat Emami, Adeen Flinker, Yao Wang"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2609.21288v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21288v1 Announce Type: new Abstract: Surface electromyography (sEMG)-based silent speech interfaces are limited by cross-user variability and calibration burden. We study a limited-data setting in which each of 27 speech-typical participants contributed less than 0.5 h of data (21.3 min on average) across Aloud and Mimed speech. Within a closed 50-sentence corpus, we used leave-one-subject-out evaluation, initializing from a released single-subject checkpoint, pretraining on non-held-out participants, and fine-tuning on the target participant. This pipeline achieved 21.7% character error rate (CER) and 31.9% word error rate (WER), compared with 49.3% CER without target-subject calibration and 68.0% CER for direct checkpoint fine-tuning. Multi-subject pretraining from random initialization followed by fine-tuning reached 44.9% CER and did not converge under the fixed schedule in 5 of 27 folds, indicating substantial optimization and accuracy benefits from checkpoint initialization. Macro-averaged CER declined from 74.4% with one pretraining participant to 21.7% with 26. Three minutes of target-subject calibration achieved 20.5% CER and 31.7% WER, with no statistically significant difference from the full approximately 13-min pool (21.7% CER and 31.9% WER). A subject-specific adapter provided no detectable benefit. Excluding the five evaluation sentences from all sEMG model-training data increased CER and WER to 78.6% and 99.9%. These results support short-calibration personalization in a standardized-montage, closed-corpus setting.
