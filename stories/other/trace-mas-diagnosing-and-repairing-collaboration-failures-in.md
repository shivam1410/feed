---
title: "TRACE-MAS: Diagnosing and Repairing Collaboration Failures in Multi-Agent Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.23362"
authors: ["Zekai Chen, Yihan Sun, Xunkai Li, Xun Wu, Xinmo Jin, Yinlin Zhu, Haodong Lu, Xuaner Chen, Rong-Hua Li"]
date: "Thu, 19 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.23362v1"
image: ""
generated: "2026-11-19T19:00:31+05:30"
---

LLM-based multi-agent systems (MAS) rely on not only individual agent behaviors but also the interactions that connect agents, including message exchanges and task dependencies. Existing MAS safeguards mainly perform agent-level anomaly detection, which becomes insufficient when failures originate from agent interactions and detected anomalies do not necessarily reveal their true sources. To address this limitation, we propose \textbf{TRACE-MAS}, a finer-grained framework for diagnosing and repairing MAS failures. TRACE-MAS learns normal collaborative execution patterns from benign trajectories and detects deviations in agent state changes, message transitions, and task dependency evolutions. It further identifies responsible execution elements through source-aware attribution and selects minimal interventions to restore collaboration while preserving task-critical capabilities. Experiments on five MAS benchmarks demonstrate that TRACE-MAS significantly improves root-cause localization accuracy by \textbf{60.2}\% and achieves consistent gains in task recovery over strong MAS safeguards.
