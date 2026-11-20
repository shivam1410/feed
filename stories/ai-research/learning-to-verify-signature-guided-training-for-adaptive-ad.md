---
title: "Learning to Verify: Signature-Guided Training for Adaptive Adversarial Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25271"
authors: ["Arash Vashagh, Roozbeh Razavi-Far"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.25271v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

Adversarial example detectors often fail when attackers explicitly attempt to bypass them. We propose a dual-model approach that keeps the original classifier fixed and trains a separate verifier to assess its predictions. During training, we identify patterns of internal neural network activations that distinguish genuine examples of each class from adversarial examples targeting that class. These patterns, called activation signatures, guide the generation of challenging adversarial examples that mislead the classifier, challenge the verifier, and internally resemble the target class. The verifier learns to recognize these examples while preserving its performance on clean inputs through knowledge distillation. At inference, the verifier evaluates the classifier's prediction without requiring activation signatures. We evaluate the approach on publicly available datasets against several adaptive attacks, including attacks unseen during training. The proposed verifier substantially outperforms directly attacked confidence-based and feature-based detectors under the evaluated L-infinity attacks. Ablation studies show that adaptive verifier training is the main source of this improvement, while signature guidance primarily benefits clean accuracy. Additional L2 evaluations reveal limitations in robustness across perturbation types.
