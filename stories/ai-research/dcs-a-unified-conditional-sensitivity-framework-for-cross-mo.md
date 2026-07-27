---
title: "DCS: A Unified Conditional Sensitivity Framework for Cross-Modal Copyright Infringement Detection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.22035"
authors: ["Xiafeng Man"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.22035v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.22035v1 Announce Type: new Abstract: Currently, most foundation models can reproduce or strongly depend on copyrighted training content, but output similarity alone is insufficient for infringement detection, because similar outputs may also arise from public-domain concepts, common stylistic conventions, or ordinary statistical generalization. In this paper, we develops a unified post-hoc detection framework that treats copyright infringement evidence as a counterfactual conditional distribution shift: a protected target is suspicious when the model's behavior under aligned conditions would change measurably if that target were included in, or removed from, the training process. We formalize this view through conditional differential privacy and introduce Dual-Branch Conditional Sensitivity (DCS), an operational statistic that measures the observable gap between two locally perturbed model states. Specifically, the proposed DCS framework creates a learning branch and an unlearning branch around the deployed model, connects their displacement to the unavailable counterfactual retraining effect through influence-function analysis, and bounds the observable sensitivity by the counterfactual privacy-budget surrogate, local curvature, training-set scale, and perturbation step size. To distinguish target-specific memorization from generic fine-tuning instability, we further define a calibrated detection statistic that subtracts the sensitivity measured under orthogonal conditions. The DCS framework is instantiated for ridge-regularized linear regression, conditional diffusion models, autoregressive language models, and multimodal models. These instantiations show how the same principle can be evaluated through prediction gaps, image-embedding divergence, token-distribution or entropy shifts, and cross-modal representation changes.
