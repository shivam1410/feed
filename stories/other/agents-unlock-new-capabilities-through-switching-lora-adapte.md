---
title: "Agents unlock new capabilities through Switching LoRA Adapters as a Tool (SLAaaT)"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.17034"
authors: ["Kenneth Ge"]
date: "Thu, 20 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.17034v1"
image: ""
generated: "2026-08-20T19:00:16+05:30"
---

arXiv:2608.17034v1 Announce Type: new Abstract: Post-training can unlock new capabilities and improve performance on specialized tasks, but sometimes at the cost of catastrophic forgetting in other domains. This poses a problem in long agent trajectories that compose different capabilities. We reject this tradeoff by giving an agent a tool to switch between specialized LoRA adapters mid-trace. To test its effectiveness, we compose two synthetic coding tasks that are logically simple but require specialization. We find that this allows the model to solve problems it previously could not, that the model is able to switch autonomously (and find a new strategy that beats our human heuristic baseline on one task), and that this incurs an up to an 18x reduction in capability tax compared to an agent using only one specialized adapter. Our approach also substantially outperforms spawning subagents in both task capabilities and token usage.
