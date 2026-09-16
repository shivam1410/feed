---
title: "Multi-Label Proportion Learning for Sea-Ice Type Prediction"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.16347"
authors: ["Samira Alkaee Taleghan, Younghyun Koo, Andrew P. Barrett, Farnoush Banaei-Kashani"]
date: "Wed, 16 Sep 2026 00:00:00 -0400"
score: ""
guid: "oai:arXiv.org:2609.16347v1"
image: ""
generated: "2026-09-16T19:00:23+05:30"
---

arXiv:2609.16347v1 Announce Type: new Abstract: Sea-ice type prediction is important for climate monitoring, maritime navigation, and decision-making in polar regions. The main source of label data for this task is the ice chart, produced manually by ice analysts who interpret satellite imagery to delineate ice zones into polygons. Although ice charts are valuable, their production is labor-intensive and expensive, motivating recent efforts to automate the process using deep learning. However, deep learning models require patch-level (or pixel-level) label data for training, while ice charts provide only polygon-level annotations. As a workaround, supervised approaches often create approximate patch-level labels from polygon-level ice chart labels by assigning each sample the dominant ice type of its parent polygon. This approach enables supervised training but creates an ill-posed learning problem with intrinsically approximate solution. In this paper, we redefine sea-ice type prediction as a weakly supervised multi-label proportion learning problem to be able to directly use the polygon-level ice chart labels and avoid unnecessary label approximation for improved prediction accuracy. To address this problem, we propose a two-module framework where first Multiple Instance Learning (MIL) is used for water--ice classification, and then a multi-label proportion learning (MLPL) is introduced for ice-type composition prediction. We further extend this framework with a multimodal model that integrates SAR imagery with AMSR2 brightness temperatures and ERA5 reanalysis data through modality-guided auxiliary regularization. Evaluated on the AI4Arctic dataset, the SAR-only model reduces MAE by 14.5\% and more than doubles mean ice-class F1 over the best supervised baseline. The multimodal model further reduces MAE by 21.5\% and raises mean F1 by 41.2\% over the SAR-only model, and by 52.7\% over the supervised multimodal baseline.
