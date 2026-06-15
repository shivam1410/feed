---
title: "PostDeg: Placement Beats Parameterization in LayerNorm GNNs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.14022"
authors: ["Yash Tomar, Aryav Das"]
date: "Mon, 15 Jun 2026 00:00:00 -0400"
score: 54
guid: "oai:arXiv.org:2606.14022v1"
image: ""
generated: "2026-06-15T19:06:44+05:30"
---

arXiv:2606.14022v1 Announce Type: new Abstract: LayerNorm-based GNNs routinely erase the topology signals (degree, centrality, $k$-core) that node-selection policies should depend on, but the literature has not located where in the residual block the erasure happens. We answer that question: a positive per-node scalar inserted before LayerNorm is divided out up to a stabilizer term, while the same scalar inserted after LayerNorm reaches the score head as representation magnitude. The surviving slot is the post-LayerNorm position. We instantiate it with PostDeg, a parameter-free post-LayerNorm inverse-degree scale, and pre-register four falsifiers (graphwise scalars, extra LayerNorm, expressive same-slot capacity, backbone-agnostic source) that would reject the rule. PostDeg gains $+3.5\%/+2.5\%/+5.6\%$ over the LN backbone on influence maximization, network dismantling, and maximum independent set, with $10/10$ paired-seed wins per task; none of the four falsifiers fires. The takeaway is that placement, not parameterization, carries the gain -- a small invariance check that generalizes to any positive topology scalar in any normalized residual stack.
