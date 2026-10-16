---
title: "EEG-Based Prediction of Music Enjoyment Using Deep Learning with Explainable Temporal Analysis"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.20795"
authors: ["Parshav Singla, Simranjit Kaur, Maanya Walia,  Niharika"]
date: "Fri, 16 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.20795v1"
image: ""
generated: "2026-10-16T19:00:16+05:30"
---

Understanding why listeners enjoy music is difficult because the experience is subjective and changes as a piece unfolds. Electroencephalography (EEG) offers a non-invasive way to study neural responses during listening, yet earlier work has mostly treated music emotion as a categorical label or relied on black-box models. We formulate enjoyment prediction as a regression problem on the public MUSIN-G dataset, which contains 128-channel EEG from 20 listeners together with song-level enjoyment ratings. Six deep learning models were compared under a participant-wise protocol, in which 15 listeners were used for training and validation and 5 were held out for testing. DeepConvNet, CNN-LSTM and GNN-CNN reached the lowest mean absolute error (0.97 to 0.99 on the 1 to 5 scale), while the temporal convolutional network (TCN) had the highest Pearson correlation with the ratings (r = 0.21). Gradient-based and occlusion-based explanations, averaged over all held-out windows, identify the time segments within each two-second window that most influence the TCN predictions. The study provides a reproducible cross-listener benchmark for EEG-based enjoyment regression and shows how explainability analysis complements standard metrics.
