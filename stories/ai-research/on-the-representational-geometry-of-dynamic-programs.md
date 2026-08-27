---
title: "On the Representational Geometry of Dynamic Programs"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25034"
authors: ["Richard F. M. Lim, Ruriko Yoshida"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2608.25034v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25034v1 Announce Type: new Abstract: Standard neural architectures often fail to generalize to longer inputs for dynamic programming (DP) targets. We investigate what makes this hard geometrically. Every finite min-plus DP is a shortest path on a DAG, which is equivalently a tropical polynomial whose extended Newton polyhedron encodes the decision boundary of which path wins. We prove these three descriptions (graph, polynomial, polyhedron) form isomorphic semirings at two levels --- formal polynomials and their computed functions --- connected by operations that characterize all structural redundancies. We then address the length-generalization question geometrically: does the decision boundary at length $T$ decide the boundary at $T+1$? We present two structural negatives. The semiring's two native ways to reduce dimension (setting a variable to each identity) are neither injective nor always closed within the DP. Series and parallel composition fail to construct all DAG topologies from smaller sub-DAGs, and even all terminal-only operations do not capture all DP compositions.
