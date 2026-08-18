---
title: "Training and Evaluating Ethical Reinforcement Learning Agents on Per-Episode Distributions"
category: "Science & Society"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14642"
authors: ["Prabhjyot Singh, Majid Ghasemi, Mark Crowley"]
date: "Tue, 18 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.14642v1"
image: ""
generated: "2026-08-18T19:06:14+05:30"
---

arXiv:2608.14642v1 Announce Type: new Abstract: Reinforcement Learning (RL) agents trained on a single reward signal exploit the gap between the designed reward and the intended behavior. This is particularly a problem when we are trying to imbue ethical behavior into RL agents. An agent can look ethical on average while concentrating its violations in a few bad episodes, and a creature in the environment harmed in one episode is not restored by good conduct in another. We compare four ways of training ethical behavior in Craftax, an open-ended survival benchmark. The four are: scalar penalties with termination, a linear multi-objective weight sweep, an adaptive Lagrangian constraint, and a non-compensatory utility optimized per episode under the Expected Scalarized Returns (ESR) criterion. All are evaluated under a single detector-based protocol that counts every violation in every episode without censoring. On the frontier of mean return against mean violation rate, the four methods are indistinguishable; per episode they separate sharply. At matched mean return, the ESR agent holds its stated budget of one violation in effectively every episode (worst-decile 1.04 +/- 0.07 violations), the Lagrangian leaks past the same budget (1.14 +/- 0.03), and the weight sweep's worst episodes double it (2.20 +/- 0.20). An observation-augmentation control attributes the separation to the training objective rather than to what the agent observes, and the per-episode guarantee costs nothing on the mean frontier. When ethical violations do not average away across episodes, we argue both training and evaluation must target the per-episode distribution rather than the mean.
