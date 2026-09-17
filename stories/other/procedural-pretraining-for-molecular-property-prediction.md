---
title: "Procedural Pretraining for Molecular Property Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17831"
authors: ["Moritz Friedemann, Zachary Shinnick, Philip Torr, Bruno Andreis"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17831v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17831v1 Announce Type: new Abstract: Molecular property prediction is often limited by the small size of labeled downstream datasets, motivating pretraining on large corpora of unlabeled molecules. In this work, we ask whether useful inductive biases can instead be learned from abstract, procedurally generated data before a model sees any molecular data. We introduce a three-stage training pipeline consisting of procedural pretraining, molecular pretraining on SMILES, and downstream fine-tuning, and evaluate several procedural tasks spanning sequence structure, cellular automata, and graph reasoning. We find that procedural pretraining can improve molecular property prediction even after subsequent molecular pretraining: on Lipophilicity, \textsc{Reverse} reduces test error by 4.8\%. For context, the magnitude of this improvement is roughly 90\% of the performance difference between our 250K-molecule baseline and the publicly released MoLFormer checkpoint pretrained on approximately 100M molecules. Our analysis shows that the benefit is strongest under downstream data scarcity, depends on the structure of the procedural data rather than only surface-level statistics, and does not increase monotonically with additional procedural training. Instead, transfer typically peaks at an intermediate procedural budget and deteriorates as the model approaches convergence on the procedural task. We further find that, for several tasks, much of the transferable information is localized in the attention layers, while feed-forward layers can contribute to over-specialization. These results show that procedural data can provide transferable structure for molecular learning and offer a complementary route to improving performance when labeled molecular data are limited.
