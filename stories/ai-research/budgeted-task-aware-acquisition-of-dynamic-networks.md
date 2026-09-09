---
title: "Budgeted Task-Aware Acquisition of Dynamic Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.05862"
authors: ["Zihe Zhou"]
date: "Wed, 09 Sep 2026 00:00:00 -0400"
score: 58
guid: "oai:arXiv.org:2609.05862v1"
image: ""
generated: "2026-09-09T19:07:26+05:30"
---

arXiv:2609.05862v1 Announce Type: new Abstract: Learning on dynamic graphs is difficult when changes in the underlying network are only partially observed. Acquiring current graph information incurs observation and computational costs, making complete updates impractical under limited resources. This paper focuses on budgeted task-aware acquisition on dynamic networks, where a model needs to decide which stale graph information to refresh for a downstream task. We propose Scout, a lightweight framework that learns the task value of querying each node from the maintained graph and observation history. Our evaluation covers one synthetic and four real-world dynamic networks, two downstream tasks, nine acquisition baselines, and several query budgets. Scout achieves the highest mean downstream performance in 19 of the 21 benchmark-budget settings. Task-utility supervision also outperforms structural-change supervision in 13 of the 16 real-world settings. On the same dynamic network, task-matched acquisition improves link-prediction AUC by 0.012-0.016 and node-classification accuracy by 0.064-0.09 over task-mismatched acquisition. These results show that useful graph observations depend on the downstream task and that limited observation budgets can be allocated more effectively by learning directly from downstream utility.
