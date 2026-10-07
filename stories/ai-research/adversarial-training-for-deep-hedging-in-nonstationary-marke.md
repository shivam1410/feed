---
title: "Adversarial Training for Deep Hedging in Nonstationary Markets"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.07162"
authors: ["Philipp J. Schneider, Lukas Looser, Antoine Garin, Shuhan Liu, Daniel Kuhn"]
date: "Wed, 07 Oct 2026 00:00:00 -0400"
score: 35
guid: "oai:arXiv.org:2610.07162v1"
image: ""
generated: "2026-10-07T19:11:01+05:30"
---

Deep hedging learns trading policies from historical or simulated market trajectories, yet under nonstationarity these training paths may not represent future market conditions. We propose WRAP (Wasserstein-Reweighting Adversarial Perturbation), a drift-aware adversarial training framework derived from a two-budget distributionally robust optimization (DRO) formulation. The formulation is anchored to a weighted empirical reference distribution whose fixed baseline weights are chosen to balance sampling uncertainty against temporal drift. Around this reference distribution, the ambiguity set addresses two complementary forms of distributional misspecification by allowing an adversary to reweight the observed trajectories subject to a $\phi$-divergence constraint and perturb their paths subject to an optimal-transport (OT) constraint. We derive a joint first-order expansion in which the leading-order increase over the nominal expected loss decomposes into a reweighting contribution determined by the dispersion of hedging losses across trajectories and a transport contribution determined by the sensitivity of the loss to path perturbations. This expansion yields an explicit finite-dimensional adversarial attack that replaces the distributional inner supremum with a tractable first-order approximation. Across stationary and nonstationary Heston dynamics and a generalized affine diffusion (GAD), the experiments show complementary benefits from reweighting and transport, with joint adversarial training providing the largest gains under nonstationarity.
