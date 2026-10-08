---
title: "FinVector-Market-4B: A Controlled Study of LoRA Adaptation for Structured Financial Tasks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.08882"
authors: ["Alina Khaybullina"]
date: "Thu, 08 Oct 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2610.08882v1"
image: ""
generated: "2026-10-08T19:08:02+05:30"
---

FinVector-Market-4B adapts Qwen/Qwen3.5-4B with rank-16 LoRA on a 22,000-example corpus for structured financial tasks. We evaluate the base and adapted models on the same 600-example benchmark under implicit and explicit JSON-schema contracts. Supplying the schema alone raises base-model JSON validity from 0% to 91.3%. Under matched explicit prompting, the frozen scores improve from 14.7% to 40.0% for FinQA answer exact match, from 48.0% to 82.7% for calculator-expression correctness, from 20.1% to 89.5% for scenario branch-label agreement, and from 52.4% to 87.2% for implication-direction agreement. A post-hoc policy-scoring audit shows that the reported macro-F1 decline reflects a changing label set; using the same three target classes gives 77.4% for the base and 83.1% for the adapter. Filing overlap and calculator-target inconsistencies qualify the benchmark's generalization claims. The results show that compact financial domain adaptation can produce substantial task-specific gains beyond output-format learning under matched prompting, with gains bounded by the evaluated task distribution and prompt contract.
