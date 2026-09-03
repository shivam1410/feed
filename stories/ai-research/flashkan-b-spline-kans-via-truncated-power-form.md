---
title: "FlashKAN: B-Spline KANs via Truncated Power Form"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.01956"
authors: ["Naveen Mysore"]
date: "Thu, 03 Sep 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2609.01956v1"
image: ""
generated: "2026-09-03T19:07:18+05:30"
---

arXiv:2609.01956v1 Announce Type: new Abstract: Kolmogorov-Arnold Networks (KANs) place learnable B-spline activations on network edges rather than fixed activations on nodes. The standard Cox-de Boor recursion evaluates these activations through k sequential passes for degree-k splines, consuming over 90% of forward-pass time. FlashKAN replaces this recursion with the truncated power form, a classical result from approximation theory that expresses each uniform cubic B-spline as five (x)_+^3 terms at shifted knot positions. This paper makes three contributions: (1) a torch.compile-fused implementation that collapses these operations into a single GPU kernel, eliminating all recursion, span lookup, and scatter-gather operations; (2) a bounded-coordinate stabilization that clamps the normalized input to [0, k+1], preventing the catastrophic cancellation that historically motivated the Cox-de Boor recursion; and (3) a production-ready, open-source package (pip install flashkan) that serves as a drop-in replacement for existing KAN layers.
