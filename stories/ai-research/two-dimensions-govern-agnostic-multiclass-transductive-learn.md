---
title: "Two Dimensions Govern Agnostic Multiclass Transductive Learning"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.25326"
authors: ["Pahan Dewasurendra"]
date: "Thu, 27 Aug 2026 00:00:00 -0400"
score: 48
guid: "oai:arXiv.org:2608.25326v1"
image: ""
generated: "2026-08-27T20:25:46+05:30"
---

arXiv:2608.25326v1 Announce Type: new Abstract: In transductive classification, an adversary fixes a labeled population, one label is hidden uniformly, and the learner sees all remaining labels. For binary classes, agnostic transductive and PAC learning have the same minimax rate. Whether this extends to multiclass learning was open, especially for unbounded label spaces where uniform convergence can fail. We resolve the question up to logarithmic factors. For every multiclass class $\mathcal H$ with DS dimension $d_{DS}$ and Natarajan dimension $d_{\mathrm N}$, the optimal agnostic transductive excess error satisfies $\widetilde\Theta\left(\frac{d_{DS}}{n}+\sqrt{\frac{d_{\mathrm N}}{n}}\right).$ The result holds for arbitrary label spaces. The two terms are both necessary. A DS pseudo-cube gives the realizable $d_{DS}/n$ obstruction, while a Natarajan cube with repeated points and fair labels gives the agnostic $\sqrt{d_{\mathrm N}/n}$ obstruction. The upper bound uses a random-reservation principle. The learner deliberately ignores a constant fraction of the visible labels, which makes the true test point uniform in a large unseen block. We combine realizable compression, a label-space reduction, and inside-menu agnostic compression across this finite-population split. A new without-replacement multiplicative-weights lemma preserves the fast $d_{DS}/n$ term. Consequently, agnostic multiclass PAC and transductive learning obey the same two-dimension law up to logarithmic factors.
