---
title: "AV-FLARE: Feature-Level Reliability Estimation for Multimodal Emotion Recognition"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28327"
authors: ["Ines Jemmali, Alaa Nfissi, Wassim Bouachir, Nizar Bouguila"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.28327v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Multimodal emotion recognition (MMER) systems typically rely on learned feature representations and attention mechanisms that implicitly weight information across time and modalities. However, these mechanisms do not explicitly incorporate input reliability, despite the presence of noise in audio, occlusions in visual data, and the sparse and event-driven nature of affective cues. We propose AV-FLARE, a framework that explicitly estimates fine-grained reliability scores across both temporal and feature dimensions prior to temporal modeling and uses them to modulate feature representations. Reliability is computed using two complementary components: (i) a supervised network trained jointly with the classification objective, and (ii) an unsupervised Gaussian Mixture Model that models global feature distributions. These signals are combined to provide both task-driven and distribution-aware reliability estimates. To integrate modalities, we introduce a hierarchical cross-modal attention mechanism in which textual features are used to guide audio-visual fusion as a semantic reference modality. Experiments on the IEMOCAP dataset show that AV-FLARE improves over a no-reliability baseline, achieving 90.81\% accuracy and 81.69\% F1-score, corresponding to gains of +4.41% and +8.56%, respectively. These results suggest that incorporating explicit input reliability estimation may improve robustness in multimodal emotion recognition under the evaluated setting.
