---
title: "Resource-Adaptive Primal-Dual Learning for One-Warehouse Multi-Store Systems with Censored Demand"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.14096"
authors: ["Jiameng Lyu"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.14096v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.14096v1 Announce Type: new Abstract: The one-warehouse multi-store (OWMS) system is a fundamental inventory network in which a nonreplenishable warehouse allocates shared stock across multiple stores over time. Existing OWMS learning policies are built around a fixed target calibrated to the initial average resource rate, but such a fixed-target architecture cannot re-center after realized sales change the remaining resource available per future period. We develop Resource-Adaptive Primal-Dual Learning, a new learning framework that tracks the primal-dual resolving path with censored demand as the remaining-resource state evolves. In each period, the current resource rate indexes the target store allocations and dual variable, while censored sales provide gradient estimates for updating both. The analysis combines expected-sales geometry with a moving-target argument to yield logarithmic expected regret, improving on the state-of-the-art square-root-order guarantees of existing OWMS learning policies. The underlying design and analytical ideas may inform other online learning problems with depleting shared resources. Numerical experiments further demonstrate good finite-horizon performance of a practical variant across different horizon lengths and inventory regimes.
