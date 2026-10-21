---
title: "What Remains Without Test Labels? Re-evaluating a Graph-Level Anomaly Detection Benchmark"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2610.24045"
authors: ["Yujie Lu, Da Yan"]
date: "Tue, 20 Oct 2026 00:00:00 -0400"
score: 22
guid: "oai:arXiv.org:2610.24045v1"
image: ""
generated: "2026-10-21T05:20:57+05:30"
---

Graph-level anomaly detectors are trained only on normal graphs, yet benchmarks may use test labels for model selection. We examine whether UB-GOLD results reused by later papers support label-free detection. We audit UB-GOLD and 14 GLAD code bases, re-run 21 detectors on UB-GOLD's folds under selection rules with and without test labels, and evaluate sensitivity to known structural changes. Test labels select checkpoints in UB-GOLD's shared training loop and checkpoints or hyperparameters in 8 of the 14 code bases. UB-GOLD also evaluates its kernel baselines against misaligned labels. Across nine datasets, selecting checkpoints by test AUROC adds an average of 5.12 AUROC points [3.97, 6.24] for the 12 UB-GOLD detectors relative to the final checkpoint and 4.13 [3.32, 4.79] relative to held-out normal graphs. In a post hoc permutation analysis with no truly better checkpoint, picking the best of noisy test evaluations still yields a gain more than half as large as the one observed against the final checkpoint. Configurations tuned on test labels score a further 1.53 points [0.64, 2.42] above repository defaults, a gap that mixes the value of test labels with that of tuning itself. With tuned hyperparameters and label-free checkpoint selection, the two strongest detectors retain their lead, while comparisons below them are less stable. Six of eight detectors evaluated out of sample miss size-preserving composition changes that graphlet counts detect. We recommend reporting results selected without test labels as the main comparisons and release per-run outputs that allow verification without retraining.
