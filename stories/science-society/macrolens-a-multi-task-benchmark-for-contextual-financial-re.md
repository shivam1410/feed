---
title: "MacroLens: A Multi-Task Benchmark for Contextual Financial Reasoning under Macroeconomic Scenarios"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.24950"
authors: ["Patara Trirat, Jin Myung Kwak, Jay Heo, Heejun Lee, Sung Ju Hwang"]
date: "Thu, 25 Jun 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.24950v1"
image: ""
generated: "2026-06-25T19:05:48+05:30"
---

arXiv:2606.24950v1 Announce Type: new Abstract: Financial decision-making is contextual: forecasting prices, valuing companies, and assessing event exposure weigh price history, accounting fundamentals, macroeconomic regime, and contemporaneous text. A benchmark over these four signals is hard to build because finance violates four assumptions of time-series evaluation: text must be gated by its publication date to prevent look-ahead, quarterly fundamentals are reported with a one- to ninety-day lag, filing text is partly redundant with the numerical statement fields it accompanies, and macroeconomic regimes leak across calendar splits. No public benchmark addresses all four signals jointly. MacroLens covers 4,416 U.S. small- and micro-cap equities over 2021-2026. Seven tasks share one point-in-time panel of prices, 46.8M XBRL accounting facts, 53 macroeconomic series, 295,860 SEC filings, and 215,882 news articles, plus a scenario layer of 1,130 macroeconomic events across 49 types automatically detected and rendered as natural language. Tasks span contextual forecasting, public and private valuation, statement generation from fundamentals and descriptions, scenario-conditioned returns, and real-estate valuation. We evaluate 19 methods across six families spanning naive heuristics through time-series foundation models, fine-tuned LLM-based time-series models, and zero-shot large language models (LLMs), plus a five-step feature-context ablation on two frontier LLMs and a gradient-boosted baseline. MacroLens is released at https://huggingface.co/datasets/DeepAuto-AI/MacroLens.
