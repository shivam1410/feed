---
title: "Threshold-Aware Conformal Routing"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.02487"
authors: ["Shiwei Tan, Huzefa Rangwala, Danielle C. Maddix"]
date: "Mon, 05 Oct 2026 00:00:00 -0400"
score: 50
guid: "oai:arXiv.org:2610.02487v1"
image: ""
generated: "2026-10-05T19:10:08+05:30"
---

High-fidelity simulations are essential to scientific and engineering design, but can be expensive to run repeatedly. Learned surrogates offer a faster alternative, yet their higher errors may alter downstream decisions. This accuracy-speed tradeoff creates a need to determine whether a surrogate can be used or the full simulator remains necessary. We study decisions determined by whether a scalar quantity of interest lies above or below a fixed threshold. For each input, we use the surrogate when its conformal interval lies entirely on one side of the threshold and route the input to simulation when the interval intersects it. Standard conformal prediction constructs intervals without reference to the downstream decision threshold: even a narrow interval near the threshold can cross it and trigger simulation, whereas a wider interval farther away can remain entirely on one side and require no simulation. We introduce Threshold-Aware Conformal Routing (TACR), which learns an input-dependent scale using a threshold-aware objective that concentrates interval tightness near the decision boundary. Exact split-conformal calibration on held-out data preserves distribution-free marginal coverage, which also upper-bounds the probability of an incorrect threshold decision that is not routed. Across various scientific and engineering datasets, TACR reduces simulator deferrals by 14-75% relative to standard conformal prediction at the same coverage target. Against a variant without threshold-local weighting but with similar predictor accuracy, TACR further reduces deferrals by 10-24% on four datasets. These results show that optimizing interval allocation for routing can reduce simulator calls without weakening the standard conformal guarantee.
