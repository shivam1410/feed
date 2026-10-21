---
title: "Zero-Shot Tabular Learning via Hypergraph Reasoning with LLMs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.23923"
authors: ["Geon Lee, Kyungho Kim, Dongwon Choi, Juyeon Kim, Shinhwan Kang, Kijung Shin"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2610.23923v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Tabular data are prevalent across diverse domains such as healthcare and finance. Zero-shot tabular learning aims to make predictions without labeled data. However, existing LLM-based approaches rely on row-wise prompting, resulting in high inference cost and limited use of inter-row dependencies. In this work, we propose TABHGR+, an efficient relation-aware zero-shot framework for tabular data that leverages LLM-generated rules to label and group rows. Specifically, based on column and task descriptions, we use LLMs to generate rules that assign weak labels to all rows. To refine these noisy weak labels, we construct a hypergraph by grouping semantically related rows using LLM-generated rules and perform hypergraph-based label propagation. Lastly, we further enhance the LLM-generated hypergraph for propagation, which is potentially sub-optimal, by assigning label-adaptive weights to hyperedges. By requiring only a constant number of LLM calls independent of dataset size, TABHGR+ substantially reduces inference cost while achieving higher classification accuracy than zero-shot and strong few-shot baselines.
