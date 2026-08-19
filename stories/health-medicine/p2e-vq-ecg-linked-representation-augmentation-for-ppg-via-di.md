---
title: "P2E-VQ: ECG-linked representation augmentation for PPG via discrete patch retrieval"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14656"
authors: ["Zhongli Wu, Zhuangzhi Gao, He Zhao, Feixiang Zhou, Fu Wang, Jinru Ding, Yuankai Wang, Hongyi Qin, Gregory Y. H. Lip, Bil Kirmani, Yalin Zheng"]
date: "Wed, 19 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14656v1"
image: ""
generated: "2026-08-19T19:06:05+05:30"
---

arXiv:2608.14656v1 Announce Type: new Abstract: Photoplethysmography (PPG) is widely used in consumer wearables because of its low cost and ease of acquisition. However, unlike electrocardiography (ECG), PPG measures peripheral pulse dynamics rather than cardiac electrical activity, limiting its ability to predict cardiac conditions that rely on ECG-specific morphological cues. Existing methods attempt to bridge this gap by reconstructing ECG signals from PPG signals. However, this inverse mapping is inherently ill-posed, and faithful waveform reconstruction does not necessarily translate into improved downstream performance. To address this challenge, we propose P2E-VQ, a retrieval-augmented framework that replaces ECG waveform reconstruction with ECG-linked representation retrieval. Specifically, P2E-VQ converts PPG patches into discrete tokens and retrieves ECG-linked information from a memory bank constructed exclusively from the training data. This process augments PPG representations while requiring only PPG signals during inference. Extensive experiments on five public datasets covering six downstream tasks, including clinical endpoint prediction and affective state recognition, demonstrate that P2E-VQ consistently outperforms pretrained baselines under a unified frozen-feature linear-probing protocol.
