---
title: "SinkRec: Mitigating Semantic State Sink in Long Sequence Recommendation with Memory-Conditioned Gated Delta Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09888"
authors: ["Zhuang Zhuang, Zhipeng Wei, Ji Dai, Jie Chen, Fei Pan, Peng Jiang, Kun Gai"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2606.09888v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09888v1 Announce Type: new Abstract: Linear attention provides an efficient backbone for long-sequence recommendation by avoiding the quadratic cost of standard Transformers, but its compressed recurrent state can be dominated by repetitive behavior patterns. We identify this phenomenon as semantic state sink, where recurring semantics over-occupy the recurrent state and bias subsequent readouts. To mitigate semantic state sink, we propose SinkRec, a hybrid memory-transition looped architecture that decouples collaborative behavioral pattern storage from dynamic transition modeling. SinkRec externalizes recurring local patterns into a learnable conditional memory through residual vector quantization, reinjects the retrieved codes, and exposes memory key-value pairs to the attention block. It further introduces Temporal-Aware State-Relation Differential Gated DeltaNet (TDGD), which uses memory to purify recurrent writing and reading by suppressing memory-covered updates and removing memory-aligned readout responses. This design turns recurring semantics from state-competing signals into memory-retrievable patterns, allowing the recurrent state to focus on dynamic transitions and alleviating semantic state sink with linear-time efficiency. Experiments on public and industrial datasets demonstrate the effectiveness and efficiency of SinkRec.
