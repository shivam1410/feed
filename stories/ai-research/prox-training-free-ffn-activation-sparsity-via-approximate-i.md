---
title: "Prox: Training-Free FFN Activation Sparsity via Approximate Intermediate-Channel Salience in LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.27591"
authors: ["Jinyi Liu, Wei Chen, Pengyu Chen, Xinyi Yuan, Minghe Bai, Guoquan Wu, Jun Wei"]
date: "Fri, 31 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.27591v1"
image: ""
generated: "2026-07-31T19:06:14+05:30"
---

arXiv:2607.27591v1 Announce Type: new Abstract: Feed-forward networks (FFNs) dominate memory traffic and computation in large language model (LLM) inference, making them a primary target for activation sparsification. However, existing training-free methods suffer substantial model-quality degradation at high sparsity due to limitations in their channel-selection strategies. We observe that the SwiGLU intermediate state provides a highly effective channel-selection signal, but obtaining it requires costly dense computation. To address this, we present \emph{Prox}, a two-stage training-free framework for sparse SwiGLU FFNs. Prox hinges on the key insight: sparse execution requires only the channel mask induced by the intermediate state, which can be constructed from the magnitude ranking of its entries rather than their exact values. Specifically, Stage 1 uses input sparsity and quantized proxy weights to construct a shared mask; Stage 2 computes the selected channels exactly, enabling sparse execution of all three projections. Across ten LLMs from six model families, Prox outperforms training-free baselines at all sparsity levels, achieves up to a $1.99\times$ end-to-end decoding speedup at 70\% FFN sparsity, and is compatible with quantization and sparse attention.
