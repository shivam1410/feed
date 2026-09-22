---
title: "Success Leaves Detours: Learning Executable Walkthroughs for Long-Horizon Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.22120"
authors: ["Kaijie Chen, Chenyu Fang, Liang Yan, Bo Li, Bo Zhang, Peng Ye"]
date: "Tue, 22 Sep 2026 00:00:00 -0400"
score: 70
guid: "oai:arXiv.org:2609.22120v1"
image: ""
generated: "2026-09-22T19:08:22+05:30"
---

arXiv:2609.22120v1 Announce Type: new Abstract: Test-time self-evolving agents improve by reusing past experience, yet sparse-reward trajectories contain failures, loops, and detours, while summaries often omit the state conditions and action dependencies needed for execution. We study executable Walkthrough induction from sparse-reward trajectories: extracting compact, state-conditioned, and verifiable procedures. Our key observation is that delayed credit identifies actions associated with progress but cannot determine whether they produce facts required by later actions. We propose Trace, a credit-guided, dependency-grounded framework that compiles noisy trajectories into executable Walkthrough Memory. It detects progress anchors from rewards and persistent state changes, propagates credit to identify valuable transitions, and estimates action prerequisites from cross-episode success and failure evidence. Backward dependency slicing then traces required facts to their producers, extracting dependency-consistent action chains while removing irrelevant loops and detours. The resulting Walkthroughs encode entry conditions, ordered state--action--effect steps, and completion and failure predicates, supporting reuse, intermediate-state resumption, and programmatic verification. Experiments on J-TTL, WebShop, and ScienceWorld with three open-source LLMs show that Trace consistently outperforms eight test-time learning and memory baselines. Compared with the strongest baseline, it improves average AUC and Final-$3$ by $30.0%$ and $40.5%$, respectively, while using fewer inference tokens. These results show that long-horizon interaction benefits more from state-conditioned executable procedures than from complete trajectories or abstract summaries.
