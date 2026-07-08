---
title: "SafeImpute: Reliable Clinical Data Imputation via Conformal Selection"
category: "Health & Medicine"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2607.05613"
authors: ["Xinrui He, Mengting Ai, Junting Wang, Curtiss B. Cook, Jingrui He"]
date: "Wed, 08 Jul 2026 00:00:00 -0400"
score: 64
guid: "oai:arXiv.org:2607.05613v1"
image: ""
generated: "2026-07-08T19:04:42+05:30"
---

arXiv:2607.05613v1 Announce Type: new Abstract: Clinical care often relies on key laboratory indicators, yet real-world patient visits are sparse and tests are ordered irregularly, leading to pervasive missingness. While many imputation methods improve average accuracy, they provide limited guidance on which imputed values are reliable enough for high-stakes downstream use. In this work, we study reliable clinical imputation, aiming to produce accurate imputations while selectively releasing the reliable results, with statistical control over clinically unacceptable errors. To achieve this goal, we propose SafeImpute, a reliable imputation framework for irregular and sparse clinical longitudinal records. SafeImpute constructs an event graph that captures both intra-patient temporal trajectories and inter-patient clinical similarity, and learns imputations with a two-relation GNN and adaptive fusion, regularized by an auxiliary masked reconstruction objective. For reliability guarantees, SafeImpute converts a proxy risk score into conformal p-values and applies the Benjamini--Hochberg procedure to control the false discovery rate (FDR) of unacceptable errors among released imputations at a user-specified tolerance. Experiments on our Mayo Clinic data, the public MIMIC-III and MIMIC-IV datasets show that SafeImpute achieves strong imputation accuracy while providing reliable error control, outperforming diverse baselines in both standard imputation evaluation and FDR-controlled selective-release evaluation.
