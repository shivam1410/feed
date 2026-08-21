---
title: "A Locally Tokenized Generative Model for Robust Time-Series Watermarking"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.19727"
authors: ["Dongbin Kim, Geonwoo Shin, Yujin Choi, Soyeon Park, Jaewook Lee"]
date: "Fri, 21 Aug 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2608.19727v1"
image: ""
generated: "2026-08-21T19:00:17+05:30"
---

arXiv:2608.19727v1 Announce Type: new Abstract: Watermarking is a central tool for provenance in generative models, yet its application to multivariate time series remains hindered by reliability failures under post-editing attacks. We show that existing detectors, which rely on globally coupled re-encoding, suffer from bidirectional drift of the null distribution: post-editing attacks can shift the z-score of non-watermarked samples in either direction, invalidating clean-calibrated thresholds. We argue that this instability is a property of the re-encoding, and that reliable detection requires each recovered unit to depend only on a bounded temporal neighborhood. Guided by this principle, we propose L-VQVAE, a generative model in which each discrete token is produced from a short contiguous window, and LVQMark, a watermarking method over this token space that combines logit-bias injection with robust re-encoding for attack-time detection. Experiments on four benchmarks spanning finance, energy, and neuroimaging show that our approach preserves generation quality while stabilizing both detection power and false-positive behavior under post-editing attacks.
