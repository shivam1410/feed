---
title: "Trainable Smooth-Rotation Transforms with Learned Channel Scales for LLM Quantization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09927"
authors: ["Patrik Czak\\'o, G\\'abor Kert\\'esz, S\\'andor Sz\\'en\\'asi"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2606.09927v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09927v1 Announce Type: new Abstract: Post-training quantization (PTQ) is one of the most practical ways to reduce the serving cost of Large Language Models (LLMs), but activation quantization remains difficult because outlier-dominated channels lead to large quantization errors. This paper investigates whether part of this degradation is caused by over-migration in scaling-based equivalent transformations. We introduce a quantile-robust scaling policy for SmoothRot-style transforms by replacing max-based activation statistics with high quantiles, and we complement it with constrained gradient-based optimization of channel scales. On LLaMA-3.2-1B under W4A4 quantization, quantile-only policy search improves selected-layer error by 11.1% over the SmoothRot baseline, joint (alpha, q) search improves it by 12%, and training reaches 18.5%. Replaying the best selected-layer policy on all decoder-block down-projection layers reduces the corresponding full-layer mean error from 97.51 to 78.08 (19.9%). The results show that robust migration control and lightweight scale learning provide consistent gains over max-based fixed policies while preserving the equivalent-transform framework.
