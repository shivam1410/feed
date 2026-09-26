---
title: "Where Does Exactly-Once Live? Model, Harness, and Tool-Contract Effects on Duplicate Side Effects in LLM Agents"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.29095"
authors: ["Jiapeng Li"]
date: "Sat, 26 Sep 2026 00:00:00 -0400"
score: 82
guid: "oai:arXiv.org:2609.29095v1"
image: ""
generated: "2026-09-26T22:52:50+05:30"
---

Researchers tested where exactly-once behavior should live in LLM agent systems by running 25,930 fault-injection episodes. When the agent can immediately verify what happened, frontier models duplicate writes only 0.5% of the time. When it can't verify, they duplicate 56-74% of the time. The contract with the service, not the model, decides in that case. This matters because it shows responsibility for preventing duplicates lies with what you can observe, not just smarter models.
