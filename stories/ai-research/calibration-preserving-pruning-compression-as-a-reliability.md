---
title: "Calibration-Preserving Pruning: Compression as a Reliability Contract"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.23744"
authors: ["Ibne Farabi Shihab, Adria Binte Habib, Anuj Sharma"]
date: "Wed, 26 Aug 2026 00:00:00 -0400"
score: 65
guid: "oai:arXiv.org:2608.23744v1"
image: ""
generated: "2026-08-26T19:06:33+05:30"
---

arXiv:2608.23744v1 Announce Type: new Abstract: Split conformal prediction, not the pruning rule, supplies finite-sample marginal coverage once a pruned model is fixed independently of the conformal calibration split. We study the separate efficiency problem: can pruning preserve score geometry well enough to obtain smaller valid prediction sets? Calibration-Preserving Pruning (CPP) augments a base pruning score with nonconformity-gradient saliency and uses disjoint pruning, validation-selection, conformal-calibration, and test splits. Bounded score perturbations imply bounded conformal-quantile shifts and controlled set inflation, but do not make the generic coverage theorem CPP-specific. Final five-seed Qwen2.5-1.5B results at 50\% sparsity show the largest gains on large-label tasks. On DBpedia-14, CPP-SparseGPT reduces mean set size from \(10.1\) to \(8.6\) while changing accuracy from \(0.347\) to \(0.366\); CPP-Wanda reduces \(11.2\) to \(9.0\) with an accuracy trade-off from \(0.310\) to \(0.295\). Across 15 dataset--sparsity cells, CPP-SparseGPT produces smaller sets in 13 and higher accuracy in 11. Matched controls show that generic supervised gradients explain much of the gain: true-label CPP is not statistically resolved from matched Wanda+SNIP, whereas threshold-aware candidate-label CPP reaches \(7.8\) mean set size at explicit accuracy and offline-compute costs. RoBERTa-base and Llama-3-8B diagnostics support transfer, but our claims remain limited to reliability-sensitive classification.
