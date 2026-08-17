---
title: "Hard Cases, Bad Labels: Testing Error Exposure and Error Location in Uncertainty Sampling Under Bounded Label Noise"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2608.13601"
authors: ["John Myron Uy"]
date: "Mon, 17 Aug 2026 00:00:00 -0400"
score: 60
guid: "oai:arXiv.org:2608.13601v1"
image: ""
generated: "2026-08-17T19:05:17+05:30"
---

arXiv:2608.13601v1 Announce Type: new Abstract: Active learning can reduce labeling cost by selecting informative examples, but the most uncertain examples may also be the hardest to label correctly. This study tests whether uncertainty sampling fails because it acquires more corrupted labels or because errors concentrated in difficult regions are especially harmful. Margin-based uncertainty sampling is compared with random sampling under clean labels, random classification noise (RCN), and bounded difficulty-dependent noise on three public binary tabular datasets. The design uses 100 paired seeds, nine expected noise rates from 0 to 0.30, annotation budgets from 20 to 120, and logistic regression with regularization re-selected by cross-validation at every budget. An exposure-matched RCN control aligns mean final acquired corruption, while a clean-label extension reaches budget 400. Under clean labels, uncertainty sampling improved normalized balanced-accuracy area under the learning curve by 1.09 to 1.77 percentage points on all datasets. Difficulty-dependent noise reduced this advantage more than RCN at six of eight rates on Breast Cancer Wisconsin, but at no tested rate on Banknote Authentication or MAGIC Gamma Telescope. Exposure-matched analyses found no corrected evidence for a universal additional penalty from structured error location. On clean MAGIC data, uncertainty sampling improved balanced accuracy while reducing average precision and true-positive rate at fixed false-positive rates. Thus, uncertainty sampling was label-efficient, but its apparent robustness depended on dataset, budget, noise structure, and evaluation metric.
