---
title: "Three Worlds for the Price of a Logarithm: Baseline-Protected Best-of-Both-Worlds Combinatorial Semi-Bandits"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.36245"
authors: ["Ting Hu, Luanda Cai, Emmanouil-Vasileios Vlatakis-Gkaragkounis"]
date: "Wed, 28 Oct 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2610.36245v1"
image: ""
generated: "2026-10-28T19:00:21+05:30"
---

Improving on a baseline requires exploring away from it, precisely where its performance may be lost. We propose DUET (Doubling Under Empirical Tests), a horizon-free phased mixing scheme for combinatorial semi-bandits with arbitrary finite action sets. Two observable tests decide when to double the learning weight and when to double the empirical-regret budget and restart. We instantiate the scheme with entropy-FTRL in mixed phases and hybrid-FTRL in pure phases. Assuming the baseline selects every arm with positive probability, this instantiation keeps expected baseline regret logarithmic in $T$, while its expected regret to every fixed action is $\widetilde{O}(\sqrt{T})$ under non-anticipating adversarial losses and polylogarithmic, gap-dependent, under i.i.d. losses with a unique optimal action. All three guarantees hold at every deterministic horizon, and the algorithm knows neither the horizon, nor the gap, nor the environment type. Baseline protection, adversarial robustness, and stochastic adaptivity thus come from one scheme and two base learners, at the price of a logarithm.
