---
title: "StarOR: Synergizing Tree Search and Test-Time Reinforcement Learning for Optimization Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15197"
authors: ["Jiajun Li, Yu Ding, Shisi Guan, Ran Hou, Wanyuan Wang"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2606.15197v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15197v1 Announce Type: new Abstract: Optimization modeling is inherently hierarchical, requiring a precise sequence of symbolic commitments. Traditional learning-based automated optimization modeling methods improve modeling policies through large-scale annotated or curated training data, but are costly to adapt to new problem distributions. Meanwhile, one-shot generation remains brittle in hierarchical modeling, where early symbolic errors can propagate into invalid formulations. Test-time scaling offers a promising alternative by enabling structural exploration with additional instance-level computation; however, existing search-based methods typically rely on a fixed policy, causing repeated rollouts to inherit similar modeling biases and providing limited credit assignment for intermediate decisions. To address these limitations, we propose StarOR, a synergistic search-and-adaptation framework that couples MCTS with Test-Time Reinforcement Learning for optimization modeling. StarOR decomposes the modeling process into four stages and updates a transient LoRA adapter via GRPO at each non-terminal node. By using MCTS-generated siblings as local comparison sets, StarOR transforms search-time exploration into instance-specific policy refinement. Moreover, an unsupervised multi-faceted reward system provides fine-grained feedback for intermediate formulation decisions without ground-truth labels. Experiments across five optimization benchmarks show that StarOR achieves state-of-the-art performance even with a 4B backbone, outperforming existing methods and the frontier LLMs.
