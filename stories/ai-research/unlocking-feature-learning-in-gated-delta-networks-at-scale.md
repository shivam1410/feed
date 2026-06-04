---
title: "Unlocking Feature Learning in Gated Delta Networks at Scale"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.04048"
authors: ["Yifeng Liu, Quanquan Gu"]
date: "Thu, 04 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.04048v1"
image: ""
generated: "2026-06-05T02:55:12+05:30"
---

arXiv:2606.04048v1 Announce Type: new Abstract: Training and scaling Large Language Models demand enormous computational resources, motivating both efficient sub-quadratic architectures and principled hyperparameter tuning methods. While the Maximal Update Parametrization ($\mu$P) has enabled zero-shot hyperparameter transfer for standard Transformers, its extension to linear models, particularly those with structured state transitions and complicated architectures, remains largely unexplored. By rigorously propagating coordinate-size estimates through the forward pass, gating mechanisms, and recurrent state dynamics, we derive the scaling rules for Gated Delta Network. Experiments on language-model pre-training confirm that our configurations enable stable learning-rate transfer across model widths under both AdamW and SGD, whereas standard parametrization fails to transfer, validating the correctness and practical utility of our analysis.
