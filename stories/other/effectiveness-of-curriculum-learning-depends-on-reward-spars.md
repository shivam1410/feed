---
title: "Effectiveness of Curriculum Learning Depends on Reward Sparsity and Competing Optima"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.31884"
authors: ["John J. Vastola, Ann Huang, Satpreet H. Singh, Samuel J. Gershman, Kanaka Rajan"]
date: "Tue, 27 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.31884v1"
image: ""
generated: "2026-10-27T20:42:10+05:30"
---

While animals and people tend to learn a task more quickly and reliably when they first train on simpler versions of it, curriculum learning's effectiveness in artificial settings varies, and appears substantially greater in reinforcement learning than in supervised learning. In this work, we construct and analyze a minimal model of policy learning to better understand why. We consider an open-loop, episodic target interception task whose parameters---especially how close the agent must be to the target to receive an informative reward signal---can be chosen so that the agent either receives informative rewards frequently ('dense' rewards) or rarely ('sparse' rewards). We mathematically and numerically analyze the dynamics of REINFORCE-based policy learning in both cases. In the dense reward case, curricula have only marginal benefits; in the sparse case, curricula can be required for learning to occur at all. We find that this is especially true when the agent has the conflicting goals of minimizing effort and accumulating high reward, since this can produce distinct reward landscape optima which compete with one another. Our characterization of useful curricula in this setting indicates that they address two issues: they (i) make rewards less sparse to speed up learning, and (ii) shape the reward landscape to steer agents away from bad local optima.
