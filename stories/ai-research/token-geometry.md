---
title: "Token Geometry"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01455"
authors: ["Kathan Shah"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2607.01455v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01455v1 Announce Type: new Abstract: Language models learn continuous programs over discrete symbols, with the embedding table and LM-head acting as the read/write interface between them. We show that this interface has gradient geometry distinct from dense hidden weights which can be exploited to improve the Pareto frontier across supervised finetuning, RL, and pretraining, while only utilizing kilobytes of optimizer state. We introduce Ember, a lightweight optimizer for embedding and LM-head matrices that utilizes O(V + D) VRAM, instead of Adam's O(2VD), and forgoes the need to shard both token table optimizer states. We provide empirical evidence that Ember scales effectively across batch size and parameter count. We show that the optimization trajectory of tokens can be well described by a simple 1D ray, counter to the popular belief that neural net parameters navigate a heavily nonconvex landscape. We provide a principled view on the surprisingly narrow space of optimizers that suffice for Transformer training. Finally, we open-source our distributed Ember implementation that merges cleanly with existing ZeRO/FSDP setups to support further research at https://github.com/katop1234/ember
