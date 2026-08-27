---
title: "CAT-GS: Balanced Multimodal Learning via Calibrated Gating and Fusion Surgery"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24947"
authors: ["Mahir Shahriar Tamim, Sharjil Khan, Md. Samiul Alim, Tanvir Ahmed Khan, Shafin Rahman, Nabeel Mohammed"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.24947v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.24947v1 Announce Type: new Abstract: End-to-end training of multimodal neural networks often exhibits unstable neural dynamics characterized by three coupled failure modes that degrade learning: (i) modality imbalance, where one branch dominates gradient-based optimization; (ii) unstable gating, where noisy confidence cues induce erratic modality selection; and (iii) fusion interference, where modality-specific gradients conflict at the shared fusion layer. We propose CAT-GS (Calibrated, Adaptive, Thresholded Gating with Fusion Surgery), a neural dynamics-based optimization controller for intelligent computing applications. CAT-GS operates during backpropagation without modifying model architectures, fusion modules, or task losses. Through calibration of teacher-derived reliability via temperature scaling and EMA smoothing, CAT-GS stabilizes neural dynamics using a margin-thresholded policy to switch between warm-up dropout, weak-modality prioritization, and weak-biased blending, stabilizes gradient magnitudes under aggressive gating via capped gradient-budget renormalization, and applies fusion-only PCGrad to reduce destructive cross-modal interference at the primary shared bottleneck. We evaluate CAT-GS on audio--visual multimodal pattern recognition benchmarks (CREMA-D, AV-MNIST, and VGGSound), a tri-modal setting (UR-FUNNY), controlled synthetic data (CG-MNIST), and additional cross-domain benchmarks (AVE and CMU-MOSI). CAT-GS improves or matches fused multimodal accuracy against strong imbalance-aware baselines (including OGM-GE, G$^2$D, and UMT) across settings, and yields smoother gating behavior with fewer conflicting fusion gradients.
