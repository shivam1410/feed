---
title: "The Complexity of Oracle-Efficient Realizable Transductive Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28757"
authors: ["Changlong Wu"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.28757v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

In realizable transductive online learning, the learner knows the entire sequence of $T$ instances in advance, and the labels are consistent with one of $N$ hypotheses. With explicit access to the hypothesis class, the halving algorithm makes at most $\log_2 N$ mistakes. Can a comparable guarantee be achieved using only polynomially many empirical risk minimization (ERM) queries? We answer this question negatively, even for a weighted-ERM oracle that optimizes arbitrary real-valued linear objectives and returns a complete maximizing hypothesis. For every fixed $\beta\in(0,1)$ and every randomized learner making polynomially many oracle queries, there exists a fixed realizable instance with exactly $N=2^{\lfloor T^\beta\rfloor}$ hypotheses on which the learner makes $\Omega_\beta(\sqrt{T\log N})$ mistakes in expectation. This matches the agnostic-rate upper bound achieved by random playout using $O(T)$ oracle calls. The separation persists for much smaller classes as well: along a sequence with $\log N=\Theta((\log T)^2)$, we establish a mistake lower bound of $\exp(\Omega(\log T/\log\log T))$. Our main technical contribution is a composition lemma that combines two realizable prediction problems such that their mistake lower bounds add, up to a small loss, while their hypothesis class sizes grow only additively. Iterating this lemma yields a family of hard instances spanning the desired parameter regimes, establishing a sharp separation between information-theoretic and oracle-efficient mistake guarantees.
