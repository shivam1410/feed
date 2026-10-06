---
title: "COVER: Learning to Accept More in Selective Sleep Staging"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03911"
authors: ["Yukai Song (Department of Electrical and Computer Engineering, University of Pittsburgh), Yangfan Deng (Department of Electrical and Computer Engineering, University of Maryland, College Park), Jijun Yin (Department of Electrical and Computer Engineering, University of Pittsburgh), Zhi-Hong Mao (Department of Electrical and Computer Engineering, University of Pittsburgh), Jingtong Hu (Department of Electrical and Computer Engineering, University of Pittsburgh)"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.03911v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Traditional sleep-staging methods apply the same model to every EEG epoch. Such uniform deployment expends computation on epochs that a smaller model could handle reliably, motivating cascades in which a primary classifier accepts its reliable predictions and defers the remainder to a more capable model. In this paper, we study the first stage of such a cascade: maximizing the coverage of fixed primary predictions subject to a prescribed accepted-risk target. We propose COVER (COVerage-oriented Error Ranking), which integrates two key innovations: (i) auxiliary-informed primary-error learning, which replaces maximum softmax probability (MSP) with a learned error score while preserving the primary labels, and (ii) fixed-scale scorer refinement, which builds on this score to directly maximize coverage under an empirical accepted-risk constraint rather than error-prediction accuracy over all epochs. We evaluate COVER on Sleep-EDF-20 at a 5% accepted-risk target, with subjects held out from all fitting and selection. Auxiliary-informed error learning raises mean subject coverage from 31.5% for MSP to 48.8% at similar subject-equal risk. At equal acceptance volume, with MSP accepting the same number of epochs as the learned scorer in each subject (20,639 in total), errors fall from 1,467 to 867. Fixed-scale refinement then adds 1.7 percentage points of coverage over its initialization in nested development, and COVER attains the highest mean coverage among eight evaluated scorers, 50.4% at 4.5% subject-equal risk, above the selective-ranking baseline SELE (49.3%) and the probability-fusion comparator DuoF (43.6%). To the best of our knowledge, this is the first work to combine auxiliary-informed primary-error learning with fixed-scale coverage refinement for selective sleep staging, offering a basis for reliability-aware allocation of computation in cascaded sleep staging.
