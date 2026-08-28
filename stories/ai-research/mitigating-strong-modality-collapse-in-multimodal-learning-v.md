---
title: "Mitigating Strong-Modality Collapse in Multimodal Learning via Inverted Asymmetric Fusion"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26879"
authors: ["Mary Ogbuka Kenneth, Foaad Khosmood, Abbas Edalat"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.26879v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26879v1 Announce Type: new Abstract: Fusing multiple modalities is expected to improve model performance. However, on the MultiHuSE dataset, early, late, and symmetric attention fusion often fail to outperform the best unimodal baseline (text). Pathway isolation of a symmetric attention fusion model reveals that the text-pathway accuracy drops from 74.9% to 56.4% after fusion in one such setting, indicating that the dominant modality can be degraded during integration. We term this strong-modality collapse and argue that it helps explain why some multimodal models fail to surpass unimodal baselines. We propose Inverted Asymmetric Fusion (IAF), which avoids forcing mutual attention across modalities. The dominant modality is preserved by passing through fusion unchanged, while weaker modalities attend to it as a contextual anchor. Before fusion, weaker modalities are strengthened using Modality-Aware Knowledge Distillation. We evaluate IAF on three benchmarks with different modality hierarchies: text-dominant datasets (MultiHuSE, UR-FUNNY) and an audio-visual-dominant dataset (MUStARD). Pathway isolation shows that IAF preserves the dominant modality's internal accuracy at its unimodal ceiling across all tested configurations, whereas symmetric fusion degrades it by up to 18.5% on MultiHuSE. IAF improves over the strongest unimodal baseline by up to 8.25%.
