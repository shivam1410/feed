---
title: "SAFE-DRIFT: Data Selection for Supervised Fine-tuning with Controllable Off-Target Drifts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28560"
authors: ["Yeo Jin Jung, Yating Liu, Lalchand Pandia, Claire Donnat"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.28560v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

We propose SAFE-DRIFT, a data-selection framework for supervised fine-tuning that improves a target capability while controlling unwanted drift in the model's other behaviors. We formalize this as a constrained optimization problem that maximizes alignment with the target gradient, subject to a budget on off-target drift which we quantify using the Fisher information of a reference distribution. Under this objective, the optimal, closed-form update is a damped natural-gradient step that downweights reference-sensitive directions. To estimate these high-dimensional gradients and work within the right geometry, we further derive a scalable algorithm that approximates the Fisher information and the target gradient in a shared low-dimensional subspace and analyze how entanglement of the target and reference task can affect the update. We evaluate SAFE-DRIFT against state-of-the-art data selection methods across diverse domains including coding and medical question answering, yielding competitive target performance while reducing degradation on specified off-target behaviors.
