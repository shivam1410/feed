---
title: "Fresh Enough to Decide: Age of Intelligence for Cost-Aware Model Synchronization in Dynamic IoT Systems"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.09935"
authors: ["Hui Wang, Seyyedali Hosseinalipour, Jacob Chakareski, Ming Shi"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.09935v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Resource-constrained IoT devices cache learned models for real-time decisions, but frequent updates incur substantial bandwidth, energy, and service overhead. Because decision-relevant model differences need not grow with elapsed time, we define Age of Intelligence (AoInt) as a model-version-relative, client-specific, and action utility distortion, and formulate synchronization as a tradeoff between stale-decision regret and refresh cost. Furthermore, we develop Kullback-Leibler-aware AoInt Synchronization (KL-AoIntSync), which accumulates output-distribution changes using client-specific unlabeled probes, whereas Parameter-aware AoInt Synchronization (Param-AoIntSync) uses a server-broadcast scalar parameter change. Then, we establish pathwise guarantees with fixed client distributions, action sets, and utilities. The numerical results show that calibrated Param-AoIntSync reduces joint synchronization cost by 6.15% relative to an Instant-Parameters policy while performing comparably to KL-AoIntSync.
