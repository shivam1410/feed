---
title: "Shallower ReLU Network Representations via Exact Linear Algebra"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.21651"
authors: ["Kilian Rue{\\ss}, Gennadiy Averkov, Florestan Brunck, Moritz Grillo, Christoph Hertrich, Georg Loho, Jack Stade, Moritz Stargalla, Matthew Sun, Martin Winter"]
date: "Mon, 27 Jul 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2607.21651v1"
image: ""
generated: "2026-07-27T19:07:27+05:30"
---

arXiv:2607.21651v1 Announce Type: new Abstract: We prove that the maximum of $n$ real numbers is exactly representable by a ReLU network with two hidden layers for every $n\le 10$. The constructions are obtained by reducing the problem to exact rational linear algebra: after a symmetry reduction, the necessary cancellations are encoded in finite linear systems over $\mathbb{Q}$, which we solve and verify computationally. The representation of $\max_{10}$ has a structured first hidden layer consisting only of pairwise maxima, a feature that allows it to be recursively substituted into larger networks. We use this to show that for every $n>10$, the maximum $\max_{n}$ can be exactly represented with $\lceil{\log_5 (n / 2)\rceil}+1 < \log_5(n) +1.5694$ hidden layers. Via the generalized hinging-hyperplane representation [Wang, Sun, IEEE Trans. Inf. Theory 2005], the same depth bound holds for all continuous piecewise-linear functions on $\mathbb{R}^d$, with $d+1$ in place of $n$. In particular, every continuous piecewise-linear function on $\mathbb{R}^d$ for $d\le 9$ admits a two-hidden-layer ReLU representation. Our results improve on [Bakaev, Brunck, Hertrich, Stade, Yehudayoff, STOC'26]. In that work, the authors established a two-hidden-layer representation for $\max_{5}$ and an upper bound of $\lceil{\log_3 (n-2)\rceil}+1$ hidden layers for $\max_{n}$.
