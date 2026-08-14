---
title: "Prof-K: Probabilistic One-Pass Filtering for Efficient Top-k Selection"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.12573"
authors: ["Tadeusz Dziarmaga, Witold Sikora, {\\L}ukasz Struski, Jacek Tabor, Marcin Mazur"]
date: "Fri, 14 Aug 2026 00:00:00 -0400"
score: 57
guid: "oai:arXiv.org:2608.12573v1"
image: ""
generated: "2026-08-14T19:05:44+05:30"
---

arXiv:2608.12573v1 Announce Type: new Abstract: Top-k selection is a fundamental computational primitive with applications spanning databases, information retrieval, signal processing, and modern machine learning workloads, including sparse activations and attention pruning. As data sizes grow, existing approaches become inefficient: exact methods incur high memory and compute overhead, while approximate methods often rely on brittle heuristics that degrade under adversarial or heavy-tailed inputs. In this paper, we introduce Prof-K, a fast, scalable, and distribution-agnostic top-k algorithm with probabilistic correctness guarantees. Prof-K performs a single-pass filtering procedure: a small random sample estimates an adaptive threshold, the N input elements are streamed once into a compact buffer, and an exact top-k routine on this buffer recovers the true top-k elements with probability at least 1 - $\epsilon$, where $\epsilon$ > 0 is user specified. We derive high-probability guarantees for correctness and buffer size, together with an approximately optimal sample size that minimizes overhead as a function of N and k. Empirically, Prof-K achieves 1.5x-10x speedups over the highly optimized PyTorch topk and recent RadiK implementations, with the largest gains in the large-scale, small-to-moderate-k regime where prior methods struggle most. Unlike previous approaches, these guarantees hold independently of the input distribution, ensuring robustness to adversarial settings. By relaxing the recall target (e.g., recovering 95% of the true top-k values), Prof-K additionally provides a principled accuracy-speed trade-off. We further demonstrate its impact on training BatchTopK Sparse Autoencoders (SAEs), where top-k selection constitutes a significant portion of the training cost.
