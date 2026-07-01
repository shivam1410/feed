---
title: "Fora: From Weight-Space to Function-Space Protection in Capability-Preserving Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31092"
authors: ["Rui Zhou, Tianci Xie"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 67
guid: "oai:arXiv.org:2606.31092v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31092v1 Announce Type: new Abstract: Full fine-tuning adapts large language models to new tasks but can erode capabilities they already possess. Existing remedies protect through proxies such as parameter distances, importance penalties, output matching, or dominant singular directions of the weights, but none directly asks which activation directions the preserved capability relies on. We argue that a capability is characterized more faithfully by the activation subspace it induces than by the singular geometry of the weight matrix, and develop function-space protection, instantiated as FORA (Function-space Orthogonal Residual Adaptation). From label-free calibration inputs, FORA estimates, per layer, the principal directions $Q$ of the input-activation covariance and forms a right projector $P_Q = I - QQ^T$. Paired with a left projector $P_U$ from the weight SVD, the update is $\Delta W = P_U M P_Q + U_2 D_{\delta} V_2^T$: a high-capacity branch structurally barred from reading capability-relevant function directions, plus a narrow spectral channel for controlled plasticity. The construction extends to parameter-efficient adaptation via $M \to (\alpha/r) BA$. Across three settings on Qwen3-1.7B, including COGS and GSM8K learned while preserving translation and translation learned while preserving math, FORA consistently improves preservation over weight-space projection and standard regularization, with only a small new-task trade-off in the math-preservation setting. A controlled ablation isolating the projection source shows that the advantage comes not from projection itself, but from projecting onto capability-derived rather than weight-derived directions. Code is available at https://github.com/zrui239/FORA.
