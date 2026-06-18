---
title: "Sparsity Curse: Understanding RLVR Model Parameter Space from Model Merging"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.18521"
authors: ["Chenrui Wu, Zexi Li, Jiajun Bu, Jiangchuan Liu, Haishuai Wang"]
date: "Thu, 18 Jun 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2606.18521v1"
image: ""
generated: "2026-06-18T19:07:09+05:30"
---

arXiv:2606.18521v1 Announce Type: new Abstract: Reinforcement Learning with Verifiable Reward (RLVR) has emerged as a powerful post-training paradigm that surpasses Supervised Fine-Tuning (SFT) in eliciting reasoning intelligence and resisting catastrophic forgetting. Recent studies further reveal that RLVR induces highly sparse and off-principal parameter updates compared to SFT. This naturally raises the question: does such sparsity make RLVR models more amenable to model merging? If so, model merging would offer a scalable, training-free path to aggregate diverse reasoning capabilities from independently trained RLVR models. Surprisingly, we find the opposite, uncovering a sparsity curse: the sparse RLVR updates are spread farther apart in parameter space, forming near-orthogonal shortcuts that make aggregation inherently fragile. This is likely rooted in the stochasticity of RL optimization and the diversity of emergent reasoning patterns. Unlike SFT models that converge to shared, flat basins and merge naturally, RLVR models suffer severe degradation under standard merging methods. Through systematic empirical analysis of the update geometry, we characterize the mechanisms behind this failure and propose Sensitivity-aware Resolving Merging (SAR-Merging), a merging recipe tailored for the unique structure of RLVR parameter spaces. SAR-Merging resolves conflicts in overlapping update regions via Fisher Information-based sensitivity arbitration, followed by magnitude-aware sparsification and rescaling to preserve fragile reasoning pathways. Experiments on mathematical and coding benchmarks demonstrate that SAR-Merging substantially outperforms existing merging methods on RLVR models, enabling both single-task enhancement and multi-capability fusion.
