---
title: "LMT: A Bayesian Framework for Causal Discovery from Textual Alarm Records in Manufacturing Systems"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.09892"
authors: ["Xiaofeng Xiao, Jianhong Chen, Qiuzhuang Sun, Naichen Shi, Xubo Yue"]
date: "Wed, 10 Jun 2026 00:00:00 -0400"
score: 63
guid: "oai:arXiv.org:2606.09892v1"
image: ""
generated: "2026-06-10T19:39:28+05:30"
---

arXiv:2606.09892v1 Announce Type: new Abstract: Textual event records, such as alarm logs, have become an increasingly common data source in engineering and manufacturing systems. Beyond identifying correlations or recurring patterns, engineers are often interested in understanding which types of events causally trigger or influence other events during system operation. Textual event descriptions may contain semantic clues about such causal relationships, and recent large language models (LLMs) provide a promising tool for extracting these signals. However, relying solely on LLM-encoded textual information is insufficient for accurate causal discovery, since semantic patterns do not directly reveal causal mechanisms and may confuse causation with correlation or frequent sequential patterns. To address these challenges, we propose \textbf{LMT}, a Bayesian causal discovery framework for engineering event data that jointly leverages textual descriptions and timestamps. Specifically, LMT first uses LLMs to extract semantic causal signals from event descriptions and constructs a prior distribution over causal graphs among event types or event clusters. It then incorporates temporal evidence through a Poisson-process-based likelihood, allowing the LLM-informed prior to be refined by timestamp-based statistical evidence. By integrating the textual and temporal information, LMT produces a causal graph that is both interpretable and data-supported. Simulation studies show that the proposed framework is effective across different settings and is especially advantageous in small-sample alarm-event scenarios.
