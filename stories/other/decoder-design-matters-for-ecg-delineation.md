---
title: "Decoder Design Matters for ECG Delineation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16489"
authors: ["Joseph Scharpf, William Han, Chaojing Duan, Michael A. Rosenberg, Emerson Liu, Ding Zhao"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16489v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16489v1 Announce Type: new Abstract: Electrocardiogram (ECG) delineation identifies the boundaries of P waves, QRS complexes, and T waves, providing structural annotations that can guide AI models in learning to interpret ECGs. However, training accurate delineation models requires manual annotations that are scarce and time-consuming to obtain. Recent work addresses this limitation through semi-supervised learning (SSL), but the design of the architecture, particularly the decoder, has received less attention. To this end, we propose R-U-Net, an ECG delineation model that pairs a ResNet-18 encoder with a U-Net decoder. On SemiSegECG, R-U-Net outperforms the strongest evaluated ResNet-18 + fully convolutional network (FCN) head baseline in each of the 16 in-domain settings by 3.3-13.0 mIoU and achieves 82.6 mIoU in the cross-domain setting, an improvement of 8.1 mIoU. Controlled ablations show that decoder design contributes more to performance gains than the evaluated SSL methods, motivating further exploration of architectures for ECG delineation. All code is open-source at github.com/ELM-Research/ECG-Delineation.
