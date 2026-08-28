---
title: "Graph-Based Pseudo-multimodal Contrastive Learning for 12-Lead ECG Representations"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26964"
authors: ["Mengyu Wang, Kozo Okada, Takafumi Goto, Natsuko Jinba, Hiroki Yamaya, Kiyoshi Hibi, Tomoki Hamagami"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.26964v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26964v1 Announce Type: new Abstract: 12-lead electrocardiogram (ECG) is a standard, non-invasive examination widely used for diagnosing coronary artery disease, where clinical interpretation relies on comparing waveform patterns across multiple leads. However, most existing ECG analysis methods focus on single-lead signals or treat each lead independently, and typically process ECG signals as one-dimensional time-series data using CNNs or RNNs. While effective in modeling local waveform changes, such approaches have difficulty capturing inter-lead dependency and global waveform patterns essential for clinical diagnosis. To address this limitation, we propose a graph-based pseudo-multimodal contrastive learning framework called Graph-CMMC. ECG waveforms are transformed into Gramian Angular Difference Field (GADF) images to construct complementary representations of the same cardiac activity, enabling a pseudo-multimodal learning setting. Using all 12 leads, Graph-CMMC aligns waveform and GADF representations in a self-supervised manner, while a graph-based relational module is employed to model inter-lead dependency and enforce structural consistency across leads during contrastive learning. Experimental results on a multi-label coronary artery occlusion classification task demonstrate that the proposed framework achieves competitive performance compared to supervised learning methods. These results further suggest the effectiveness of using GADF as a complementary representation and incorporating explicit graph-based modeling of inter-lead dependency for learning robust 12-lead ECG representations.
