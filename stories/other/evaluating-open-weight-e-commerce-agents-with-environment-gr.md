---
title: "Evaluating Open-Weight E-Commerce Agents with Environment-Grounded Verification"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16093"
authors: ["Nimit Shah, Haitz S\\'aez de Oc\\'ariz Borde"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16093v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16093v1 Announce Type: new Abstract: A shopping conversation has many routes to the same cart, and a task-success rate reduces all of them to one score. We build a deterministic and reproducible e-commerce environment that precommits each trial's customer and trajectory parameters, including the persona, difficulty, target cart, and an item reveal schedule. A simulated consumer attempts to buy a target cart from the environment with assistance from the evaluated model. The environment guides the simulator's actions and records every assistant action alongside the environment state at that point. After the trial, these records allow the evaluator to assess individual parts of the conversation against the retained evidence. For example, the evaluator penalizes a search for failing to surface a target product only when the customer has already mentioned that product. We further use this evidence to apply different penalties to tool calls depending on how the assistant's actions compare with an expected tool-call set. Our environment also interacts with the simulator bidirectionally, reading its output to stop the trial when the simulator determines that the customer has become too frustrated and injecting directives in real time that specify when to explore, defer buying an item, or recall a previous exchange. This interaction creates an open-ended and verifiable simulation. Across eight open-weight agents from 20B to 35B parameters, with 160 trials per agent and 44 metrics, the resulting capability profiles distinguish under-action, over-purchase, unsupported product attributes, and poor search, all of which terminal success obscures.
