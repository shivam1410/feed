---
title: "A Lightweight Plug-in Gate for Transformer-Based Time-Series Forecasters"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2609.21044"
authors: ["Hongkai Zhuang, Tao Huang, Chen Hou"]
date: "Mon, 21 Sep 2026 00:00:00 -0400"
score: 53
guid: "oai:arXiv.org:2609.21044v1"
image: ""
generated: "2026-09-21T19:05:57+05:30"
---

arXiv:2609.21044v1 Announce Type: new Abstract: Covariate-rich time-series forecasting requires deciding how external variables enter the target forecasting path. Existing Transformer-based forecasters usually build a covariate representation and pass it to the encoder without an explicit admission stage. This paper studies pre-encoder covariate admission as an input-side interface that regulates that representation immediately before encoder processing. We implement the interface with a lightweight representation-level pre-encoder gate that assigns sigmoid scores to representation units, and we also study a usage-regularized variant that penalizes average admission. The interface is evaluated as a plug-in module for TimeXer, Inverted Transformer (iTransformer), and Patch Time Series Transformer (PatchTST) under a zero-extra-tuning protocol, where each gated model inherits the corresponding baseline configuration. Experiments on the Electricity Transformer Temperature minute-level (ETTm1 and ETTm2) datasets, Traffic, Energy, and influenza-like illness (ILI) include paired forecasting comparisons, gate-placement ablation, initialization ablation, controlled covariate-admission analysis, and a variance inflation factor (VIF)-informed permutation feature importance (PFI) diagnostic case study. In the tested settings, the gate is competitive with the corresponding baselines, and the usage penalty reduces average admission scores while keeping forecasting errors close to the unpenalized TimeXer setting.
