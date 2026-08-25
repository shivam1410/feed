---
title: "Sorting from Counterexamples"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.21579"
authors: ["Noga Alon, Shay Moran, Shlomo Moran"]
date: "Tue, 25 Aug 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2608.21579v1"
image: ""
generated: "2026-08-25T19:08:16+05:30"
---

arXiv:2608.21579v1 Announce Type: new Abstract: Consider the following problem of learning an unknown linear order on $n$ items. In each round, the learner guesses a complete ordering of the items and receives either confirmation that the guess is correct or a counterexample: a pair of items in the wrong order. The goal is to identify the unknown order using as few queries as possible. We study this problem when up to $k$ of the returned counterexamples may be untruthful, where $k$ is not known in advance. We determine the optimal query complexity up to constant factors: \[ \Theta(n\log n + nk). \] Thus, while the noiseless complexity matches the classical complexity of sorting, each untruthful counterexample incurs an additional cost of order $n$. The upper bound is based on a geometric representation of permutations and Gr\"unbaum's theorem, while the lower bound combines sorting arguments with a Condorcet-type construction. We also study the case where the target ranking has a low-dimensional geometric representation: each item is represented by a point in $\mathbb{R}^d$, and the ranking is obtained by projecting the points onto an unknown direction. For these classes we give an upper bound of $O(d^2\log n+dk)$ and a lower bound of $\Omega(d\log n+dk)$, leaving a factor of $d$ gap in the noiseless term.
