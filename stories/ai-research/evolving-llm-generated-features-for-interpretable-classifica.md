---
title: "Evolving LLM-Generated Features for Interpretable Classification"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.03951"
authors: ["Jack Butler, Zainab Afolabi, Nikita Kozodoi"]
date: "Tue, 06 Oct 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2610.03951v1"
image: ""
generated: "2026-10-06T22:55:59+05:30"
---

Large language models (LLMs) are increasingly used as classifiers, yet they operate as opaque systems whose decisions are difficult to interpret, which complicates their use in regulated domains such as credit scoring or medical diagnosis. We propose an evolutionary framework that iteratively discovers natural language feature definitions (rubrics) for interpretable classification. An LLM generates candidate binary features, evaluates each sample against them, and the resulting vectors can be used to train a transparent classifier such as logistic regression. The feature set evolves over multiple iterations guided by classification errors, per-class activation rates, and feature ablation scores. We evaluate across three benchmarks, including a credit risk dataset representative of regulated domains, comparing single-shot LLM rubrics, evolved rubrics, and direct zero-shot LLM classification. Evolved features improve over single-shot rubrics by +2.9 pp on average and outperform zero-shot LLM classification on two of three tasks, while providing fully auditable decision logic. On the credit risk task, the zero-shot LLM performs at chance (50.7%) with a strong bias toward a single class, whereas evolved features achieve balanced, interpretable predictions. Crucially, this failure is invisible in aggregate accuracy and surfaces only under per-class auditing. Analysis reveals that evolution is most effective when label boundaries cannot be inferred from category names alone or when the LLM lacks reliable domain-specific reasoning.
