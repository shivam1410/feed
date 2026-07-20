---
title: "Knowledge-Guided Cross-Modal Fusion for Adult-to-Pediatric ECG Transfer via Label-Conditioned Contrastive Alignment"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15928"
authors: ["Xinran Liu, Yuwen Li, Hongxiang Gao, Heyang Xu, Jianqing Li, Zongmin Wang, Chengyu Liu"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.15928v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15928v1 Announce Type: new Abstract: Adult and pediatric electrocardiogram (ECG) interpretation relies on age-sensitive criteria, and models pretrained mainly on adult ECGs often transfer poorly to pediatric populations when pediatric labels are scarce. Existing multimodal ECG--text methods typically align waveforms and text at the global sample level, entangling evidence from co-occurring diagnoses and limiting transfer under this gap. We propose Pediatric-Adult ECG Alignment via Cross-modal Enhancement (PEACE), a knowledge-guided framework pretrained on the largely adult MIMIC-IV ECG corpus. PEACE describes each diagnosis along rhythm, morphology, and ST--T axes and, per recording, composes only positive-label descriptors into three axis tokens and a fused embedding. A label query network (LQN) uses diagnostic labels as queries to cross-attend over ECG tokens and axis tokens, while label set aware bidirectional contrastive learning (LSBC) aligns pooled ECG features with the fused embedding when recordings share diagnoses. Curriculum adaptive fusion (CAF) gates alignment strength according to smoothed classification loss and training progress, limiting disruption during early optimization. The knowledge branch is used only for training supervision; inference uses ECG signals alone. On ZZU-pECG, PEACE reaches macro average AUCs of 59.39%, 81.74%, and 91.56% under zero-shot, 50-shot, and full fine-tuning, with the clearest gains over foundation and knowledge-pretraining baselines under limited supervision; versus domain adaptation initializations, zero-shot improves substantially while 50-shot AUC is comparable to DANN. After fine-tuning on PTB-XL, PEACE reaches 96.90% macro average AUC over nine harmonized labels. Ablations confirm that label-conditioned knowledge alignment, rather than global text fusion, is the key driver of pediatric transfer gains.
