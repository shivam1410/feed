---
title: "EvoRank: LLM-Guided Evolution of Multi-Objective Learning-to-Rank Pipelines"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22196"
authors: ["Rayhan Patel, Shabaz Patel"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 72
guid: "oai:arXiv.org:2609.22196v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22196v1 Announce Type: new Abstract: We present EvoRank, an open autonomous ranking engineer: an LLM-guided evolutionary loop that discovers complete Learning-to-Rank pipelines (features, models, losses, ensembles) for multi-objective e-commerce search. On the Expedia ICDM 2013 dataset, with relevance, conversion, and revenue as competing objectives, three independent runs each converge within 50 iterations (about ten dollars) on interpretable pipelines that beat an Optuna-tuned LambdaMART on 60k held-out queries, an advantage that persists at full data scale and places in the top 6 percent of the original competition. A first campaign, evolving only training objectives, builds the central design rule: it appeared to work on its selection fold (the small dataset it uses to pick winners) while a transfer audit, re-scoring winners on held-out data, showed the gains were almost entirely fitness noise (the randomness of its own scoring), and neither seeded domain knowledge nor richer diagnostic feedback changed what transferred. The deciding quantity is measurable in advance: search-space headroom relative to fitness noise. We package this as a headroom gate that predicts, before any LLM spend, whether the loop will pay off, and we release the system, the auditing tools, and a catalog of failure modes with their guardrails, so teams can apply the procedure to their own ranking stacks.
