---
title: "Gradient-Energy Guided Block-Wise Perturbations for Sharpness-Aware Minimization"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.18306"
authors: ["Zhen Huang, Jiaxin Deng, Junbiao Pang"]
date: "Wed, 22 Jul 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2607.18306v1"
image: ""
generated: "2026-07-23T04:03:36+05:30"
---

arXiv:2607.18306v1 Announce Type: new Abstract: Sharpness-Aware Minimization (SAM) improves generalization by minimizing the worst-case loss in a local parameter neighborhood. Standard SAM implicitly allocates its global perturbation budget across parameter blocks according to instantaneous minibatch gradient norms. Such an allocation can be noisy and may not reflect the sensitivity that blocks accumulate throughout training. We propose Gradient-Energy Adaptive Radius SAM (GEAR-SAM), which maintains an exponential moving average (EMA) of squared block gradients as a lightweight, curvature-related sensitivity signal and allocates the fixed SAM budget through a closed-form constrained optimization. GEAR-SAM preserves the global SAM radius, requires no Hessian-vector products or explicit Fisher estimation, and adds only scalar state beyond SAM. Experiments on image classification, transfer learning, noisy-label learning, and partition studies demonstrate improved generalization and robustness across architectures and tasks. More broadly, GEAR-SAM provides a dynamic view of sharpness-aware optimization: a fixed perturbation budget should be redistributed as the sensitivity of functional network blocks evolves during training.
