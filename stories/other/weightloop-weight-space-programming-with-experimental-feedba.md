---
title: "WeightLoop: Weight-Space Programming with Experimental Feedback"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.07319"
authors: ["Mengran Li, Bo Li, Weijing Zhao, Chengyang Zhang, Boyu Zhang, Jinfeng Xu, Zelin Zang, Victor C. M. Leung, Stan Z. Li"]
date: "Fri, 06 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.07319v1"
image: ""
generated: "2026-11-06T21:37:05+05:30"
---

Weight-space programming (WSP) shows that language models can reason about and rewrite neural network weights; recursive self-improvement (RSI) motivates feedback-driven improvement. Models guiding experiments receive concrete feedback: completed assays reveal prediction errors and inform what to test next. We introduce WeightLoop, a framework that turns experimental feedback into persistent updates to deployed predictors. GPT-6 Astra inspects a task specification and the model implementation, then writes a bounded, reusable parameter-editing program. As new measurements arrive, the program identifies prediction discrepancies, validates candidate edits using observed outcomes, and writes the selected changes back to the original model. The editor remains fixed while the predictor evolves, enabling repeated updates without further LLM calls or gradient retraining while preserving the original inference interface. In offline replay, targeted edits improve mean ranking utility in seven of eight endpoint-budget settings (all eight versus random edits) and mean final discovery across three sequential tasks. WeightLoop connects WSP with an RSI-inspired improvement loop, making experimental evidence a direct driver of model change and subsequent decisions.
