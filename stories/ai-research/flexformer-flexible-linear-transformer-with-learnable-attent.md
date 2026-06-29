---
title: "Flexformer: Flexible Linear Transformer with Learnable Attention Kernel"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27748"
authors: ["Haoran Zhang, Feng Zhou"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27748v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27748v1 Announce Type: new Abstract: Transformer models rely on attention mechanism to capture long-range dependencies but suffer from quadratic complexity, limiting their scalability to long sequences. Kernel-based linear attention reduces this complexity but typically relies on fixed or weakly learnable kernels, restricting expressiveness and performance. In this work, we propose Flexformer, a flexible linear Transformer that learns attention kernels in a fully data-driven manner. Flexformer builds on random Fourier feature-based linear attention and treats spectral frequencies as trainable parameters, enabling the model to learn a broad family of attention kernels. We develop both stationary and nonstationary variants, with the latter offering strictly greater expressiveness. Extensive experiments on language modeling and sequence classification demonstrate that Flexformer consistently outperforms baselines. Moreover, Flexformer can be effectively distilled from pretrained Transformers to recover softmax attention and exhibits strong kernel transferability across domains, achieving both high efficiency and competitive performance on long-sequence tasks.
