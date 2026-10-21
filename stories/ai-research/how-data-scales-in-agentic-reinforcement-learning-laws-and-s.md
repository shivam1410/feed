---
title: "How Data Scales in Agentic Reinforcement Learning: Laws and Synthesis Strategies"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23946"
authors: ["Bowei He, Yankai Chen, Xiaokun Zhang, Changjiang Han, Ye Yuan, Chong Li, Xue Liu"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 68
guid: "oai:arXiv.org:2610.23946v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Agentic reinforcement learning data should be scaled along three separate axes, not one token count. Across model sizes, domains, and both PPO and GRPO, the scaling exponents rank environment above task above trajectory. Environment gains come mostly from world diversity. The synthetic-to-real ratios where training starts to collapse differ by an order of magnitude across axes. It matters because the best place to spend a synthesis budget depends on which axis you scale.
