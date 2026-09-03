---
title: "A Unified Particle Filter LSTM for Data-Driven Process Simulation"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01967"
authors: ["Parvin Malekzadeh, Opher Baron, Dmitry Krass"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.01967v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01967v1 Announce Type: new Abstract: Data-driven process simulation aims to generate realistic case trajectories from historical event logs without requiring an explicitly specified model of the underlying dynamics. Deep sequence models can capture complex temporal dependencies through next-activity probabilities and conditional time distributions. However, event logs provide only a partial view of the underlying process state, often recording activity completions without the corresponding service-start times. Consequently, the same observed process history may be consistent with multiple plausible latent process conditions, whereas standard recurrent models compress each process prefix into a single deterministic recurrent state. We propose a Unified Particle Filter LSTM (Unified PF-LSTM) that maintains and sequentially updates a weighted set of recurrent-state hypotheses. We summarize this particle belief using its weighted mean and learned features based on the moment-generating function. The resulting representation is used to predict a categorical distribution over the next activity and conditional quantiles of the current activity's sojourn time. The framework is trained end-to-end from event-log data and evaluated on three real-world emergency department datasets. The results show that the proposed framework consistently outperforms the considered data-driven baselines in reproducing routing, duration, and system-level behavior across all datasets, with particularly strong gains in settings where complex process dynamics are only partially reflected in the available event logs.
