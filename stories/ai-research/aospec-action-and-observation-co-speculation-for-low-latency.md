---
title: "AOSpec: Action and Observation Co-Speculation for Low-Latency Agent Serving"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.00881"
authors: ["Hao Mark Chen, Jinnan Guo, Wayne Luk, Hongxiang Fan"]
date: "Tue, 04 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.00881v1"
image: ""
generated: "2026-08-04T20:29:16+05:30"
---

arXiv:2608.00881v1 Announce Type: new Abstract: Large language model agents increasingly act through stateful tools, yet model generation and environment execution remain serialized at every step. As decoding accelerates, tool execution becomes a growing bottleneck. Existing action- or observation-only speculation leaves much of this latency exposed: value is concentrated in a few slow calls, some outcomes emerge only through execution, and longer lookahead typically requires an increasingly unlikely chain of action predictions. We present AOSpec, a lossless framework that co-speculates actions and observations across the full agent-environment loop. Expected Value Decoding (EVD) directs observation speculation toward outcomes with the greatest expected latency benefit, optimizing expected time hidden rather than hit rate. For outcomes only execution can reveal, AOSpec launches latency-critical target actions in isolated forks that contain their effects, while Joint Action-State Verification (JASV) verifies both the action and its origin state against committed execution before reuse. JASV recasts long-horizon action dependency from full-chain prediction into target action-state verification, breaking the lookahead--accuracy tradeoff and unlocking long-range overlap without sacrificing serial semantics. Across Terminal-Bench serving settings spanning four harnesses, five actor models, and five serving speeds, AOSpec outperforms every practical baseline, reducing mean end-to-end latency by 11.8-32.5% and p99 latency by up to 42.8%. Its gains increase as decoding accelerates, and its observation model transfers from Terminal-Bench to SWE-bench Verified without retraining.
