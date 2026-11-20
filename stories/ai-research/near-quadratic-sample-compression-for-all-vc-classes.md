---
title: "Near-Quadratic Sample Compression for All VC Classes"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.25011"
authors: ["Yang Cai, Vineet Gupta, Yanchen Jiang, Christopher Liaw, Aranyak Mehta, Shay Moran, Grigoris Velegkas, Di Wang, Manfred K. Warmuth"]
date: "Fri, 20 Nov 2026 00:00:00 -0500"
score: 35
guid: "oai:arXiv.org:2611.25011v1"
image: ""
generated: "2026-11-20T19:04:50+05:30"
---

The sample compression conjecture is a longstanding open problem in learning theory, originating in the work of Littlestone and Warmuth in the 1980s. At its heart is a connection between simplification and generalization: if a predictor consistent with a training sample is defined using only a small part of that sample, then it is likely to generalize. Sample compression schemes formalize this idea, and many natural learning algorithms can be analyzed this way. The sample compression conjecture of Floyd and Warmuth (1995) asserts that every binary concept class of VC dimension $d$ admits a sample compression scheme of size $O(d)$; a weaker conjecture asks only for size polynomial in $d$. Both have remained open: the first bound depending only on $d$, due to Moran and Yehudayoff (2016), is exponential in $d$. We prove the weaker conjecture by constructing a sample compression scheme of size $O(d^2 \log^2 d)$.
