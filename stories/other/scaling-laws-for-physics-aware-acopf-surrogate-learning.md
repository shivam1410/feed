---
title: "Scaling Laws for Physics-Aware ACOPF Surrogate Learning"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16282"
authors: ["Yijiang Li, Emon Dey, Stefano Fenu, Massimiliano Lupo Pasini, Teja Kuruganti, Kibaek Kim"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16282v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16282v1 Announce Type: new Abstract: Learning-based surrogates for AC optimal power flow (ACOPF) promise large speedups over classical solvers, but their operational value depends on physical feasibility as much as predictive accuracy. Physics-aware objectives such as the augmented Lagrangian (AL) improve constraint satisfaction at additional per-step cost, yet how this trade-off behaves with scale is uncharacterized. We sweep model and dataset sizes under both MSE and AL training, and characterize how constraint violation changes with network size across grids. Both objectives improve as power laws, but at different rates: MSE is governed primarily by model capacity, while AL is balanced across both. Violation grows roughly twice as fast with network size under MSE as under AL. On matched hardware, AL reduces violation by nearly $30\times$ for an order of magnitude more training time, with negligible added memory. The training objective determines not only where a surrogate lands but how its quality evolves with scale.
