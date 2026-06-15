---
title: "Utility-Constrained Policy Optimization"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14029"
authors: ["Mehrdad Moghimi, Bernardo Avila Pires"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.14029v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14029v1 Announce Type: new Abstract: Constrained MDPs (CMDPs) are a widely adopted framework for incorporating safety into RL agents; however, the framework does not support risk-sensitive constraints. This can be problematic: For example, CMDPs allow for optimal solutions that, in order to satisfy the risk-neutral constraints, mix infrequent catastrophic behaviors and frequent, overly conservative ones. Moreover, prior empirical results suggest that enforcing stricter, risk-sensitive constraints can improve performance even under risk-neutral evaluation. The natural framework to incorporate risk-sensitive constraints is utility-constrained MDPs (UCMDPs), but no practical solutions for this problem existed. In this work, we introduce a simple yet powerful methodology for UCMDPs and constrained RL. Besides allowing for risk-sensitive constraints, our framework does not require us to fix constraint limits in advance of training the agent, provided that a sensible range is known. This increases policy flexibility and, in practice, allows for adjustments to these limits at no extra training cost. Besides benefiting from the generality of the framework, our agent shows strong performance in practice, consistently matching or outperforming existing baselines in several Safety Gymnasium benchmark tasks.
