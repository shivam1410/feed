---
title: "Efficient Long-Horizon Learning for Learned Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.06772"
authors: ["Xiaolong Huang, Benjamin Th\\'erien, James Harrison, Eugene Belilovsky"]
date: "Thu, 09 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.06772v1"
image: ""
generated: "2026-07-09T19:06:43+05:30"
---

arXiv:2607.06772v1 Announce Type: new Abstract: Learned optimization aims to improve upon hand-designed optimizers (e.g., Adam and Muon) by meta-learning small neural network optimizers over a distribution of tasks. While recent work has greatly advanced the architectural design and inductive biases of learned optimizers (LOs), current meta-training approaches still suffer from two main difficulties: (1) they cannot efficiently scale meta-training to long-horizon inner problems and (2) they often fail to surpass comparable hand-designed optimizers. To address these limitations, we propose Efficient Long-hOrizon (ELO) learning, an efficient meta-training algorithm that (1) reallocates redundant meta-training compute to longer failure regimes, achieving efficient long-horizon learning, and (2) enforces decoupled progressive expert supervision, providing stable meta-learning signals that additionally improve the generalization of LOs. Our empirical study evaluates ELO for meta-training both element-wise and matrix-based LOs. Across downstream language modeling (GPT-2-124M/350M on FineWeb) and image classification (ViT-B/16, ResNet-50 on ImageNet-1K) tasks, ELO substantially improves the long-unroll performance and out-of-distribution generalization of the base LOs. In particular, ELO-Celo2 consistently outperforms well-tuned AdamW across all evaluated tasks, while remaining competitive with Muon on language modeling. \textit{Notably, all ELO baselines require less than 7 H100 GPU-hours for meta-training.}
