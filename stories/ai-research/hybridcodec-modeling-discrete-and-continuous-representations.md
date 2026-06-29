---
title: "HybridCodec: Modeling Discrete and Continuous Representations for Efficient Speech Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27627"
authors: ["Artem Ploujnikov, Francesco Verdini, Samir Sadok, Mirco Ravanelli"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.27627v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27627v1 Announce Type: new Abstract: Discrete audio representations have become increasingly popular for building multimodal text-audio systems and integrating audio capabilities into Large Language Models (LLMs). However, numerous studies report performance degradation on various downstream tasks due to information loss during discretization. To address this, we propose a novel approach combining temporally compressed discrete tokens with dimensionality-reduced continuous residuals. Our framework consists of a hybridized discrete-continuous focal modulation codec and a hybrid Transformer. This architecture performs autoregressive inference in the discrete domain, coupled with non-autoregressive prediction and continuous residual upsampling. Experimental results show that our approach significantly improves the retention of speaker characteristics compared to discrete-only methods, while simultaneously reducing the number of required autoregressive steps.
