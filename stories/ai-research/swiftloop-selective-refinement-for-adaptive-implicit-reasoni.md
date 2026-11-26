---
title: "SwiftLoop: Selective Refinement for Adaptive Implicit Reasoning in Looped Transformers"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.31481"
authors: ["Tianyi Zhao, Ke Wan, Chen Chen"]
date: "Wed, 25 Nov 2026 00:00:00 -0500"
score: 30
guid: "oai:arXiv.org:2611.31481v1"
image: ""
generated: "2026-11-26T13:13:26+05:30"
---

Looped Transformers advance implicit chain-of-thought reasoning through recurrent latent refinement. However, existing looped reasoners typically employ fixed-depth recurrence, updating all latent positions at every iteration and incurring redundancy when further refinement is unnecessary. We introduce \textsc{SwiftLoop}, an inference-time framework for selective recurrent refinement through position-wise freezing, enabling adaptive computation allocation across both recurrent depth and active width. SwiftLoop learns lightweight freezing policies through hindsight-guided supervision derived from two complementary criteria: K/V reusability at the internal representation level and functional impact at the output level. At inference time, these policies guide adaptive freezing based on observed hidden states. Extensive experiments demonstrate that SwiftLoop achieves favorable accuracy--computation trade-offs over fixed-loop inference and adaptive baselines, with measured inference acceleration. Beyond implicit reasoning, we further demonstrate its applicability to recurrent prompt prefilling in general looped models.
