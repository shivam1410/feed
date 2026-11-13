---
title: "When Does Causality Help in Multivariate Time-Series Anomaly Detection?"
category: "Other"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2611.15073"
authors: ["Long Zhang, Wei Huang, Aishui Rao, Jian Hu, Binxiang Wu, Jie Li, Chen Gong, Linxi Feng"]
date: "Fri, 13 Nov 2026 00:00:00 -0500"
score: ""
guid: "oai:arXiv.org:2611.15073v1"
image: ""
generated: "2026-11-13T19:01:04+05:30"
---

Causality-aware scoring is common in multivariate time-series anomaly detection, yet the literature rarely states when it helps. Holding one causality-guided autoencoder (DeCauAE) fixed, we vary graph quality, anomaly type and protocol against ground truth. Graph quality fixes the payoff: on a twenty-variable DAG the gain over a graph-free autoencoder decays as the graph is corrupted. Anomaly type fixes the target: the structural factor lifts window F1 from 0.800 to 0.976 where anomalies break conditional structure, and its advantage vanishes below a break severity s 0.3. Protocol fixes the ranking: point-adjusted F1 lets a random score match the full model, while range-aware VUS separates the autoencoder family from the classical baselines. On real benchmarks the causal module pays only where density makes a system eligible and cross-subsample reproducibility selects entities inside it; enabling it everywhere costs 0.012 VUS-ROC. The structural factor also transfers to classical detectors .
