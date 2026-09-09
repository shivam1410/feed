---
title: "One Rate Is Not Enough: Adaptive Anisotropic Learning Rates for LoRA Fine-Tuning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05885"
authors: ["Huiyi Wang, Daijiao Liu, Lina Yao, Dong Gong"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.05885v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05885v1 Announce Type: new Abstract: Low-rank adaptation (LoRA) has become the standard for parameter-efficient fine-tuning of large language models. Most LoRA variants follow a uniform-LR convention, applying a single global learning rate across every rank-one component of every adapter. We show that this convention overlooks substantial within-module heterogeneity, where the rank-one components of a LoRA adapter update at highly uneven rates and low-velocity modules converge to concentrated singular spectra that underutilize the nominal rank budget. To address this, we propose an adaptive anisotropic learning-rate model that assigns each rank-one component its own effective learning rate, computed online from training-time signals and mean-normalized per module to preserve the global LR budget. AnLR-LoRA instantiates this model with two signals available during AdamW optimization, namely function-space velocity and Adam SNR, as a lightweight scheme with no extra trainable parameters. Across commonsense reasoning, natural language generation and visual instruction-tuning benchmarks, AnLR-LoRA consistently improves over LoRA while encouraging broader use of rank capacity, with gains that remain robust across a wide range of global learning rates and transfer cleanly to other LoRA variants.
