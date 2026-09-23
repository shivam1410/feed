---
title: "PermuFormer: Multi-Task Pretraining for Permutation Representation in Algebraic Combinatorics"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25438"
authors: ["Henry Kvinge"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.25438v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25438v1 Announce Type: new Abstract: Diverse pretraining has been shown to be an effective method for learning reusable, domain-aware representations that provide a starting point for fine-tuning on downstream tasks. While much of the excitement in AI for math has been concentrated in the use of frontier reasoning models to solve well-specified problems through the medium of language, narrow, specialized models remain an important component of the AI for math ecosystem. In contrast to large language models, specialized models are usually trained directly on the mathematical objects themselves (e.g., graphs, sequences of numbers) rather than the textual descriptions that characterize these objects. However, the common practice of training specialists from scratch may limit their ability to develop domain-aware representations that capture the multifaceted nature of mathematics. In this paper, we describe an approach to pretraining for permutation-focused tasks in algebraic combinatorics. We introduce PermuFormer, an autoregressive transformer trained on a 2.8 billion token multi-task, multi-encoding corpus. We show that PermuFormer is an effective starting point for fine-tuning on basic tasks unseen during pretraining and more complex research-level tasks, frequently outperforming the same architecture trained from scratch, baseline MLPs, and a fine-tuned generic language model of comparable size. We also analyze some of the internal mechanisms by which PermuFormer learns to solve training tasks. For example, we show that while some tasks can be linearly decoded directly from the internal representation of the prompt, other tasks require multiple rounds of generation before the answer can be decoded.
