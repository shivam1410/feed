---
title: "From Switching to Dynamic Regret: A Simple Reduction via Unbiased Random Sequences"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.20968"
authors: ["Yibo Wang, Wenhao Yang, Sifan Yang, Yuanyu Wan, Lijun Zhang"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2609.20968v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.20968v1 Announce Type: new Abstract: In non-stationary online learning, dynamic regret has attracted increasing attention as a measure of how well an online learner performs against a time-varying comparator sequence. Despite considerable advances, attaining optimal bounds for strongly convex and exp-concave losses often involves intricate analysis. In this paper, we present a \textit{simple} framework that reduces dynamic regret minimization to switching regret minimization. As a result, we can derive dynamic regret bounds by using off-the-shelf algorithms with switching regret guarantees. The key idea of our reduction is to construct, for \textit{any} comparator sequence, an auxiliary random sequence that is unbiased at each round, with the controlled variance and a manageable number of switches. Combining this construction with suitable surrogate losses, we can decompose dynamic regret into the expected switching regret against the random sequence and its controlled variance. Theoretically, for strongly convex and exp-concave losses, we establish the $\widetilde{O}(T^{1/3}P_T^{2/3})$ dynamic regret bounds, where $T$ denotes the time horizon and $P_T$ denotes the path-length of the comparator sequence. Moreover, for general convex losses, the same reduction also recovers the $O(\sqrt{T(1+P_T)})$ dynamic regret bound. Notably, all our findings match the minimax optimal results for these three types of losses, highlighting the versatility of our proposed framework.
