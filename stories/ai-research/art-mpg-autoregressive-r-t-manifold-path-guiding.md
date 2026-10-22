---
title: "ART-MPG: Autoregressive R/T Manifold Path Guiding"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.29049"
authors: ["Zehao Zhao, Yanyang Yang, Xiaole Zhang, Xiyu Deng"]
date: "Thu, 22 Oct 2026 00:00:00 -0400"
score: 18
guid: "oai:arXiv.org:2610.29049v1"
image: ""
generated: "2026-10-22T20:05:20+05:30"
---

Specular chains concentrate important transport in small regions of path space and the structure depends on chain topology. We introduce ART-MPG, a compact neural model that samples chain length, an autoregressive reflection/transmission (R/T) string, and a direction from a topology-conditioned four-component von Mises-Fisher (vMF) mixture. We extend the repeated trial weighting in Manifold Path Guiding (MPG) by conditioning retry sampling on both chain length and the sampled R/T string, accounting for its known mass outside the stochastic re-hit trials. For a fixed proposal and target chain, this preserves the ideal expectation while reducing the expected retry count and reciprocal-estimator variance compared with retries conditioned on chain length alone. We distinguish the formal unbiasedness result from the capped and clamped renderer used in experiments. We evaluate fourteen scenes across a range of samples per pixel (SPP) against existing online and offline rendering algorithms. Our method consistently produces lower mean squared error at equal SPP than the online and offline baselines, with lower standard deviation across runs.
