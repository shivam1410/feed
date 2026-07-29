---
title: "Conformal Cascade: Distribution-Free Accuracy Guarantees for Multi-Tier LLM Inference"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.25018"
authors: ["Yifan Dou, Shikan Fang, Shibo Li"]
date: "Wed, 29 Jul 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2607.25018v1"
image: ""
generated: "2026-07-29T16:31:06+05:30"
---

arXiv:2607.25018v1 Announce Type: new Abstract: Large language model (LLM) cascades reduce inference cost by routing easy queries to a small model and deferring hard queries to a larger one. Production cascades govern this deferral through a confidence threshold, but LLM confidence scores are miscalibrated, the threshold must be tuned per model pair and per domain, and no setting yields a formal bound on cascade accuracy. We introduce \textbf{Conformal Cascade} (CC), a multi-tier inference framework that uses conformal prediction set size as the deferral rule: accept when the calibrated set collapses to a single answer, defer otherwise. The procedure delivers a distribution-free, finite-sample accuracy guarantee. By a per-tier union bound, the prediction set at the accepting tier covers the correct answer with probability at least $1 - K\alpha$ for any user-specified $\alpha$; under a selection-preservation condition (consistent with, but not strictly implied by, our marginal coverage results), the bound tightens to $1 - \alpha$. We further characterise expected cascade cost as an explicit function of $\alpha$ and the calibration-set acceptance rate. Across 18 multiple-choice benchmarks spanning science, medicine, commonsense, and standardized exams, evaluated on two-tier cascades drawn from four open-weight model families, CC strictly improves over the strongest calibration-tuned heuristic cascade on the majority of family--benchmark pairs, with the largest gains on reasoning-heavy benchmarks where majority vote is unreliable; on easier benchmarks the cascade commits the vast majority of queries to the small model at no accuracy cost. Extension to open-ended generation requires an answer-clustering step that we leave for future work. The method requires no model training and only black-box API access.
