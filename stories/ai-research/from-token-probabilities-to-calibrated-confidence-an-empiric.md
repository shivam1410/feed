---
title: "From token probabilities to calibrated confidence: An empirical study of mathematical question answering"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.07827"
authors: ["Avery Ma, Lorne Schell, Vin Bhaskara, Leila Pishdad"]
date: "Tue, 11 Aug 2026 00:00:00 -0400"
score: 55
guid: "oai:arXiv.org:2608.07827v1"
image: ""
generated: "2026-08-11T19:05:57+05:30"
---

arXiv:2608.07827v1 Announce Type: new Abstract: Confidence estimation for large language models (LLMs) aims to estimate the probability that a generated answer is correct, while calibration aligns these estimates with empirical accuracy. Prior work has shown that token probabilities are often overconfident, we investigate whether these readily available signals can nevertheless provide well-calibrated confidence estimation for mathematical question answering. We compare single-pass estimators, which reuse token probabilities from the original generation, with multi-pass estimators, which obtain additional confidence signals through verification or stochastic forward passes. While individual token probabilities can be highly saturated, we find that aggregating token probabilities over the full sequence captures small but consistent differences between correct and incorrect generations, yielding more informative confidence estimates. Multi-pass methods can yield calibrated confidence estimates. We study two such approaches: self-verification through re-prompting, including a lower-cost in-situ variant, and Monte Carlo Dropout, which derives confidence from variation across stochastic forward passes. We further evaluate two post-hoc calibration methods, Platt scaling and isotonic regression, both of which substantially reduce in-domain calibration error. However, their data efficiency varies with dataset difficulty, and the calibration mappings often transfer asymmetrically across datasets and models.
