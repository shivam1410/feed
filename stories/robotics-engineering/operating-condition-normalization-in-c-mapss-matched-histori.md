---
title: "Operating-Condition Normalization in C-MAPSS: Matched Historical Baselines, Multi-Seed Robustness, and Prognostic-Score Trade-offs"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.28759"
authors: ["Mohammad Adeel"]
date: "Tue, 24 Nov 2026 00:00:00 -0500"
score: 20
guid: "oai:arXiv.org:2611.28759v1"
image: ""
generated: "2026-11-24T19:04:06+05:30"
---

Operating-state changes can obscure turbofan degradation signals, but a reduction in remaining-useful-life (RUL) error after condition-wise standardization may reflect weaknesses of the comparison features instead of a unique benefit of normalization. A controlled retrospective audit examines NASA C-MAPSS FD002 and FD004 with engine-disjoint folds, raw condition identifiers, two constructions of causal history, early-life baselines, and continuous operating-setting correction. Ridge regression, random forests and XGBoost are compared under explicit training-engine-only fitting rules. The previously reported XGBoost FD004 terminal RMSE decreased from 30.38 to 29.08 cycles following six-condition standardization; however, raw sensor values accompanied by condition-matched histories and condition identifiers achieved 28.09 cycles, reversing the naive point estimate ranking, although the paired-engine interval spans zero. For FD002, normalized XGBoost reduced terminal RMSE yet increased the asymmetric NASA score (12,616 to 13,289). Additional model-seed, condition count, RUL-cap, grouped-validation and explanation checks test sensitivity rather than postulating a universally optimal representation. The six clusters reproduce known simulator operating regimes; no new condition discovery algorithm, causal diagnostic method, or field ready prognostic system is claimed. Since the official test endpoints were also used in earlier exploratory comparisons, all newly examined alternatives are reported as retrospective benchmark evidence, not as results from a pristine confirmatory holdout.
