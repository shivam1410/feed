---
title: "The Halt Vector: Internalizing a Causal Steering Intervention for Efficient Reasoning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.28859"
authors: ["Dylan Jayabahu, Tinuade Adeleke"]
date: "Tue, 01 Sep 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.28859v1"
image: ""
generated: "2026-09-01T19:06:31+05:30"
---

arXiv:2608.28859v1 Announce Type: new Abstract: Reasoning models do not stop when they know the answer. On DeepSeek-R1-Distill-Qwen-7B the chain of thought runs about twice as long as the model's own answer probability takes to settle, and how much of that excess is removable varies from problem to problem, so a global length penalty cannot take it out. We take it out by internalizing a causal interpretability finding into the weights. The mechanism is a halt vector: a difference-of-means direction at layer 18 of this model whose steering strength controls how long it thinks, while a replicated value axis does nothing. Installing that intervention in the weights is harder than it looks. Maximizing the scalar projection onto the direction corrupts the off-axis dimensions a frozen downstream reader depends on, and generation gets longer instead of shorter; what works is reconstructing the whole steered activation with those dimensions pinned to their natural values. Fit from 24 problems and no reinforcement learning, the halt removes about a quarter of the thinking at held accuracy across five unseen benchmarks, and the cut tracks each problem's own removable slack at 0.70. It also closes a non-termination pathology that grows with difficulty and that a decoding-time confidence hook makes worse. We do not claim to beat a well-tuned length penalty or decoding-time early exit on the raw trade-off; the contribution is how the halt is obtained.
