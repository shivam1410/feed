---
title: "GAUDI: Geometry-Aware Diffusion for Calibrated Air-Quality Time-Series Imputation"
category: "Climate & Energy"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.30340"
authors: ["Xinjin Li, Yudi Xia, Calvin Chang Liu, Weiru Lin, Bojun Li, Ziwei Hong, Bolun Zhang, Jinghan Cao, Yu Ma, Tianxin Zhou"]
date: "Mon, 28 Sep 2026 00:00:00 -0400"
score: 62
guid: "oai:arXiv.org:2609.30340v1"
image: ""
generated: "2026-09-28T20:49:59+05:30"
---

Air-quality sensor outages often create contiguous missing blocks, where side information useful for isolated missingness may be less reliable. We study a block-specific, GAUDI-aligned conditional diffusion imputer that retains temporal and feature processing, visible-value and mask conditioning, variable identity, and diffusion-step information, while suppressing absolute time-position side embeddings. On ItalyAir (13 variables, length-32 windows, nominal 50% block missingness; three archived seeds), this feature-side configuration achieves RMSE 0.340, versus 0.355 for full context and 0.355 for local CSDI. The experiment isolates a geometry-aware conditioning effect under block missingness.
