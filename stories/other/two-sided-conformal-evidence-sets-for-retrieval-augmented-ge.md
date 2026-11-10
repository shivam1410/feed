---
title: "Two-Sided Conformal Evidence Sets for Retrieval-Augmented Generation"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.10335"
authors: ["Ben Jenkins, Mihaela Cardei"]
date: "Tue, 10 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.10335v1"
image: ""
generated: "2026-11-10T19:01:15+05:30"
---

Retrieval-augmented generation (RAG) can surface passages that support a claim, contradict it, or fail to address it, yet existing calibrated grounding methods are typically one-sided and model only supporting evidence. We introduce Conformal Evidence Sets (CES), a two-sided framework that returns separate support and refutation sets with finite-sample inclusion coverage of at least $1-\alpha$ on each side under exchangeability; a Bonferroni union yields joint coverage of at least $1-2\alpha$. On labeled candidate pools from the contrastive VitaminC benchmark, CES closely tracks nominal coverage across $\alpha\!\in\!\{0.05,0.10,0.15,0.20,0.30\}$, with maximum deviations of $3.0$ percentage points for support and $5.4$ for refutation, and reaches essentially the same empirical coverage--size frontier as a test-tuned fixed-threshold heuristic without any test exposure. Stress tests mark the boundary of that guarantee: under FEVER distribution shift both sides under-cover, by up to $12.7$ percentage points, and support-side group-stratified recalibration substantially reduces the support gap. Scorer swaps, hard-negative retrieval, cross-dataset transfer, and a live end-to-end pilot expose a clear separation: when exchangeability holds and relevant evidence is retrieved, evidence inclusion remains calibrated even with an imperfect scorer, whereas the support/refute verdict tracks scorer quality directly. Calibrated evidence coverage and reliable verdicts are therefore distinct properties and should be reported separately.
