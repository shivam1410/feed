---
title: "Natively Unlearnable Large Language Models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.13873"
authors: ["Gaurav R. Ghosal, Pratyush Maini, Aditi Raghunathan"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 78
guid: "oai:arXiv.org:2606.13873v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.13873v1 Announce Type: new Abstract: Unlearning aims to remove the influence of specific training data sources, but this has proved challenging because the contributions of different sources are entangled within the model. Isolating source contributions to disjoint parameters makes removal easier, though it obstructs joint learning across sources. We propose NULLs (Natively Unlearnable LLMs), a model class that satisfies the two opposing goals of isolating source-specific contributions and learning jointly across sources, by training a set of shared backbone neurons alongside a pool of sparsely activated sinks. During training, information specific to a source naturally concentrates in its sinks while information shared across sources accumulates in the backbone. A source is then unlearned at deployment by disabling its corresponding sinks, with no gradient updates and no access to the retained data. We show that NULLs scales to Wikipedia's ~6M articles, isolating each as an independent source. Unlearning a single article removes knowledge specific to it while preserving facts shared with semantically related articles, closely matching retraining from scratch. We note that unlearning with NULLs is also robust: in a case study of unlearning the Harry Potter books, NULLs resists both adversarial extraction and relearning that reverses post-hoc unlearning. Finally, NULLs preserves general language capabilities, matching a standard transformer on downstream benchmarks. Together, these results suggest that source-level unlearning need not be an afterthought. It can be built natively into LLM training while retaining the benefits of shared representation learning.
