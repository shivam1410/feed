---
title: "FoggyTrust: Robust Federated Learning with Hierarchical Trust Networks"
category: "AI Research"
source: "arXiv (cs.LG)"
url: "https://arxiv.org/abs/2606.27622"
authors: ["Emmanuel Rassou, Tomas Gonzalez"]
date: "Mon, 29 Jun 2026 00:00:00 -0400"
score: 45
guid: "oai:arXiv.org:2606.27622v1"
image: ""
generated: "2026-06-29T19:05:09+05:30"
---

arXiv:2606.27622v1 Announce Type: new Abstract: Byzantine-robust federated learning seeks to protect distributed model training from malicious or corrupted clients without requiring access to their private data. FLTrust addresses this challenge by introducing a trusted server-side root dataset that assigns trust scores to client updates for more robust aggregation. In this work, we propose FOGGYTRUST, a hierarchical extension of FLTrust that localizes trust computation to fog nodes, allowing the framework to better handle globally heterogeneous data while preserving robustness within locally homogeneous client groups. We further show that this two-level architecture can simultaneously address distribution mismatch in trust estimation and client drift across groups by combining local trust-based aggregation with heterogeneity-aware global optimizers such as FedAdam and SCAFFOLD. Across benchmark datasets, FOGGYTRUST achieves its strongest gains on more challenging heterogeneous settings, particularly on CIFAR-10 under Krum and Trim attacks, where it achieves an over 50% improvement over FLTrust. We also test FOGGYTRUST in a real-world safari dataset to show the promise of hierarchical trust networks for robust federated learning in socially impactful, safety-critical settings such as distributed wildlife monitoring.
