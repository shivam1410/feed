---
title: "Deep Learning Approaches for Sleep Apnea Classification from Polysomnographic EEG Signals"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.15477"
authors: ["Shashank Manjunath, Mukesh Cheemakurthi, Aarti Sathyanarayana"]
date: "Mon, 20 Jul 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2607.15477v1"
image: ""
generated: "2026-07-20T19:05:49+05:30"
---

arXiv:2607.15477v1 Announce Type: new Abstract: Sleep apnea diagnosis via polysomnography remains resource intensive and relies on time consuming manual data analysis and scoring. Recent work has demonstrated that central nervous system effects of sleep apnea events can be detected through electroencephalogram (EEG) signals. However, most work uses a single feature type on various datasets combined with different classification algorithms. In this work, we present a comprehensive comparison of deep learning architectures and feature representations for automated sleep apnea detection from multichannel EEG on a single dataset of pediatric subjects. We evaluate Vision Transformers and Graph Attention Networks across distinct signal representations: raw temporal signals, short-time Fourier transform spectrograms, coherence based graphs, and two topological data analysis (TDA) derived features. Using age and sex matching of our train and test sets, we train on 2410 pediatric subjects and test on 575 pediatric subjects. We achieve a best test AUC of 0.750 using a vision transformer based model trained on TDA features. Stratified analysis across patient demographics (age, sex, AHI severity) and sleep stages (N1, N2, N3, REM) reveals significant performance variation. Our results demonstrate the feasibility of EEG based automated OSA screening while highlighting essential challenges for clinical deployment.
