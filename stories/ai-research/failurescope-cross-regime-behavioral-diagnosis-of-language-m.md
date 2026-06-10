---
title: "FailureScope: Cross-Regime Behavioral Diagnosis of Language Model Weaknesses"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09878"
authors: ["Nicholas Saban"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 71
guid: "oai:arXiv.org:2606.09878v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09878v1 Announce Type: new Abstract: Standard benchmarks report aggregate accuracy, but practitioners need to know which specific capabilities a model lacks. We introduce FailureScope, a behavioral-diagnosis method that clusters evaluation probes by their cross-model pass/fail patterns (leave-one-model-out, LOMO), and show it yields stable, interpretable failure taxonomies across three regimes usually studied separately: single-turn benchmarks, multi-turn dialogue, and adversarial agent attacks. On 2,664 single-turn tasks across 18 models, taxonomy-conditioned sampling reaches Kendall's tau = 0.81 at 50 tasks (versus 0.34 for random selection), and cross-model failure prediction reaches AUC 0.88. The same primitive recovers interpretable clusters on a 363-task multi-turn corpus and on 630 adversarial agent traces, where it exposes a meta-failure mode: a 73-100 percentage-point gap between LLM-judge ASR and real execution. Cluster cohesion remains strong across all three regimes, which we take as evidence that behavioral clustering is a portable diagnosis primitive that generalizes beyond any single benchmark. We release the pipeline, three annotated corpora, and the cross-regime taxonomies.
