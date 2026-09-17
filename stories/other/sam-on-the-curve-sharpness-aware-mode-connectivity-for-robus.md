---
title: "SAM-on-the-Curve: Sharpness-Aware Mode Connectivity for Robust Weight-Space Interpolation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.17748"
authors: ["Alejandro Calatrava, Xu Zhang, Ren Wang"]
date: "Thu, 17 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.17748v1"
image: ""
generated: "2026-09-17T19:00:24+05:30"
---

arXiv:2609.17748v1 Announce Type: new Abstract: Deep neural networks that are independently trained to similar performance can be connected by low-loss parametric curves in weight space, a phenomenon known as Mode Connectivity (MC). This geometric property underpins practical techniques such as weight averaging, model ensembling, and model merging. We argue that low-loss connectivity is an incomplete geometric criterion: it controls loss only along a one-dimensional trajectory while leaving the surrounding weight-space neighborhood unconstrained, so the optimized curve may traverse sharp ridges that become fragile under distribution shift. We therefore reformulate mode connectivity as a neighborhood-robust path optimization problem, seeking a curve whose entire local neighborhood maintains low loss. We propose Sharp Mode Connectivity (SMC), which applies a first-order sharpness-aware approximation to the resulting minimax functional, enforcing flatness along the entire curve rather than only on it. We derive a practical optimization algorithm for connectivity paths under this sharpness-aware objective. Under severe blur corruptions from CIFAR-10-C, SMC achieves up to 6.09\% absolute accuracy improvement over standard MC. Remarkably, SMC produces negative loss barriers, meaning that models obtained at interior points of the optimized path can outperform the average endpoint loss. These results, validated across ResNet-18, VGG16-BN, and ViT-Tiny on CIFAR-10 and ImageNet-100, establish path-wise flatness as a practical principle for robust weight-space interpolation.
