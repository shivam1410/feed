---
title: "Exploring Starts Are Not Enough: Counterexamples and a Fix for Monte Carlo Exploring Starts"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.15247"
authors: ["Octave Oliviers, Glenn Vinnicombe"]
date: "Tue, 16 Jun 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2606.15247v1"
image: ""
generated: "2026-06-16T19:05:16+05:30"
---

arXiv:2606.15247v1 Announce Type: new Abstract: The asymptotic behaviour of Monte Carlo Exploring Starts (MCES) is a long-standing open question in reinforcement learning, even in the tabular setting. We investigated the convergence properties of tabular MCES by constructing examples in which the algorithm converges to suboptimal solutions. This paper presents new counterexamples for both initial-visit and first-visit MCES and gives a convergence-restoring modification for the initial-visit case. We show that stable suboptimal solutions may exist for initial-visit MCES with sample-average updates even when greedy actions are updated more often than non-greedy actions on average. However, by scaling learning rates inversely to update frequencies on a state-by-state basis, convergence to optimality is guaranteed. Unlike previous uniformisation methods, this modification is applicable to large-scale problems that require approximating the estimated value function. We then extend the example to show that sample-average first-visit MCES may also converge to suboptimal solutions. This largely settles a fundamental open problem and shows that exploring starts alone do not guarantee convergence to optimality. More broadly, these results highlight that convergence depends critically on the relative size and frequency of updates applied to different actions, making the choice of learning rates and the balance between exploration and exploitation central to the analysis of MCES and the implementation of scalable Monte Carlo control methods.
