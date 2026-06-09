---
title: "Learning Transfers: Kan Extensions for Neural Invariants"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.07627"
authors: ["Luciano Melodia"]
date: "Tue, 09 Jun 2026 00:00:00 -0400"
score: 61
guid: "oai:arXiv.org:2606.07627v1"
image: ""
generated: "2026-06-09T19:05:06+05:30"
---

arXiv:2606.07627v1 Announce Type: new Abstract: Transfer learning presumes that a representation learned on source tasks carries structure that remains usable on related target tasks. Standard evaluations probe this through target accuracy or distributional discrepancy, yet leave unspecified which structural invariant is meant to transfer. We supply that invariant categorically. A source task category $\mathcal A$, a target task category $\mathcal B$, and a task-change functor $J:\mathcal A\to\mathcal B$ determine, for every invariant-valued source representation $F:\mathcal A\to\mathcal V$, the universal transferred invariant $\operatorname{Lan}J F$. Given a target invariant $G:\mathcal B\to\mathcal V$, we define the transfer discrepancy $\operatorname{Comp}J(F,G)=\sup{b\in\operatorname{Ob}(\mathcal B)} d{\mathcal V}\bigl((\operatorname{Lan}_J F)(b),G(b)\bigr)$, evaluating transfer not by an objectwise comparison of source and target, but by comparing the target invariant against the one forced by the prescribed task transformation. We prove finite cokernel formulas for $(\operatorname{Lan}_J F)(b)$ in chain complexes and persistence modules, indexed by the comma category $J\downarrow b$. For persistence-valued finite-type one-parameter invariants, the discrepancy is computed exactly by bottleneck distances between barcodes. Controlled experiments on neural latent point clouds then test whether the score recovers the correct task functor and flags representation collapses that preserve classification accuracy while destroying transfer-relevant topology.
