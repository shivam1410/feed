---
title: "Rational Sparse Autoencoder"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14990"
authors: ["Naiyu Yin, Yue Yu"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.14990v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.14990v1 Announce Type: new Abstract: Sparse autoencoders (SAEs) are standard tools for mechanistic interpretability, but current SAE families are constrained by fixed encoder nonlinearities such as ReLU, JumpReLU, and TopK. This hard-codes a particular sparsity mechanism into the model and can distort the reconstruction-versus-sparsity trade-off. We introduce the Rational Sparse Autoencoder (RSAE), which replaces the fixed encoder activation with a trainable rational function. Rational activations are flexible enough to uniformly approximate the activation primitives used by existing SAE families on compact domains (for TopK, the thresholded gate obtained after a separating top-k threshold is supplied), while also providing a richer function class for adapting to the observed pre-activation geometry. We realise this idea through a two-stage pipeline: an initialisation procedure that copies the pre-trained baseline SAE weights, plugs in rational coefficients obtained by the relaxed Remez exchange on synthetic data, and calibrates the scale parameters along with the rational coefficients; followed by a fine-tuning step under the standard sparsity-regularised reconstruction objective. Empirically, on residual-stream activations of three open-weight language models and across all three baseline activation families, the RSAE strictly improves on it after the fine-tuning step, both on reconstruction-side metrics and on downstream-behaviour metrics, without sacrificing feature-level interpretability under sparse probing. These gains are consistent across host language models, across baseline activation families, and across the full range of baseline sparsity we tested, while the upgrade itself adds only a handful of scalar parameters per autoencoder and runs in minutes on a single consumer GPU.
