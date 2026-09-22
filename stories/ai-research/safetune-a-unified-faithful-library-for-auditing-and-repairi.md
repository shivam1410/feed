---
title: "SafeTune: A Unified Faithful Library for Auditing and Repairing Safety Drift in Fine-Tuned LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22153"
authors: ["Pratinav Seth, Saisab Sadhu, Anshul Kaushal, Vinay Kumar Sankarapu"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 75
guid: "oai:arXiv.org:2609.22153v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22153v1 Announce Type: new Abstract: Methods for addressing safety drift in fine-tuned Large Language Models (LLMs) are scattered across incompatible implementations, lifecycle stages, and evaluation protocols, making them difficult to adopt and compare. We introduce SafeTune, a source-available library that unifies four intervention paradigms: post-hoc weight recovery, safety-constrained fine-tuning, gradient-based unlearning, and inference-time steering, alongside shared interpretability, evaluation, and deployment utilities. SafeTune provides a consistent configuration-driven workflow while preserving the distinct inputs and intervention points each paradigm requires. Its modular registry supports new methods, benchmarks, judges, models, and fine-tuning domains without redesigning the surrounding pipeline. We demonstrate SafeTune through controlled comparisons and finance and medical deployment case studies, showing how it characterizes safety drift, evaluates feasible interventions on common refusal-behavior and capability evaluations, and supports calibrated or layered mitigation.
