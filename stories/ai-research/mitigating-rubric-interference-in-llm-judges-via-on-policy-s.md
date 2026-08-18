---
title: "Mitigating Rubric Interference in LLM Judges via On-Policy Self-Distillation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14684"
authors: ["Dingyao Yu, Tong Zhang, Yutao Mou, Yunxiao Zhang, Wei Ye, Shikun Zhang"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14684v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14684v1 Announce Type: new Abstract: LLM judges increasingly evaluate responses against fine-grained rubric checklists. When a sample requires multiple rubrics, current methods typically assess each in a separate inference call. Evaluating all rubrics in a single pass is a natural alternative with greater efficiency, but we find that it introduces rubric interference: the verdict on one rubric shifts depending on which other rubrics are co-present. In a preliminary study, only one-third of samples receive fully consistent verdicts when evaluated under rubric sets of varying composition. We develop a measurement framework that probes interference through four controlled operations: rubric set expansion, subsetting, reordering, and noise injection. To mitigate interference without external supervision, we propose Self-Anchored Rubric Alignment (SARA). SARA uses a model's own single-rubric judgments as stable anchors and aligns multi-rubric reasoning with these anchors through on-policy self-distillation. We validate SARA on three datasets (HealthBench, FLASK, ResearchQA) and two model families (Qwen3, Llama-3.1). SARA consistently improves evaluation consistency while maintaining agreement with both base models and GPT-4.1 as a reference judge. Furthermore, the learned consistency transfers across datasets, confirming that SARA teaches a general capability rather than fitting dataset-specific patterns.
