---
title: "Diff Mining: Logit Differences Reveal Finetuning Objectives"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26462"
authors: ["Greg Kocher, Robert West, Cl\\'ement Dumas, Julian Minder"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.26462v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26462v1 Announce Type: new Abstract: Finetuning has become the gold standard for refining existing behaviors and inducing new ones in language models, yet it often remains unclear exactly which behaviors emerge during this process. As models grow ever more capable, understanding finetuning better becomes increasingly important, particularly since unwanted behaviors may arise during finetuning. In this paper, we introduce Diff Mining, a simple yet effective framework for identifying what a finetuned model has learned by comparing its logits to those of its base model. Diff Mining effectively surfaces salient tokens that are amplified in the finetuned model, serving as a fingerprint of its training -- even on text unrelated to the finetuning domain. Unlike many existing model diffing methods which require model internals, Diff Mining only needs access to output logits and scales to large models. The framework consists of two modular stages: (i) extracting per-context logit differences between the finetuned and base models on a reference corpus, and (ii) aggregating the resulting signals to construct an interpretable token set representing the finetune. For aggregation, we explore both a simple Top-K frequency method and a Non-negative Matrix Factorization (NMF)-based approach for disentangling multiple finetuning objectives into distinct token clusters. Empirically, Diff Mining succeeds across diverse settings: on finetune domain detection, it significantly outperforms state-of-the-art model diffing methods both in identifying relevant tokens and in downstream performance when an interpretability agent is given access to the extracted token set; on models with injected biases, it identifies more than one third of the biases without targeted probing. Overall, our framework shows promise in developing auditing tools to detect finetuning objectives.
