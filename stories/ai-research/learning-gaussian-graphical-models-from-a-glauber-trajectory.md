---
title: "Learning Gaussian Graphical Models from a Glauber Trajectory Without Mixing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.31230"
authors: ["Eric Shen, Tony Wu, Mahbod Majid, Ankur Moitra"]
date: "Wed, 01 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2606.31230v1"
image: ""
generated: "2026-07-01T19:05:33+05:30"
---

arXiv:2606.31230v1 Announce Type: new Abstract: We study the task of learning the structure of a $d$-sparse Gaussian graphical model on $n$ variables from a single trajectory of Glauber dynamics. Beyond algorithmic considerations, many applications present temporally correlated observations rather than i.i.d.\ samples. In the classical i.i.d.\ setting, under comparably general sparsity and minimum edge-strength assumptions, sublinear-in-$n$ sample guarantees are known, but achieving them in polynomial-time remains open. Motivated in part by this gap, we give a polynomial-time algorithm that recovers the conditional-independence graph from a single Glauber trajectory, with a trajectory-length guarantee that does not depend on the mixing time. Technically, our algorithm has three components. First, we estimate the conditional variances and rescale the trajectory to reduce to the unit-diagonal case, without changing the underlying graph. Second, we design a local edge test that extracts adjacency information from short update windows by isolating pairwise influence. Third, we aggregate these local statistics using a robust median-based estimator, and prove accuracy despite temporal dependence arising from a single trajectory.
