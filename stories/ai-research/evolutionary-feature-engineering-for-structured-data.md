---
title: "Evolutionary Feature Engineering for Structured Data"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.01548"
authors: ["Ege Onur Taga, Yilin Zhuang, M. Emrullah Ildiz, Petros Mol, Abhimanyu Das, Karthik Duraisamy, Samet Oymak"]
date: "Fri, 03 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.01548v1"
image: ""
generated: "2026-07-03T19:05:12+05:30"
---

arXiv:2607.01548v1 Announce Type: new Abstract: Large language models are increasingly used as open-ended search operators in evolutionary optimization. We introduce Evolutionary Feature Engineering (EFE), a framework for using LLM-based evolution to discover preprocessing transformations for structured data. EFE represents transformations as Python programs with a standardized fit/transform interface, allowing them to be inserted directly into existing machine learning pipelines. During evolution, candidate programs are refined using dataset context, summary statistics, and downstream performance feedback on validation set. We instantiate EFE in two settings. For time-series forecasting, EFE-Time learns invertible, dataset-specific normalizations that improve off-the-shelf time-series foundation models. It reduces forecasting errors (MASE, WQL, MAE) 3% or more when averaged across datasets and improvements are as much as 19% on the COVID-Deaths dataset. Notably, these improvements occur with recent TSFMs such as Chronos-2. For tabular prediction, EFE-Tab evolves compact feature programs that add useful interpretable features and remove redundant ones, improving or matching existing LLM-based feature-engineering methods. We found EFE-Tab to be particularly effective on classical decision trees, where small sets of evolved features yield competitive accuracy while preserving interpretability. Overall, EFE demonstrates that LLM-based evolution can improve both accuracy and interpretability when automatically tackling structured data.
