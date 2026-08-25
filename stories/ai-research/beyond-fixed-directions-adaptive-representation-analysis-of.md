---
title: "Beyond Fixed Directions: Adaptive Representation Analysis of Reasoning and Memorization in LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21919"
authors: ["Shaheen Nabi"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.21919v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21919v1 Announce Type: new Abstract: Recent work has proposed that reasoning and memorization in language models can be characterized by a single representation direction, including methods that keep this direction fixed during reinforcement learning. We test two assumptions behind this view. First, are reasoning-oriented and factual-recall task groups approximately single-direction separable? Second, does the resulting geometry remain stable after GRPO? Using Qwen3-0.6B and a controlled 400-example dataset, we find that a one-dimensional projection can match a full 1024-dimensional linear probe with AUROC = 1.00 on the studied task groups. However, after GRPO, the corresponding direction is substantially reorganized: mean-direction cosine averages 0.453, probe-direction cosine 0.445, while direct representation drift reaches 0.511 at the final layer. Probe AUROC nevertheless remains 1.00. The evidence therefore supports single-direction decodability for the studied task groups but challenges fixed-direction stability: the information persists while its geometric realization changes.
