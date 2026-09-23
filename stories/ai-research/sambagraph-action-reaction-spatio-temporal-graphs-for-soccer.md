---
title: "SambaGraph: Action-Reaction Spatio-Temporal Graphs for Soccer Tactical Response Modeling"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.25569"
authors: ["Abel A. Reyes-Angulo, Henry O. Velesaca, Steven Araujo"]
date: "Wed, 23 Sep 2026 00:00:00 -0400"
score: 40
guid: "oai:arXiv.org:2609.25569v1"
image: ""
generated: "2026-09-23T19:07:00+05:30"
---

arXiv:2609.25569v1 Announce Type: new Abstract: Soccer tactics are interactive: an attacking action changes the opponent's defensive problem, and the observed response depends on the multi-agent match state. We introduce SambaGraph, an action--reaction spatio-temporal graph dataset and benchmark for soccer tactical response modeling. From tracking and event data for all 64 matches of the 2022 FIFA World Cup, we curate 4,070 action-centered episodes represented as temporally aligned 23-node player--ball graph sequences with attack/defense views, response labels, and 26,270 split-safe attack--defense pairs. We study three questions: whether observed responses can be classified from graph episodes, whether successful defenses can be retrieved for a query attack, and whether graph-derived summaries support grounded LLM reasoning. A compact signature MLP obtains $0.796\pm0.007$ macro-F1 for response classification, while a fused graph--signature dual encoder reaches $0.471\pm0.029$ Hit@5 and $0.655\pm0.051$ Hit@10 for full-bank defensive retrieval. Hard negatives maximize pair discrimination but not retrieval quality. Local LLMs underperform supervised encoders for direct classification and do not improve over a strong original order in eight-candidate reranking, but they provide grounded tactical rationales. These results position SambaGraph as a reproducible benchmark for graph-based soccer strategy-response research. Code and dataset are available at: https://github.com/areyesan/SambaGraph.
