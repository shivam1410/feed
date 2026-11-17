---
title: "Multimodal Fusion with Pre-trained Models for Psychotherapy Outcome Prediction from Emotional Dynamics"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.18635"
authors: ["Tobias Hallmen, Marius Funk, Antonia Vehlen, Jeanne Hierse, Gerhard Prinz, Steffen Eberhardt, Wolfgang Lutz, Elisabeth Andr\\'e"]
date: "Tue, 17 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.18635v1"
image: ""
generated: "2026-11-17T19:45:07+05:30"
---

In-session emotional dynamics are associated with psychotherapy outcomes but difficult to measure at scale. Pretrained multimodal models provide automated access to facial, vocal, and textual signals, yet clinical datasets remain small. Our research question is how pretrained multimodal representations can best support psychotherapy outcome prediction under data scarcity. Three studies use 106 sessions from 88 patients and nine session-level outcome scales (HSCL-11, EPO-1, POMS). Study 1 asks whether deep learning outperforms classical machine learning: a two-stage deep pipeline, first predicting window-level valence/arousal and then session outcomes, transferred poorly (best single configuration, $r=.078$). Study 2 asks which representation and preprocessing choices work best: statistical pooling of frozen pretrained embeddings with regularized classical models achieved average $r=.406$ across nine scales under per-scale configuration selection, up to $r=.490$ for symptom distress, with complementary modalities and no significant benefit from manual affect annotations or therapist features. Study 3 asks whether deep learning remains inferior under these choices: classical models outperformed an optimized single-stage deep model at the single-configuration level ($r=.281$ vs. $.222$) and on all nine scales under matched per-scale selection ($.406$ vs. $.252$). The results suggest that under clinical data scarcity, pretrained representations with fixed statistical pooling and regularized classical models are more reliable than learned aggregation.
