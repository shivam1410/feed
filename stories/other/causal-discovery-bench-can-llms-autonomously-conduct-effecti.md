---
title: "Causal Discovery Bench: Can LLMs Autonomously Conduct Effective Experiments?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.09934"
authors: ["Zhuoyang Liu, Ning Peng, Ming Shen, Zijun Gao"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.09934v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

As large language model (LLM) agents get actively adopted for autonomous research, they must not only reason over existing evidence, but also design informative experiments, allocate resources, analyze sequential observations, and decide when to stop and make conclusions. Yet these capabilities remain poorly measured. We introduce Causal-Discovery-Bench (https://github.com/mshen1019/causal-discovery-bench), a verifiable sandbox with configurable structural equation models and resource constraints to evaluate sequential experimental design and causal discovery without domain-semantic cues. Across 3,802 episodes with 13 models from 5 vendors, we analyze agent behavior along 40 metrics in seven families. Agents' performance exhibits a four-level difficulty hierarchy spanning single-experiment design, sequential exploration of causal relationships, resource-aware experimentation balancing cost and statistical power, and autonomous resolution of conflicting evidence. We identify a substantial performance gap between causal inference from correctly curated evidence and navigating causal discovery through autonomous experimentation: Analyzing agents' action trajectories attributes 94.5% of their mistakes to experimental design rather than to inference, which is further consolidated with ablation studies. Relaxing resource constraints alone does not reliably resolve failures in sequential discovery. In contrast, basic statistical tools substantially improve performance across multiple model families, while advanced tools provide little additional benefit when models lack prerequisite lower-level capabilities.
