---
title: "Online LLM Selection via Constrained Bandits with Time-Varying Demand"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.17489"
authors: ["Yin Huang, Qingsong Liu, Jie Xu"]
date: "Wed, 17 Jun 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2606.17489v1"
image: ""
generated: "2026-06-17T19:06:27+05:30"
---

arXiv:2606.17489v1 Announce Type: new Abstract: Large Language Models (LLMs) are increasingly deployed in edge-cloud inference systems to handle diverse user tasks with heterogeneous accuracy, latency, and cost profiles. Selecting the appropriate LLM for each incoming task is critical for ensuring service quality and efficient resource utilization. However, model heterogeneity, stochastic and unknown performance characteristics, and time-varying task demands make static selection strategies inadequate. Real-world deployments often impose hard resource budgets such as monetary expenditure limits, along with soft service-level requirements such as latency guarantees. These constraints introduce additional challenges for online decision-making. We formulate this problem as a constrained stochastic bandit learning task, where the learner sequentially selects models under both packing-type (hard) and covering-type (soft) constraints, while adapting to time-varying task demand. The learner operates without access to the underlying reward, cost, or latency distributions and must rely on partial feedback. We develop a novel online learning algorithm that leverages confidence-bound estimates and demand predictions to balance reward maximization with long-term constraint satisfaction. We provide theoretical guarantees showing sublinear regret and sublinear covering constraint violations compared to an offline benchmark with full information. Experimental results on synthetic workloads demonstrate the effectiveness and robustness of our approach in dynamic, resource-constrained environments.
