---
title: "Transformers as Generic Deep Neural Networks: Exact Compilation, the Cost of Removing Activation-Activation Products, and Multi-Agent Attention Clustering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.28958"
authors: ["Sergey Salishev, Zeev Volkovich, Oleg Granichin"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 30
guid: "oai:arXiv.org:2610.28958v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Transformers are deployed as a special model class. Neural processing units (NPU) add dedicated operators for attention and normalization, and quantization relies on Transformer-specific algorithms. We show the computation does not force this. Every Transformer block, with attention, LayerNorm and a GELU MLP, compiles exactly into a generic deep neural network built from fixed affine maps, routing and the square, sigmoid and inverse square root, plus GELU or its sigmoid approximation. Without activation-activation products, every transform-wise compilation adds at least $N^2$ scalar nonlinear evaluations per head for dense scores. Keeping that one operation type removes this cost; its elementwise form, present on every surveyed NPU, suffices with the sigmoid and inverse square root. For top-$k$ attention with exchangeable tail scores, we prove that exact or conditional-mean tail mass gives an unbiased, minimum-mean-square-error estimate of the attention distribution, while tail drop is conditionally biased. When queries or agents cluster, centroids choose the keys first, reducing the number of computed scores from $N^2$ to $Nk$ per head. On DeiT-Tiny, MambaIRv2-Light and Pythia-70M the compiled models match their references with all keys, standard post-training quantization applies, and the exact tail-mass estimate beats tail dropping with half as many keys on DeiT-Tiny and, for $k\le8$, on Pythia-70M.
