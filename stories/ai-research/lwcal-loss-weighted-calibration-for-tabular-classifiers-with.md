---
title: "LWCal: Loss-Weighted Calibration for Tabular Classifiers with Noisy Calibration Labels"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.26839"
authors: ["Zeming Liu, Hang Lyu, Jingtao Zhang, Yuan Xie"]
date: "Thu, 24 Sep 2026 00:00:00 -0400"
score: 38
guid: "oai:arXiv.org:2609.26839v1"
image: ""
generated: "2026-09-24T19:24:37+05:30"
---

arXiv:2609.26839v1 Announce Type: new Abstract: Post-hoc probability calibration is usually evaluated under an optimistic assumption: the held-out calibration labels are clean. In many AI deployment settings, however, labels come from weak annotators, historical decisions, heuristics, or distant supervision, so the same label noise that corrupts training also corrupts calibration. We study this overlooked failure mode for tabular classifiers and propose LWCal, a CPU-only post-hoc calibrator that down-weights calibration examples whose noisy labels are contradicted by the base model's held-out probability. LWCal requires no clean validation labels, no noise-rate estimate, and no retraining of the base classifier. A second variant, Gated-LWCal, adds a conservative disagreement gate that backs off toward the raw score when the calibration split appears extremely inconsistent. On nine local binary tabular tasks, six random seeds, symmetric and asymmetric label corruption, and three tree-based base learners, LWCal obtains the lowest average calibration error while Gated-LWCal obtains the best average proper-score tradeoff. In the main random-forest study over 432 noisy cells, Gated-LWCal reduces expected calibration error from 0.188 to 0.122 and negative log likelihood from 0.438 to 0.396 relative to the raw classifier. Paired bootstrap intervals for Gated-LWCal versus raw, Platt, isotonic, and beta calibration exclude zero on ECE, Brier score, and NLL. The artifact contains all scripts, result tables, figures, and the compiled paper.
