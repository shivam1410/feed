---
title: "XP-JEPA: Cross-Predictive Physics Grounding for Forecastable Latent Dynamics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.24044"
authors: ["Kehan Wen, Ziming Li, Siyuan Luo, Fan Shi"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2608.24044v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.24044v1 Announce Type: new Abstract: Latent world models plan by predicting how candidate actions transform learned representations. In self-predictive models, however, the encoder and predictor are optimized jointly and can co-adapt to latent transitions that are easy to predict but only weakly constrained by the physical evolution of the scene. We introduce the cross-predictive JEPA (XP-JEPA), which grounds visual latent dynamics in privileged physical trajectories. XP-JEPA separately encodes visual observations and physical states, advances both through a shared action-conditioned predictor, and matches each prediction to both future representations. This objective encourages unified latent dynamics across the two modalities, grounded in the underlying physical transitions. The physical branch is discarded after training, leaving a visual-only model at deployment. On a multi-task suite spanning six evaluation subfamilies, XP-JEPA reduces rollout drift of a newly fitted predictor from $0.361$ to $0.104$ and increases mean control success from $53.6\%$ to $78.2\%$. Direct physical-state regression raises position decodability but leaves forecastability and control near the visual-only baseline. Cross-predictive physical grounding can therefore produce more forecastable latent dynamics for rollout-based control without privileged inputs at test time.
