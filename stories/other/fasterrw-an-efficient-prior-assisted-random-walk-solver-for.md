---
title: "FasterRW: An Efficient Prior-Assisted Random Walk Solver for Thermal Analysis"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.08490"
authors: ["Zixiao Wang, Tianshu Hou, Chenghan Wang, Zhen Zhuang, Leilei Jin, Tsung-Yi Ho, Farzan Farnia, Bei Yu"]
date: "Mon, 09 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.08490v1"
image: ""
generated: "2026-11-09T20:33:26+05:30"
---

Thermal simulation is becoming increasingly critical in modern IC design and manufacturing. Feynman--Kac random walk methods can estimate localized temperatures without solving the global field, but in practical settings without Dirichlet boundaries they require very long paths to control the truncation residual. This paper presents FasterRW, a continuation-value framework for accelerating Feynman--Kac thermal random walks. We prove a stopping-time residual identity showing that the expected tail after truncation equals the current attenuation weight multiplied by the temperature at the stopping location. This identity enables a prior-corrected single-point estimator: a cheap, noisy prior replaces the unknown continuation value, making the truncation bias scale with prior error rather than absolute temperature and yielding an error-controlled threshold-selection rule. For multi-point queries, FasterRW further converts cross-query pass-through tails into pseudo-samples and refines the resulting observations in prior-error coordinates through kriging. Compared with prior state-of-the-art methods, FasterRW achieves up to $28\times$ acceleration while maintaining accuracy. Our code is open-sourced at https://github.com/ShiningSord/FastRW.
