---
title: "Leakage-Robust Evaluation and Data-Scale Sensitivity of Attention-Enhanced Multi-Task Learning for Joint Fault Diagnosis and Remaining Useful Life Estimation"
category: "Robotics & Engineering"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.16493"
authors: ["Md Mahamudur Rahaman Shamim, Md. Nuruzzaman, Zannatul Ferdus, Md Rajib Ahmed, Abieer Nwshad Anward, Mohammad Tooneer, Johir Uddin Khan, Khalid Hossen"]
date: "Tue, 21 Jul 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2607.16493v1"
image: ""
generated: "2026-07-21T19:05:01+05:30"
---

arXiv:2607.16493v1 Announce Type: new Abstract: Multi-task deep learning models that jointly perform fault classification and remaining useful life (RUL) regression are increasingly used in predictive maintenance, yet reported performance can be strongly affected by how sliding-window sequences are split into training and test sets. We investigate this issue using AMTLNet, an attention-enhanced multi-task architecture, on three public benchmarks: NASA C-MAPSS, NASA IMS, and the UCI Hydraulic System dataset. We show that naive splitting can inflate classification accuracy from a genuine 20-60 percent to 99.9 percent, or reduce it to 0 percent through degenerate class representation. To address this, we introduce a chunk-based, leakage-audited splitting protocol and evaluate all models using five seeds, one-way ANOVA, and Tukey HSD tests. On C-MAPSS, with 19,976 leakage-free training windows, AMTLNet matches a single-task CNN-LSTM baseline in classification, achieving 84.12 +/- 0.96 percent accuracy with Tukey p = 1.0, and reaches an R2 of 0.86 +/- 0.01 while significantly outperforming a naive multi-task baseline. On the smaller Bearing and Hydraulic datasets, multi-task training is unstable, but the failure mode differs: classification degrades for Bearing, whereas regression degrades for Hydraulic. We relate this asymmetry to label provenance and propose a practical framework for deciding when joint training is appropriate under data scarcity. Ablation results show that the multi-head attention branch is the main contributor to regression stability. Removing it reduces R2 from 0.861 to 0.766 and more than doubles classification variance, whereas the convolutional branch contributes little to regression despite using about one-third of the parameters. This study contributes a reusable leakage-audit protocol, seed-transparent evaluation, and evidence that task-specific stability depends more on label provenance than on task type.
