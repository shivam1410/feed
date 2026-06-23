---
title: "Detecting Satellites in Radio-Frequency Data via Semi-Supervised Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.20976"
authors: ["Cade W. Trotter, Maksim E. Eren, Justin C. Holmes, J. Brent Parham, David Ewing, Boian S. Alexandrov, Gian Luca Delzanno"]
date: "Tue, 23 Jun 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2606.20976v1"
image: ""
generated: "2026-06-23T19:00:42+05:30"
---

arXiv:2606.20976v1 Announce Type: new Abstract: Radio-frequency (RF) monitoring is essential for space domain awareness, but it often generates large, variable, and sparsely populated datasets with few labels. These observations can capture satellites, space debris, and the ionospheric background, yet interpreting them typically requires specialized subject-matter expertise. Supervised deep learning methods can perform well on labeled RF data, but they require many annotated examples and may need careful retraining as RF conditions change. Semi-supervised approaches offer a practical alternative for limited-data settings by using unlabeled observations to reveal latent patterns that experts can interpret. In this paper, we present a semi-supervised RF detection and classification workflow for satellite monitoring that combines Non-negative Matrix Factorization with automatic model determination (NMFk), expert-guided cluster interpretation, and classifier-based prediction. We first represent RF observations as a non-negative feature matrix and apply NMFk to estimate the number of clusters that best captures patterns in the unlabeled data. Subject-matter experts then assign physical meaning to the resulting clusters, including satellite detections, ionospheric environmental conditions, and other RF event categories. Finally, we train a classifier on these interpreted clusters to evaluate performance on a test set and categorize future observations. This pipeline reduces reliance on large pre-labeled datasets by pairing unsupervised factorization with expert interpretation, enabling an interpretable and transferable methodology for detecting, observing, and classifying behavior in RF data.
