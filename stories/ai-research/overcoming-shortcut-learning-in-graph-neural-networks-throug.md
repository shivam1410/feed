---
title: "Overcoming Shortcut Learning in Graph Neural Networks through Active Explanation Guidance"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14121"
authors: ["Taraneh Younesian, Steve Azzolin, Antonio Longa, Francesco Ferrini, Vincenzo Marco De Luca, Stefano Teso"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14121v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.14121v1 Announce Type: new Abstract: Graph Neural Networks (GNNs) can solve prediction tasks by unintentionally exploiting shortcuts---that is, edges, nodes, and features that correlate with but are not causal for the prediction---which compromise their reliability in out-of-distribution tasks. We introduce XIGL, an architecture-agnostic human-in-the-loop strategy for removing such shortcuts from GNNs. Our key insight is twofold. On the one hand, reliance on shortcuts can be detected by inspecting GNN explanations. On the other hand, once made aware of such shortcuts, sufficiently expert users can provide tailored corrective feedback, which helps deconfound the model. XIGL supports any query strategy; however, since corrective feedback can be expensive to acquire, we develop an active learning strategy for prioritizing explanations that are more likely to display shortcut behavior, lowering annotation and cognitive costs. We showcase the effectiveness of XIGL, including both existing and proposed explanation-based strategies, on several GNN architectures. Our implementation is available online.
