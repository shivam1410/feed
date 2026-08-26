---
title: "FlowNeg: GFlowNet-Guided Diverse Hard Negative Sampling for Knowledge Graph Embedding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.23849"
authors: ["Ibne Farabi Shihab, Naoshin Anzum Hridi, Joyanta Jyoti Mondal"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.23849v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.23849v1 Announce Type: new Abstract: Negative sampling determines whether a knowledge graph embedding (KGE) model learns from informative counterexamples or wastes updates on implausible corruptions. Uniform negatives are diverse but easy, whereas hard-negative miners concentrate on few entities and collide more with held-out positives. We introduce FlowNeg, a context-conditioned hierarchical generative flow network that amortizes reward-proportional sampling without normalizing a composite reward over the entity set: given a positive triple and corruption side, it selects a type, then an entity. Its terminal reward combines bounded model-based hardness with a training-only structural score for held-out-positive collision, over a relation-specific type-compatible support. We derive the reward, specialize standard trajectory balance, and bound multiplicatively how residual imbalance perturbs terminal and mode probability. Across a descriptive five-seed grid of five architectures and five benchmarks, FlowNeg has higher mean MRR than EMU and than IF-NS in 24 of 25 cells ($+0.0172$ and $+0.0160$ on average). A separate 15-seed FB15k-237/RotatE control fixing negative count, diagnostic budget, and compute gives FlowNeg $0.359\pm0.001$ MRR against $0.346\pm0.002$ for EMU, with near-uniform fixed-partition diversity, high gradient informativeness, and low collision. The evidence supports mode-covering negative generation without treating structural similarity as an open-world truth oracle.
