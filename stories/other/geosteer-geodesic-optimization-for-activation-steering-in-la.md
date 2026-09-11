---
title: "GEOSTEER: Geodesic Optimization for Activation Steering in Large Language Models"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.10658"
authors: ["Xuan Cuong Ngo, Hao Vo, Ngan Le"]
date: "Fri, 11 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.10658v1"
image: ""
generated: "2026-09-11T19:04:49+05:30"
---

arXiv:2609.10658v1 Announce Type: new Abstract: Activation steering provides a lightweight way to control large language models (LLMs) by modifying their hidden activations at inference time. Among these approaches, norm-preserving steering aims to change model behavior without altering the activation norm, reducing the risk of representation collapse and degradation. However, existing norm-preserving methods are limited by predefined steering trajectories and by their reliance on one-step updates, which may fail to capture the complex structure of activation distributions. We propose GeoSteer, an optimization-based method for norm-preserving activation steering. GeoSteer formulates steering as a Riemannian optimization problem and updates activations through a sequence of small geodesic steps on the representation manifold. To avoid fixed steering directions, GeoSteer learns a nonlinear activation-space objective that distinguishes desired from undesired activations, and uses this function to adaptively guide each steering step. This multistep formulation yields smoother, more stable, and more consistent steering behavior while preserving the activation norm. Across TruthfulQA, RealToxicityPrompts, and UltraFeedback benchmarks, GeoSteer consistently improves over state-of-the-art activation steering baselines. These results suggest that norm-preserving steering can be made more effective by replacing predefined one-step edits with adaptive, geometry-aware optimization.
