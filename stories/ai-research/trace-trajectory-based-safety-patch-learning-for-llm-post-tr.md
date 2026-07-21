---
title: "TRACE: Trajectory-Based Safety Patch Learning for LLM Post-Training Realignment"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16242"
authors: ["Changyue Li, Jiaming He, Youliang Yuan, Jialin Wu, Boxi Yu, Zhicong Huang, Pinjia He"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2607.16242v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16242v1 Announce Type: new Abstract: Fine-Tuning-as-a-Service (FTaaS) platforms let users train large language models (LLMs) on customized tasks, but this pipeline could erode models' safety alignment. In practice, service providers need to recover models' safety without re-running full alignment, or destroying the utility gained from customized tasks. A line of existing work refers to model parameter merging, which adds a safety patch on the fine-tuned model parameters to shift the model away from unsafe tendencies. However, this merging-based paradigm is fundamentally bottlenecked by task-safety update entanglement: downstream task updates and the safety patch often overlap in their dominant directions, so the merge strength is intrinsically hard to calibrate. If the safety vector is scaled too weakly, harmful components could still dominate, preventing the model from returning to a safe region; if it is scaled too aggressively, it suppresses task-relevant directions and degrades utility. To solve this problem, we shift the focus of merging-based methods from designing online merging operators to offline patch learning, and seek a safety patch that minimally interferes with task-relevant directions while retaining decisive control over unsafe behaviors. We propose TRACE, a trajectory-based safety patch learning framework that (i) simulates harmful tuning trajectories to generate progressively corrupted states, and (ii) optimizes a plug-in patch to recover safety while maintaining utility across varying corrupted base states. Across six benchmarks and two models, TRACE consistently dominates the safety-utility frontier. TRACE reaches nearly 100% safety on all settings, while maintaining comparable utility to the undefended fine-tuned model.
