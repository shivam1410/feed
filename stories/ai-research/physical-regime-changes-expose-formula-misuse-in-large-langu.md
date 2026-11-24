---
title: "Physical regime changes expose formula misuse in large language models"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28669"
authors: ["Maohao Ran, Yanting Zhang, Chendong Ma, Jun Song"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 50
guid: "oai:arXiv.org:2611.28669v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Large language models (LLMs) are increasingly employed for scientific computing across the Earth and environmental sciences, but problems in these fields often involve distinct physical regimes. LLMs may fail to recognize these regime-dependent constraints, applying formulas outside their domains of validity and producing plausible but physically incorrect results. We systematically investigate these failures through controlled experiments and assess whether post-training can improve regime-aware reasoning. Across 72 physical mechanisms, we find frontier LLMs frequently misapply formulas outside their regimes of validity, reducing accuracy by 13-57 percentage points. Reinforcement learning with verifiable rewards enables Qwen3.5-9B to match DeepSeek V4 Flash (284B) on regime-dependent tasks, but its effectiveness is limited by the formulas available in the base model. Combining supervised fine-tuning on a few worked examples with reinforcement learning improves accuracy by 61 percentage points, while distillation from a teacher supplied with the correct formula raises accuracy from 0% to 71%.
