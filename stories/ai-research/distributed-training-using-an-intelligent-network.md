---
title: "Distributed Training using an Intelligent Network"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.26453"
authors: ["Nihar Shah, Ben Blier"]
date: "Fri, 28 Aug 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2608.26453v1"
image: ""
generated: "2026-08-28T20:11:00+05:30"
---

arXiv:2608.26453v1 Announce Type: new Abstract: Distributed training across a wide area network (WAN) is challenging, as continuous parameter exchange by islands of compute is constrained by limited bandwidth, high latency, and uneven topology. We propose making the network an active participant in training. On the systems side, such networks should leverage (i) multicast technology to replicate outbound traffic and (ii) in-line FPGAs to aggregate inbound traffic, to ease egress and ingress bottlenecks. These technologies are used for training across workers within a data center, but this paper extends them to the WAN. On the algorithms side, we develop an optimization framework that produces rich synchronization schedules (namely, rotating cliques of islands) around the underlying network topology and these technologies, to maximize information exchange. Finally, we illustrate this on a nine-city topology modeled on the DoubleZero network, a live programmable WAN equipped with both technologies, and show how the optimal schedules shift with the network's capabilities. Together, these can narrow the gap to the gold standard of colocated training.
