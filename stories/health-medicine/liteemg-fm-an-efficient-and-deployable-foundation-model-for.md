---
title: "LiteEMG-FM: An Efficient and Deployable Foundation Model for Robust EMG Sensing"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02497"
authors: ["Tianhao Wu, Xu Wu, Amirmohammad Radmehr, Jiawei Yu, Yi Wu, Phuc Nguyen, Jian Liu"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2610.02497v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

Electromyography (EMG) signals vary substantially across individuals, body regions, recording sessions, and sensing hardware, limiting the generalization of models for assistive devices and human-computer interaction. Existing time-series foundation models are also computationally expensive for real-time wearable deployment and often fail to capture EMG-specific time-frequency characteristics. We present LiteEMG-FM, an efficient hybrid CNN-Transformer foundation model for practical EMG sensing. Pretrained on 16 diverse upper- and lower-limb EMG datasets, LiteEMG-FM learns representations that generalize across users and datasets. For resource-constrained deployment, we implement a hierarchical wake-up architecture in which a lightweight, always-on 1D-CNN filters rest and non-target activity and activates LiteEMG-FM only for valid gestures. We evaluate full inference offloading, split inference, and full on-device processing, characterizing their trade-offs in latency, power consumption, and memory footprint. Across diverse evaluation settings, LiteEMG-FM outperforms state-of-the-art time-series foundation models and supervised baselines, particularly under zero-calibration cross-participant and data-scarce conditions. These results demonstrate that LiteEMG-FM is an effective, efficient, and deployable foundation model for EMG applications.
