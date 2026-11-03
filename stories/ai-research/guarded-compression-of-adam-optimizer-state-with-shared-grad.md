---
title: "Guarded Compression of Adam Optimizer State with Shared-Gradient Bounds"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.00589"
authors: ["Annan Zhang, Shengjie Song, Wenshuai Yao, Lihao Zhang,  Tianmiao"]
date: "Tue, 03 Nov 2026 00:00:00 -0500"
score: 40
guid: "oai:arXiv.org:2611.00589v1"
image: ""
generated: "2026-11-03T19:05:09+05:30"
---

Adam keeps two FP32 moments per parameter, twice the bytes of the FP32 weights, yet compressing them is risky: the update divides by the square root of the second moment, so small reconstruction errors can change the restored computation substantially. We study guarded moment compression, in which a coordinate's decoded moments are accepted only if they reproduce the native FP32 Adam update to within a tolerance $\tau$, in units of the learning rate, for every gradient in a clipped domain; all other coordinates are stored exactly. The natural certificate, which ranges each update separately over gradient intervals, fails: on one million trained OPT-125M coordinates it escapes 98.9% of coordinates and the payload grows to 126.6% of raw FP32. Our key observation is that both updates consume the same gradient and parameter. Bounding their difference directly, with FP32 rounding-error allowances and a fixed mixed linear-logarithmic gradient partition, cuts escapes to 0.53% and the payload to 28.3% at $\tau=0.01$. Across 120 complete-checkpoint restores of OPT-125M and ResNet-18, with four trained seeds and three training fractions per model, guarded 8-bit log codes shrink moment payloads by 69.5% and 71.9% relative to FP32, 40.8% and 45.4% relative to equally guarded BF16, and 29.3% and 37.6% relative to equally guarded blockwise 8-bit, and every restored first update stays within tolerance. Encoding and restoration together take 2.3-2.6$\times$ as long as guarded BF16 but less time than guarded blockwise 8-bit. Searching both moment codes jointly saves under 0.001% more bytes at 6% more codec time, so per-moment rounding suffices. The guarantee covers the first restored update under a pinned Torch operation model; we measure subsequent training empirically.
