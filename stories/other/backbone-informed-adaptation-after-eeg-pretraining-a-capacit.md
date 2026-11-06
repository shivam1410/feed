---
title: "Backbone-Informed Adaptation after EEG Pretraining: A Capacity-Controlled Study"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07192"
authors: ["Mingyang Jiang, Yamin Li, Fan Ma, Daniel Moyer, Hua Xu, Catie Chang"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07192v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Electroencephalography (EEG) foundation models learn representations that combine information across channels and time. This structure motivates adapters that model the same relationships during downstream learning. However, it is not clear whether such a design outperforms other candidate adapters. Moreover, in order to arrive at a fair comparison between candidate adapters, we also need to consider their trainable parameters. Here, we ask whether a backbone-informed (native) adapter makes better use of a given capacity by comparing it against a token-wise multilayer perceptron control that transforms each feature vector independently. We approximately match their trainable parameter counts and keep the pretrained encoder fixed. Across two EEG foundation models and tasks covering emotion recognition, sleep staging, and EEG event classification, the native adapter shows no consistent advantage. For one backbone, differences between the designs are small relative to variation across runs. For the other, the token-wise control performs better on emotion recognition and EEG event classification. On sleep staging, the native adapter's advantage over the token-wise control is reduced when we also train the component that processes sequences of EEG segments. The relative performance of the two adapters depends on the backbone, task, and downstream training protocol. These findings motivate evaluating backbone-informed adapters against capacity-matched alternatives.
