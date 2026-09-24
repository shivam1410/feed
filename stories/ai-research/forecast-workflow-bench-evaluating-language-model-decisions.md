---
title: "Forecast Workflow Bench: Evaluating Language-Model Decisions with Budgeted Forecast Tools"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.27385"
authors: ["Shunya Nagashima"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 52
guid: "oai:arXiv.org:2609.27385v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.27385v1 Announce Type: new Abstract: Time-series foundation models (TSFMs) provide forecasts for operational decisions, but accuracy alone does not determine their value. Evaluating agents that use these models requires measuring decision quality and forecast cost. FWBench evaluates this capability on 1,251 electricity and cycle-hire cases using fixed forecast tools and simulated capacity contracts. Agents select models, histories and horizons, then submit capacities to minimize a stated loss-cost objective. We evaluated two hosted and eight local configurations, including small language models, and tested local models with and without TSFMs. GPT-6 Astra bought inexpensive short-horizon forecasts selectively, using 2.5% of the budget, and outperformed fixed policies when the saved decisions were scored with three loss-cost weightings. FWBench enables reproducible evaluation of how language models select and use time-series forecasts to make decisions under cost constraints.
