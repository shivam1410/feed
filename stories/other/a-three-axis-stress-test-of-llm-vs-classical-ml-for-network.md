---
title: "A Three-Axis Stress Test of LLM vs Classical ML for Network Intrusion Detection under Distribution Shift and Adversarial Evasion"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.13511"
authors: ["Muhammad Ebad Atif, Muhammad Haider Ali"]
date: "Tue, 15 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.13511v1"
image: ""
generated: "2026-09-15T19:00:21+05:30"
---

arXiv:2609.13511v1 Announce Type: new Abstract: Large language models are increasingly benchmarked against classical machine learning for network intrusion detection (NIDS), almost always using same-dataset evaluation, and that protocol turns out to be incomplete. Evaluating XGBoost and RoBERTa-LoRA on two independently collected NetFlow v2 networks across three axes (same-dataset performance, cross-dataset transfer, and adversarial evasion) reveals no universal winner. The two models are statistically tied same-dataset. XGBoost wins decisively under cross-dataset distribution shift, by 15 points of F1 and 25 points of balanced accuracy; on the target network RoBERTa-LoRA's false positive rate reaches 0.78, leaving it barely above chance despite a superficially moderate F1. RoBERTa-LoRA wins decisively under adversarial evasion, by roughly 17 points of F1 at a representative mid-range perturbation strength, while both models hold false positive rates below 0.01 throughout. The model an evaluator would recommend therefore depends entirely on which axis is tested, not on same-dataset accuracy alone. A staged feature-leakage ablation improves cross-dataset transfer non-monotonically, indicating the leakage signal is distributed across the feature representation rather than confined to a few columns, and cross-dataset transfer between our two networks is strongly directional. These results argue for evaluating NIDS models along multiple independent robustness axes, and with more than one metric per axis.
